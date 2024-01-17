import {useEffect, useRef} from "react";
import logo from "../../assets/images/logo.png";
import {NavLink, Link} from "react-router-dom";
import userImg from "../../assets/images/user.svg";

const navilinks = [
    {
        path:'/',
        display:'Home'
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    },
]

const Header = () => {
    return <header className="header flex items-center">
        <div className="container">
            <div className="flex items-center justify-between">
                {/* ============== logo ==============*/}
                <div className="logo">
                    <img src={logo} alt="" className="w-20 h-auto"/>
                </div>

                {/* ============== nav ==============*/}
                <div className="navigation">
                    <ul className="menu flex items-center gap-[2.7rem]">
                        {navilinks.map((link, index) => 
                        <li key={index}>
                            <NavLink 
                                to={link.path} 
                                className={navClass =>
                                    navClass.isActive 
                                        ? "text-primaryColor text-[16px] leading-7 font-[600]" 
                                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor transition duration-300"
                                }
                                >
                                {link.display}</NavLink>
                        </li>
                            )
                        }
                    </ul>
                </div>

                {/* ============== auth ==============*/}
                <div className= "flex items-center gap-4">
                    <div>
                        <Link to='/'>
                            <figure className="w-[40px] h-[40px] rounded-full cursor-pointer">
                                <img src={userImg} alt="" className="w-full rounded-full"/>
                            </figure>
                        </Link>
                    </div>

                    <div>
                        <Link to='/login'>
                            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex 
                            item-center justify-center rounded-[50px]">Login</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </header>
}

export default Header