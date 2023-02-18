import {NavLink} from "react-router-dom";


export default function NavBar() {
    return (
        <ul style={{display: "flex", listStyleType: "none"}}>
        <li style={{marginRight: "15px"}}>
            <NavLink
                to="/"
                className={({isActive}) => isActive && 'active'}
                state={"hello world"}

            >Main Page</NavLink>
        </li>

            <li style={{marginRight: "15px"}}>
            <NavLink
                to="/about"
                className={({isActive}) => isActive && 'active'}

            >About Page</NavLink>
        </li>

            <li style={{marginRight: "15px"}}>
            <NavLink
                to="/portfolio"
                className={({isActive}) => isActive && 'active'}

            >Portfolio Page</NavLink>
        </li>

            <li>
                <NavLink
                    to="/new"
                    className={({isActive}) => isActive && 'active'}

                >New Page</NavLink>
            </li>
    </ul>
    )}