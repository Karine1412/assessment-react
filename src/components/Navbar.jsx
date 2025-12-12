import {Link} from "react-router-dom"

export default function Navbar_page(){
    return(
        <nav className="bg-[#f25e5e] border-b font-bold p-4 shadow-md">
            <ul className="flex gap-10 justify-end">
                <li className="text-white hover:underline">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:underline">
                    <Link to="/owner">Owner</Link>
                </li>
            </ul>
        </nav>
    )
}