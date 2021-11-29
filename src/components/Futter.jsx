import React,{useRef} from 'react'
import '../Assert/css/Futter.css'
import manbetx from '../Assert/image/manbetx.png'
import castore from '../Assert/image/castorewebsite.png'
import bitci from '../Assert/image/bitciwebsite.png'
import royal from '../Assert/image/royalcaribbean.jpg'
import energy from '../Assert/image/energyangels.png'
import carling from '../Assert/image/carling.svg'
import futterlogo from '../Assert/image/iskalogf.png'
import premierliga from '../Assert/image/premier_league.svg'

function Futter() {

    const errortext = useRef();
    const signedAlert = useRef();
    const src = useRef();

    const SubscribeWithEmail = (e) => {

        if([...e.target.previousSibling.value].includes("@")  && 
        (e.target.previousSibling.value.split("@")[1] == "mail.ru" || 
        e.target.previousSibling.value.split("@")[1] == "mail.com" ||
        e.target.previousSibling.value.split("@")[1] == "gmail.com")){
            
            errortext.current.style.display = "none"
            src.current.style.display = "none"
            signedAlert.current.style.display = "flex"
        }
        else{
            errortext.current.style.display = "block"
            e.target.previousSibling.value = ""
        }
    }

    return (
        <div>
            <div className="futter">
                <div className="container">
                    <div className="main">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="logo">
                                    <img src={futterlogo} alt="" />
                                </div>
                                <div className="src" ref={src}>
                                    <h3>WOLVES HAKKINDAKİ BÜTÜN SON BİLGİLƏRİ ƏLDƏ EDİN</h3>
                                    <input type="email" placeholder="Email" />
                                    <button onClick={(e) => SubscribeWithEmail(e)}>ABUNƏ OLUN</button>
                                    <p className="errortext" ref={errortext}>Zəhmət olmasa etibarlı bir e -poçt daxil edin</p>
                                    <p>Wolves'dən gələn e -poçtlara qoşulmaq üçün abunə olun</p>
                                </div>
                                <div className="signedAlert" ref={signedAlert}>
                                    <h4>TƏŞƏKKÜRLƏR, indi qeydiyyatdan keçdiniz.</h4>
                                </div>

                            
                            </div>


                            <div className="col-12 col-md-12 col-lg-6">
                            <div className="icons">
                                    <h3>BİZİ İZLƏ</h3>
                                    <ul>
                                        <li><a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                                        <li><a target="_blank" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="sponsors">
                        <div className="row">
                            <div className="col-6 col-md-6 col-lg-2">
                                <div className="box">
                                    <a target="_blank" href="https://twitter.com/manbetxofficial"><img src={manbetx} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-2">
                                <div className="box">
                                    <a target="_blank" href="https://castore.com/?utm_source=Clubsite&utm_medium=Wolves&utm_campaign=HP"><img src={castore} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-2">
                                <div className="box">
                                    <a target="_blank" href="https://www.bitci.com/en?utm_source=Wolves&utm_medium=Wolves%20website%20footer%20logo&utm_campaign=Wolves"><img src={bitci} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-2">
                                <div className="box">
                                    <a target="_blank" href="https://www.royalcaribbean.com/gbr/en?utm_source=Wolves+Website&utm_medium=Wolves+Website+Footer&utm_campaign=Wolves"><img src={royal} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-2">
                                <div className="box">
                                    <a target="_blank" href="https://energyangels.co.uk/?utm_source=Wolves+Website&utm_medium=Wolves+Website+footer+logo&utm_campaign=Wolves"><img src={energy} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-2">
                                <div className="box">
                                    <a target="_blank" href="https://www.molsoncoors.com/av?url=https://www.molsoncoors.com/"><img src={carling} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="box2">
                                    <a target="_blank" href="https://www.premierleague.com/"><img src={premierliga} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Futter
