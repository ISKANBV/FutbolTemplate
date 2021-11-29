import React, { useEffect } from 'react'
import '../Assert/css/Membership.css'
import OwlCarousel from 'react-owl-carousel2';
import AOS from 'aos';
import Swal from 'sweetalert2'
function Membership() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        mouseDrag: false,
        dots: false,
        navText: [`<i class="fas fa-arrow-left"></i>`, `<i class="fas fa-arrow-right"></i>`],
        responsive: {
            0: {
                items: 1.2
            },
            767: {
                items: 2.2
            },
            1223: {
                items: 4.8
            }
        }
    };

    const BuyAlert = () =>{
        Swal.fire(
            'TƏBRİKLƏR!',
            'Satınalma tamamland!',
            'success'
          )
    }
    const GiftBuyAlert = () =>{
        const { value: email } = Swal.fire({
            title: 'Kimə hədiyyə göndərmək istərdiniz?',
            input: 'email',
            inputLabel: 'E-poçt ünvanını daxil edin',
            inputPlaceholder: 'E-poçt daxil edin'
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire(
                    'TƏBRİKLƏR!',
                    'Hədiyyəniz göndərildi!',
                    'success'
                  )
            } else if (result.isDenied) {
              Swal.fire('Bir daha yoxlayin', '', 'error')
            }
          })
          
          
          
    }

    return (
        <div style={{ marginTop: "130px" }}>

            <div className="titleship">
                <div className="videobox">
                    <video autoPlay muted loop playsInline>
                        <source src="https://memberships.wolves.co.uk/wp-content/themes/wolves-membership/library/images/video/fan-shots.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="box">
                    <h1>PAKETƏ QOŞUL</h1>
                    <p>2021/22 Mövsümü üçün <span>üzvlüyünüzü satın alın</span></p>

                    <div className="img">
                        <img src="https://memberships.wolves.co.uk/wp-content/themes/wolves-membership/library/images/misc/player-hero-new-4.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="mywolves">
                <div className="roww">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box boximg">
                            <div className="img">
                                <img src="https://memberships.wolves.co.uk/wp-content/uploads/2021/09/Adama-Traore-MyWolves.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box">
                            <div className="packtxt">
                                <h2>MƏNİM WOLVESIM</h2>
                                <span>YETİŞKİN 17+</span>
                            </div>
                            <div className="packprice">
                                <ul>
                                    <li><p>Yeni üzv qiyməti <br /> <span>35.00$</span></p></li>
                                    <li><p>Yeniləmə qiyməti (yalnız 20/21 üzv) <br /> <span>30.00$</span></p></li>
                                </ul>
                                <p>Mövsüm üçün *P&P istisna olmaqla</p>
                            </div>
                            <div className="packcontents">
                                <h3>ÜYƏLİKƏ DAHİLDİR</h3>
                                <ul>
                                    <li><span>Eksklüziv hədiyyələr</span></li>
                                    <li><span>Ağıllı kart</span></li>
                                    <li><span>Bilet və mallardan Kurtlar Nağd pul qazanmaq bacarığı (xərclərin 10% -i)</span></li>
                                    <li><span>100 Sadiqlik Xalı</span></li>
                                    <li><span>Ev biletləri üçün üzvlərin prioritet pəncərəsinə giriş</span></li>
                                    <li><span>Mövsüm biletləri gözləmə siyahısına daxil olmaq imkanı</span></li>
                                    <li><span>Yalnız üzvlərə aid olan xüsusi tədbirlərə dəvətnamələr</span></li>
                                    <li><span>Eksklüziv yarışlara giriş</span></li>
                                </ul>

                                <button id="buybtn" onClick={BuyAlert}>İNDİ ALIN</button>
                                <button id="infobtn">DAHA ÇOX MƏLUMAT</button>
                                <button id="giftbtn" onClick={GiftBuyAlert}>HƏDİYYƏ ALIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packbuy">
                <div className="col-6">
                    <div className="box" onClick={GiftBuyAlert}>
                        <p><i class="fas fa-gift"></i>HƏDİYYƏ ALIN</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box" style={{ backgroundColor: "#FDB92B" }} onClick={BuyAlert}>
                        <p><img src="https://memberships.wolves.co.uk/wp-content/themes/wolves-membership/library/images/icons/buy-now.svg" alt="" /> İNDİ ALIN</p>
                    </div>
                </div>
            </div>

            {/*...............................SECOND............................. */}

            <div className="mywolves">
                <div className="roww">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box boximg" >
                            <div className="img">
                                <img src="https://memberships.wolves.co.uk/wp-content/uploads/2021/09/Ruben-Neves-International.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box">
                            <div className="packtxt">
                                <h2>Beynəlxalq</h2>
                                <span style={{ backgroundColor: "#99815A" }}>Xarici azarkeşlər</span>
                            </div>
                            <div className="packprice">
                                <ul>
                                    <li><p>Yeni üzv qiyməti <br /> <span style={{ color: "#99815A" }}>35.00$</span></p></li>
                                    <li><p>Yeniləmə qiyməti (yalnız 20/21 üzv) <br /> <span style={{ color: "#99815A" }}>30.00$</span></p></li>
                                </ul>
                                <p>Mövsüm üçün *P&P istisna olmaqla</p>
                            </div>
                            <div className="packcontents">
                                <h3>ÜYƏLİKƏ DAHİLDİR</h3>
                                <ul>
                                    <li style={{ color: "#99815A" }}><span>Xüsusi qoşulma hədiyyələri (Hardbound notebook, premium qələm və soyuducu maqnit)</span></li>
                                    <li style={{ color: "#99815A" }}><span>Ağıllı kart</span></li>
                                    <li style={{ color: "#99815A" }}><span>Bilet və mallardan Kurtlar Nağd pul qazanmaq bacarığı (xərclərin 10% -i)</span></li>
                                    <li style={{ color: "#99815A" }}><span>100 Sadiqlik Xalı</span></li>
                                    <li style={{ color: "#99815A" }}><span>Shop.ismayil.com üçün birdəfəlik pulsuz göndərmə çeki</span></li>
                                    <li style={{ color: "#99815A" }}><span>Pulsuz muzeyə giriş çeki</span></li>
                                    <li style={{ color: "#99815A" }}><span>Matç günü Dünya Kurtlar Salonuna giriş</span></li>
                                    <li style={{ color: "#99815A" }}><span>Yalnız üzvlərə aid olan xüsusi tədbirlərə dəvətnamələr</span></li>
                                    <li style={{ color: "#99815A" }}><span>Eksklüziv yarışlara giriş</span></li>
                                </ul>

                                <button id="buybtn2" onClick={BuyAlert}>İNDİ ALIN</button>
                                <button id="infobtn2">DAHA ÇOX MƏLUMAT</button>
                                <button id="giftbtn" onClick={GiftBuyAlert}>HƏDİYYƏ ALIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packbuy">
                <div className="col-6">
                    <div className="box" onClick={GiftBuyAlert}>
                        <p><i class="fas fa-gift"></i>HƏDİYYƏ ALIN</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box" style={{ backgroundColor: "#99815A" }} onClick={BuyAlert}>
                        <p><img src="https://memberships.wolves.co.uk/wp-content/themes/wolves-membership/library/images/icons/buy-now.svg" alt="" /> İNDİ ALIN</p>
                    </div>
                </div>
            </div>

            {/*...............................THIRD............................. */}

            <div className="mywolves">
                <div className="roww">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box boximg" >
                            <div className="img">
                                <img src="https://memberships.wolves.co.uk/wp-content/uploads/2021/09/Jose-Sa-Dribblers.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box">
                            <div className="packtxt">
                                <h2># CANAVAR PAKETİ</h2>
                                <span style={{ backgroundColor: "#16AFD4" }}>YAŞ 12-16</span>
                            </div>
                            <div className="packprice">
                                <ul>
                                    <li><p>Yeni üzv qiyməti <br /> <span style={{ color: "#16AFD4" }}>20.00$</span></p></li>
                                    <li><p>Yeniləmə qiyməti (yalnız 20/21 üzv) <br /> <span style={{ color: "#16AFD4" }}>15.00$</span></p></li>
                                </ul>
                                <p>Mövsüm üçün *P&P istisna olmaqla</p>
                            </div>
                            <div className="packcontents">
                                <h3>ÜYƏLİKƏ DAHİLDİR</h3>
                                <ul>
                                    <li style={{ color: "#16AFD4" }}><span>Eksklüziv qoşulma hədiyyələri (Bluetooth dinamik, kabel sıxma, açar açar)</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>Ağıllı kart</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>Bilet və mallardan Kurtlar Nağd pul qazanmaq bacarığı (xərclərin 10% -i)</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>100 Sadiqlik Xalı</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>Ev biletləri üçün üzvlərin prioritet pəncərəsinə giriş</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>Mövsüm biletləri gözləmə siyahısına daxil olmaq imkanı</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>Milad kartı</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>Yalnız üzvlərə aid olan xüsusi tədbirlərə dəvətnamələr</span></li>
                                    <li style={{ color: "#16AFD4" }}><span>Eksklüziv yarışlara giriş</span></li>
                                </ul>

                                <button id="buybtn4" onClick={BuyAlert}>İNDİ ALIN</button>
                                <button id="infobtn4">DAHA ÇOX MƏLUMAT</button>
                                <button id="giftbtn" onClick={GiftBuyAlert}>HƏDİYYƏ ALIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packbuy">
                <div className="col-6">
                    <div className="box" onClick={GiftBuyAlert}>
                        <p><i class="fas fa-gift"></i>HƏDİYYƏ ALIN</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box" style={{ backgroundColor: "#16AFD4" }} onClick={BuyAlert}>
                        <p><img src="https://memberships.wolves.co.uk/wp-content/themes/wolves-membership/library/images/icons/buy-now.svg" alt="" /> İNDİ ALIN</p>
                    </div>
                </div>
            </div>

            {/*...............................Four............................. */}

            <div className="mywolves">
                <div className="roww">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box boximg">
                            <div className="img">
                                <img src="https://memberships.wolves.co.uk/wp-content/uploads/2021/09/Fabio-Silver-Young-Wolves.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="box">
                            <div className="packtxt">
                                <h2>GƏNC WOLVES</h2>
                                <span style={{ backgroundColor: "#A8C142" }}>3-11 YAŞ</span>
                            </div>
                            <div className="packprice">
                                <ul>
                                    <li><p>Yeni üzv qiyməti <br /> <span style={{ color: "#A8C142" }}>20.00$</span></p></li>
                                    <li><p>Yeniləmə qiyməti (yalnız 20/21 üzv) <br /> <span style={{ color: "#A8C142" }}>15.00$</span></p></li>
                                </ul>
                                <p>Mövsüm üçün *P&P istisna olmaqla</p>
                            </div>
                            <div className="packcontents">
                                <h3>ÜYƏLİKƏ DAHİLDİR</h3>
                                <ul>
                                    <li style={{ color: "#A8C142" }}><span>Xüsusi qoşulma hədiyyələri (Lock notebook, UV qələm, futbol topper qələm, kabel çimdik və stikerlər)</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Ağıllı kart</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Bilet və mallardan Kurtlar Nağd pul qazanmaq bacarığı (xərclərin 10% -i)</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Mövsüm biletləri gözləmə siyahısına daxil olmaq imkanı</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Shop.ismayil.com üçün birdəfəlik pulsuz göndərmə çeki</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Pulsuz muzeyə giriş çeki</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Bir matç günü maskotu olmaq şansı</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Yalnız üzvlərə aid olan xüsusi tədbirlərə dəvətnamələr</span></li>
                                    <li style={{ color: "#A8C142" }}><span>Eksklüziv yarışlara giriş</span></li>
                                </ul>

                                <button id="buybtn3" onClick={BuyAlert}>İNDİ ALIN</button>
                                <button id="infobtn3">DAHA ÇOX MƏLUMAT</button>
                                <button id="giftbtn" onClick={GiftBuyAlert}>HƏDİYYƏ ALIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packbuy">
                <div className="col-6">
                    <div className="box" onClick={GiftBuyAlert}>
                        <p><i class="fas fa-gift"></i>HƏDİYYƏ ALIN</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box" style={{ backgroundColor: "#A8C142" }} onClick={BuyAlert}>
                        <p><img src="https://memberships.wolves.co.uk/wp-content/themes/wolves-membership/library/images/icons/buy-now.svg" alt="" /> İNDİ ALIN</p>
                    </div>
                </div>
            </div>

            <div className="draws">
                <div className="headtext">
                    <h2>ÜYƏ MÜKAFATI ÇƏKİLİR</h2>
                    <span>Müntəzəm üzv mükafat çekimimizdən son qazananlarımızdan bəziləri:</span>
                </div>
                <div className="roww">
                    <OwlCarousel options={options} >
                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2020/11/Leighton-scaled.jpg)"}}>
                            <div className="content">
                                <h4>Leighton - 11 yaş</h4>
                                <p>20/21 ev formasının qalibi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2020/11/Oliver.jpg)"}}>
                            <div className="content">
                                <h4>Oliver - 6 yaş</h4>
                                <p>20/21 Ev Qapıçı formasının qalibi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2020/11/Rueben.jpg)"}}>
                            <div className="content">
                                <h4>Reuben - 2 yaş</h4>
                                <p>Cadburys x Wolves şokolad barının qalibi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2020/11/Coady-200-Rebecca-Pugh.jpg)"}}>
                            <div className="content">
                                <h4>Rebecca –  aged 27</h4>
                                <p>İmzalanmış Conor Coady formasının qalibi (klubdakı 200 oyununu qeyd etmək üçün)</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2020/11/Fifa-Twitter-Winner.jpg)"}}>
                            <div className="content">
                                <h4>Katie-Jayne-9 yaş</h4>
                                <p>FIFA 21 hədiyyə qalibi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2020/11/Elsie.jpg)"}}>
                            <div className="content">
                                <h4>Elsi - 4 yaşında</h4>
                                <p>Halloween Wolves Hamper qalibi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2020/11/Steve-Hales.jpg)"}}>
                            <div className="content">
                                <h4>Stiv - 52 yaş</h4>
                                <p>Raul Jimenezin köynək qalibi (klubda 100 matçını qeyd etmək üçün)</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2021/01/joseph.jpg)"}}>
                            <div className="content">
                                <h4>Yusif - 6 yaş</h4>
                                <p>Wolves Christmas Jumper Winner - Gənc Kurtlar 12 günlük Milad hədiyyəsi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2021/01/Rory-Simms.jpg)"}}>
                            <div className="content">
                                <h4>Rory - aged 9</h4>
                                <p>İmzalı Kurtlar Futbol Qalibi - Gənc Kurtlar 12 günlük Milad hədiyyəsi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2021/01/Alfie.jpg)"}}>
                            <div className="content">
                                <h4>Alfie - 10 yaş</h4>
                                <p>Milad kart rəsm müsabiqəsinin qalibi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2021/01/Noah.jpg)"}}>
                            <div className="content">
                                <h4>Nuh - 7 yaşında</h4>
                                <p>Kurtlar papaq və eşarp qalibi - Gənc Kurtlar 12 günlük Milad hədiyyəsi</p>
                            </div>
                        </div>

                        <div className="box" data-aos="zoom-out-up" style={{backgroundImage: "url(https://memberships.wolves.co.uk/wp-content/uploads/2021/03/Charlie-Jacob-e1616495606561.jpg)"}}>
                            <div className="content">
                                <h4>Charlie & Jacob - 7 və 4 yaş</h4>
                                <p>Dünya Kitab Günü Mükafatçısı</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>




        </div>
    )
}

export default Membership
