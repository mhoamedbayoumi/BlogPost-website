import Image from "next/image";
import Link from "next/link";
function Aboutus() {
    return ( 
        <div className="text-white flex justify-center flex-col">
           <div className="flex justify-center items-center w-full h-80 relative">
           <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className="grayscale object-cover"
            />
           </div>
           <div className="flex flex-row gap-10">
            <div>
                <h1 className="text-white text-3xl font-bold">Who Are we? </h1>
                <br />
                <p className="text-slate-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit aperiam dolorem maiores porro nam accusamus vel <br /> maxime perspiciatis ipsam, excepturi aliquam beatae ratione explicabo quasi <br /> odit libero ad obcaecati quo nobis deleniti aspernatur unde doloribus illo. Porro ad possimus, quas saepe numquam commodi dolores eaque quia. Incidunt modi <br />laborum vel velit aliquid veniam animi vero? Corporis, hic eius debitis aliquid odit quam dignissimos fuga mollitia deleniti! Corrupti distinctio sint, <br />itaque velit recusandae deleniti neque exercitationem consequatur, blanditiis <br />facere enim fugit voluptates aspernatur voluptatibus earum aut maxime reprehenderit! Vel, ab.</p>
            </div>
            <div>
                <h1 className="text-white text-3xl font-bold">What We do?</h1>
                <br />
                <p className="text-slate-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae cupiditate, <br />optio deserunt iure ab suscipit voluptatem a mollitia sit officia odio accusamus rem cumque sed fugit veniam quis natus ratione, minus <br /> placeat quae modi reiciendis sunt. Aut saepe dolores corporis soluta quis accusantium, odio aspernatur nemo natus porro voluptatem repellat ipsa dolor qui! Repellat, debitis dolores <br /> quibusdam, ipsa nam, odio facilis voluptates nostrum eum aut cum. Laborum, quidem est.</p>
                <br />
                <Link href="/contact" className="p-5 cursor-pointer bg-green-500 border-none border-r-4 text-white w-max font-bold">Contact</Link>
            </div>
           </div>
        </div>
     );
}

export default Aboutus;