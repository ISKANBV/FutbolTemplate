import React, { useRef, useState } from 'react'
import '../Assert/css/Header.css'
import { Link } from 'react-router-dom'
import logo from '../Assert/image/iskalog.png'
import search from '../Assert/image/search.svg'
import futterlogo from '../Assert/image/iskalogf.png'
import searchWhite from '../Assert/image/searchWhite.png'

function Header() {

    const allinfo = useRef();
    const searchdiv = useRef();
    const searchinp = useRef();
    const dropdown = useRef();
    const header = useRef();
    const menu = useRef();
    const topLine = useRef();
    const centerLine = useRef();
    const bottomLine = useRef();
    let headerr = document.getElementsByClassName("header")

    let [drop, setDrop] = useState(true);
    let [over, setOver] = useState(true);
    let [scroll, setScroll] = useState(true);

    const handleSearch = () => {
        allinfo.current.style.display = "none";
        searchdiv.current.style.display = "none";
        searchinp.current.style.display = "flex";

    }
    const handleClose = () => {
        allinfo.current.style.display = "block";
        searchdiv.current.style.display = "flex";
        searchinp.current.style.display = "none";
        searchinp.current.children[0].value = ""

    }

    const ToggleDropDown1 = (e) => {
        setDrop(!drop);
        if (e.target.parentElement.nextSibling.children[1].className == "fas fa-minus" ||
            e.target.parentElement.nextSibling.nextSibling.children[1].className == "fas fa-minus") {
            e.target.parentElement.nextSibling.children[2].style.display = "none"
            e.target.parentElement.nextSibling.children[1].className = "fas fa-plus"
            e.target.parentElement.nextSibling.nextSibling.children[2].style.display = "none"
            e.target.parentElement.nextSibling.nextSibling.children[1].className = "fas fa-plus"
        }

        if (drop == false) {
            e.target.className = "fas fa-minus"
            e.target.nextSibling.style.display = "block"
        }
        else {
            e.target.className = "fas fa-plus"
            e.target.nextSibling.style.display = "none"
        }




    }
    const ToggleDropDown2 = (e) => {
        setDrop(!drop);

        if (e.target.parentElement.previousSibling.children[1].className == "fas fa-minus" ||
            e.target.parentElement.nextSibling.children[1].className == "fas fa-minus") {
            e.target.parentElement.previousSibling.children[2].style.display = "none"
            e.target.parentElement.previousSibling.children[1].className = "fas fa-plus"
            e.target.parentElement.nextSibling.children[2].style.display = "none"
            e.target.parentElement.nextSibling.children[1].className = "fas fa-plus"
        }


        if (drop == false) {
            e.target.className = "fas fa-minus"
            e.target.nextSibling.style.display = "block"
        }
        else {
            e.target.className = "fas fa-plus"
            e.target.nextSibling.style.display = "none"
        }

    }
    const ToggleDropDown3 = (e) => {
        setDrop(!drop);

        if (e.target.parentElement.previousSibling.children[1].className == "fas fa-minus" ||
            e.target.parentElement.previousSibling.previousSibling.children[1].className == "fas fa-minus") {
            e.target.parentElement.previousSibling.children[2].style.display = "none"
            e.target.parentElement.previousSibling.children[1].className = "fas fa-plus"
            e.target.parentElement.previousSibling.previousSibling.children[2].style.display = "none"
            e.target.parentElement.previousSibling.previousSibling.children[1].className = "fas fa-plus"
        }

        if (drop == false) {
            e.target.className = "fas fa-minus"
            e.target.nextSibling.style.display = "block"
        }
        else {
            e.target.className = "fas fa-plus"
            e.target.nextSibling.style.display = "none"
        }

    }


    // window.addEventListener("scroll",() =>{
    //     setScroll(!scroll);
    //     header.className({scroll ? "header sticky" : "header"})
    //     // headerr.classList.add("sticky",window.scrollY > 0)
    // })

    const OpenMenu = () => {
        setOver(!over);
        if (over == true) {
            document.body.style.overflow = "hidden"
            menu.current.style.visibility = "visible";
            centerLine.current.style.transform = "rotate(495deg)";
            topLine.current.style.transform = "rotate(405deg)";
            bottomLine.current.style.transform = "rotate(-405deg)";
            topLine.current.style.top = "18px";
            bottomLine.current.style.top = "18px";
        }
        else {
            document.body.style.overflow = "scroll"
            menu.current.style.visibility = "hidden";
            centerLine.current.style.transform = "rotate(0deg)";
            topLine.current.style.transform = "rotate(0deg)";
            bottomLine.current.style.transform = "rotate(0deg)";
            topLine.current.style.top = "10px";
            bottomLine.current.style.top = "26px";
        }

    }

    const CloseMenu = () => {
        setOver(false);
        document.body.style.overflow = "scroll"
        menu.current.style.visibility = "hidden";
        centerLine.current.style.transform = "rotate(0deg)";
        topLine.current.style.transform = "rotate(0deg)";
        bottomLine.current.style.transform = "rotate(0deg)";
        topLine.current.style.top = "10px";
        bottomLine.current.style.top = "26px";

    }


    return (
        <div>
            <div className="header" ref={header}>
                <div className="top">
                    <div className="ownlink">
                        <Link to="/">ismayil.com</Link>
                    </div>
                    <div className="precontent">
                        <div className="ticket">
                            <ul>
                                <li><Link to="/membership" onClick={CloseMenu}>Üzvlük</Link></li>
                                <li><Link to="/shopselection" onClick={CloseMenu}>Mağaza</Link></li>
                            </ul>
                        </div>
                        <div className="login">
                            <ul>
                                <li><Link to="/login" onClick={CloseMenu}>Daxil ol</Link></li>
                                <li><Link to="/register" onClick={CloseMenu}>Qeydiyyat</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="content">
                        <div className="allinfo" ref={allinfo}>
                            <ul>
                                <li><Link to="/">Ana səhifə</Link></li>
                                <li className="down"><a>Komanda <i className="fas fa-chevron-down"></i></a>
                                    <ul className="dropdown1">
                                        <li><Link to="/players">Oyunçular <i className="fas fa-chevron-right"></i></Link></li>
                                        <li><Link to="/matchs">Matçlar <i className="fas fa-chevron-right"></i></Link></li>
                                        <li><Link to="/teamnews">Xəbərlər <i className="fas fa-chevron-right"></i></Link></li>
                                    </ul>
                                </li>
                                <li className="down"><a>Klub <i className="fas fa-chevron-down"></i></a>
                                    <ul className="dropdown2">
                                        <li><Link to="/aboutus">Bizim haqqımızda <i className="fas fa-chevron-right"></i></Link></li>
                                        <li><Link to="/history">Tarix <i className="fas fa-chevron-right"></i></Link></li>

                                    </ul>
                                </li>
                                <li className="down"><Link to="/news">Xəbərlər <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="dropdown3">
                                        <li><Link to="/latestnews">Ən son <i className="fas fa-chevron-right"></i></Link></li>
                                        <li><Link to="/teamnews">Komanda <i className="fas fa-chevron-right"></i></Link></li>
                                        <li><Link to="/academynews">Akademiya <i className="fas fa-chevron-right"></i></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contactus">Əlaqə</Link></li>

                            </ul>
                        </div>
                        <div className="searchinp" ref={searchinp}>
                            <input type="text" placeholder="Bura yazın və Enter düyməsini basın..." />
                            <button onClick={handleClose}><i className="fas fa-times"></i></button>
                        </div>
                        <div className="search" ref={searchdiv}>

                            <div className="icon">
                                <img src={searchWhite} alt="" onClick={handleSearch} />
                            </div>
                        </div>
                    </div>

                </div>


                <input type="checkbox" onClick={OpenMenu} className="toggler" />
                <div className="hamburger">
                    <div>
                        <div className="topline" ref={topLine}></div>
                        <div className="centerline" ref={centerLine}></div>
                        <div className="bottomline" ref={bottomLine}></div>
                    </div>
                </div>
                <div className="menu" ref={menu}>
                    <div>
                        <ul>
                            <li className="pb-2"><Link to="/" onClick={CloseMenu}>Ana səhifə</Link></li>
                            <li className="down pb-2"><a onClick={CloseMenu}>Komanda</a><i onClick={(e) => ToggleDropDown1(e)} className="fas fa-plus"></i>
                                <ul ref={dropdown} className="dropdown1">
                                    <li><Link to="/players" onClick={CloseMenu}>Oyunçular</Link></li>
                                    <li><Link to="/matchs" onClick={CloseMenu}>Matçlar</Link></li>
                                    <li><Link to="/teamnews" onClick={CloseMenu}>Xəbərlər</Link></li>
                                </ul>
                            </li>
                            <li className="down pb-2"><a onClick={CloseMenu}>Klub</a><i onClick={(e) => ToggleDropDown2(e)} className="fas fa-plus"></i>
                                <ul className="dropdown2">
                                    <li><Link to="/aboutus" onClick={CloseMenu}>Bizim haqqımızda</Link></li>
                                    <li><Link to="/history" onClick={CloseMenu}>Tarix</Link></li>

                                </ul>
                            </li>
                            <li className="down pb-2"><Link to="/news" onClick={CloseMenu}>Xəbərlər</Link><i onClick={(e) => ToggleDropDown3(e)} className="fas fa-plus"></i>
                                <ul className="dropdown3">
                                    <li><Link to="/latestnews" onClick={CloseMenu}>Ən son</Link></li>
                                    <li><Link to="/teamnews" onClick={CloseMenu}>Komanda</Link></li>
                                    <li><Link to="/academynews" onClick={CloseMenu}>Akademiya</Link></li>
                                </ul>
                            </li>
                            <li className="pb-2"><Link to="/contactus" onClick={CloseMenu}>Əlaqə</Link></li>

                        </ul>

                        <div className="futsearch">
                            <div className="src">
                                <input type="text" placeholder="Axtarış..." />
                                <img src={searchWhite} alt="" />
                            </div>
                            <div className="iteams">
                                <ul className="futlist">
                                    <li><a target="_blank" href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                    <li><a target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></li>
                                    <li><a target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                                <div className="logo">
                                    <img src={futterlogo} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
