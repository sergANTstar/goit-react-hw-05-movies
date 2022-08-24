import { Outlet, NavLink } from "react-router-dom";

export const Shared = () => {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/goit-react-hw-05-movies/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/goit-react-hw-05-movies/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet/>
        </header>
    )
}