"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {

  //OLD WAY TO FETCH DATA

  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
      });

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json()

      setData(data);
      setIsLoading(false);
    };
    getData()
  }, []);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: "ali",
        }),
      });
      router.refresh();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };


    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <img src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
};

export default Dashboard;