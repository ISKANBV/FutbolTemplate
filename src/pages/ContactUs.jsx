import React, { useEffect,useRef } from 'react'
import '../Assert/css/ContactUs.css'
import AOS from 'aos';
import { Link } from 'react-router-dom'

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    const signedAlert = useRef();
    const form = useRef();
    const errortext = useRef();
    const errortext2 = useRef();

    const SubscribeWithEmail = (e) => {
        e.preventDefault();
        console.log(e.target.parentElement.previousSibling.children[0].children[0].children[1].value.length);
        if([...e.target.parentElement.previousSibling.children[1].children[0].children[1].value].includes("@")  && 
        [...e.target.parentElement.previousSibling.children[0].children[0].children[1].value].length > 2  && 
        (e.target.parentElement.previousSibling.children[1].children[0].children[1].value.split("@")[1] == "mail.ru" || 
        e.target.parentElement.previousSibling.children[1].children[0].children[1].value.split("@")[1] == "mail.com" ||
        e.target.parentElement.previousSibling.children[1].children[0].children[1].value.split("@")[1] == "gmail.com")){
            
            errortext.current.style.display = "none"
            errortext2.current.style.display = "none"
            // src.current.style.display = "none"
            form.current.style.display = "none"
            signedAlert.current.style.display = "flex"
        }
        else if([...e.target.parentElement.previousSibling.children[0].children[0].children[1].value].length <= 2){
            errortext2.current.style.display = "block"
        }
        else{
            errortext.current.style.display = "block"
        }
    }

    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/6/4/b/b/d/a64bbdf20775f962c667ec644db815cc4670f024.webp)" }}>
                <div className="overlay">
                    <h1>BİZİMLƏ ƏLAQƏ SAXLAYIN</h1>
                </div>
            </div>

            <div className="contacts">
                <div className="container">
                    <div className="headtext">
                        <h2>NECƏ ƏLAQƏ SAXLANILIR</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Dəstəkçi Xidmətləri</h3>
                                    <p>0371 222 2220</p>
                                    <a href="">help@wolves.co.uk </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Bilet Ofisi və Üzvlük</h3>
                                    <p>0371 222 1877</p>
                                    <a href="">ticketoffice@wolves.co.uk </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Megastore / Poçt Sifarişi</h3>
                                    <p>0371 222 2220 (seçim 1)</p>
                                    <a href="">Bura basın</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Ümumi Sorğular</h3>
                                    <p>0371 222 2220</p>
                                    <a href="">help@wolves.co.uk </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Ticarət şöbəsi</h3>
                                    <p>0371 222 2220 (seçim 4)</p>
                                    <a href="">corporate@wolves.co.uk </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Konfrans və Ziyafət</h3>
                                    <p>0371 222 2220 (seçim 5)</p>
                                    <a href="">candb@wolves.co.uk </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Wolverhampton Wanderers Vəqfi</h3>
                                    <p>0371 222 2220 (seçim 6)</p>
                                    <a href="">foundation@wolves.co.uk  </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Sir Jack restoranı</h3>
                                    <p>0371 222 2220</p>
                                    <a href="">candb@wolves.co.uk</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Wolves Lotereyası</h3>
                                    <p>0371 222 2220</p>
                                    <a href="">lottery@wolves.co.uk </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-right">
                                <div className="content">
                                    <h3>Məşğulluq Sorğuları</h3>
                                    <p>0371 222 2220</p>
                                    <a href="">Vakansiyalar səhifəsi</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.367625266635!2d49.845991575905025!3d40.37854417144582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7c3a641cf%3A0x53a5c1e7cc11c36f!2z0JDQt9C10YDQsdCw0LnQtNC20LDQvdGB0LrQuNC5INCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCd0LXRhNGC0Lgg0Jgg0J_RgNC-0LzRi9GI0LvQtdC90L3QvtGB0YLQuA!5e0!3m2!1sru!2s!4v1671740926522!5m2!1sru!2s" style={{ border: "0" }} width="100%" height="400" allowfullscreen="" loading="lazy"></iframe>

            <div className="contactUs">
                <div className="container">
                    <div className="headtext">
                        <h2>BİZİMLƏ ƏLAQƏ SAXLAYIN</h2>
                    </div>
                    <form action="" ref={form}>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="box" data-aos="flip-right">
                                    <h4>AD VƏ SOYAD</h4>
                                    <input type="text" placeholder="Ad Və Soyad" />
                                    <p className="errortext" ref={errortext2}>Ad çox kiçikdir. 2 simvoldan çox olmalıdır</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="box" data-aos="flip-right">
                                    <h4>EMAIL</h4>
                                    <input type="email" placeholder="sizin@mailünvanınız.com" />
                                    <p className="errortext" ref={errortext}>Zəhmət olmasa etibarlı bir e -poçt daxil edin</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="box" data-aos="flip-right">
                                    <h4>MESAJ</h4>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Mesajınızı bura daxil edin"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="submit">
                            <button onClick={(e) => SubscribeWithEmail(e)}>Göndər</button>
                        </div>
                    </form>
                    <div className="signedAlert" ref={signedAlert} data-aos="flip-right">
                        <h4>TƏŞƏKKÜR EDİRƏM, mesajınız göndərildi. <br /> Bizə başqa bir <span>mesaj</span> göndərin və ya <span><Link to="/">ana səhifəyə</Link></span> qayıdın.</h4>
                    </div>
                </div>
            </div>


            <div className="sentences">
                <div className="container">
                    <div className="text">
                        <p>"Klubun zehniyyəti hər gün inkişaf etmək, hər dəqiqə, hər oyun, hər mövsüm inkişaf etməkdir."</p>
                        <span>Joao Moutinho</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs
