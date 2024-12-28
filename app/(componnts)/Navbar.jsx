import Link from "next/link";
function Navbar() {
    let links=[
        {
            id:1,
            title:"about us",
            url:"/Aboutus"
        },
        {
            id:2,
            title:"blog",
            url:"/blog"
        },
        {
            id:3,
            title:"contact",
            url:"/contact"
        },
        {
            id:4,
            title:"Dashboard",
            url:"/dashboard"
        },
        {
            id:5,
            title:"Protfolio",
            url:"/protfolio"
        },
    ]
    return ( 
        <div className="container px-4 h-36 flex justify-between items-center text-white">
        <Link className={`${poppins.className} font-sans font-bold text-2xl`} href="/">lamamia</Link>
        <div className="flex items-center gap-10">
            {links.map(link=>{
                return (
                <div key={link.id}>
                <Link className="hover:text-lime-800" key={link.id} href={link.url}>{link.title}</Link>
                </div>)
            })}
        </div>
    </div> );
}

export default Navbar;