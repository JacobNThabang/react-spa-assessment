import { NavLink } from "react-router-dom";
import logo from "../../logo.svg"
import { useState } from "react";
import menu from "../../menu.svg"

export default function NavBar() {

    const  navItems = [
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Industies",
            path: "/industries"
        },
        {
            name: "Cases",
            path: "/cases"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ];

    const Nav = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleNavbar = () => {
            setIsOpen(!isOpen);
        }

        return(
            <nav>
                <div className="hidden w-full items-center justify-between md:flex">
                    {
                        navItems.map((navItem) => (
                            <NavLink to={navItem.path} key={navItem.name} className="text-white text-sm font-bold px-4 py-2">
                                {navItem.name}
                            </NavLink> 
                        ))
                    }
                </div>
                
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? 
                            "X" :
                            <img src={menu} alt="menu" /> 
                        }
                    </button>
                </div>
            </nav>
        )
    }
    
    return  (
        <header className="bg-primary-bg ticky top-0 z-20 mx-auto h-20 px-20 flex items-center justify-between">
            <img src={logo} alt="Logo" />
            <Nav />
            <button className="hidden md:flex bg-white text-primary-bg text-sm font-bold rounded-[50px] px-4 py-2">
                Let's Talk
            </button>
        </header>
    );
}