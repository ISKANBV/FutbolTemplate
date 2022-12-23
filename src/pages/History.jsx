import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../Assert/css/History.css'
import AOS from 'aos';
function History() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/b/f/c/c/a/4bfccaf31a9e2ca683707bbc624344ec86081c16.webp)" }}>
                <div className="overlay">
                    <h1>WOLVESIN TARİXİ</h1>
                    <h5>1877 -ci ildən bu günə qədər</h5>
                </div>
            </div>

            <div className="headhistory">
                <div className="container">
                <div className="headtext">
                        <h2>Klubun tarixçəsi haqqında daha çox məlumat əldə edin</h2>
                    </div>
                    <div className="row">
                    <div className="col-12 col-md-10 col-lg-10">
                            <div className="box" data-aos="flip-up">
                                <div className="img">
                                    <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/2/7/3/c/9/6/273c966bee316db10f6e8c41e9bf030f02796c70.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-10 col-lg-10">
                            <div className="box" data-aos="flip-up">
                                <div className="content">
                                    <h3>Wolvesin Hekayəsi</h3>
                                    <p>Bu tarixi klubun tarixini kəşf edin; 1877 -ci ilin başlanğıcından 1950 -ci illərdə Avropa futbolunun yaradılmasına kömək edən çoxsaylı liqa və FA Kuboku titullarına qədər və klubun "geri dönmə yolundadır".</p>
                                    <Link to="/historyhdetail">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="history" style={{backgroundColor: "rgba(230, 230, 230, 0.933)"}}>
                <div className="container">
                    <div className="headtext">
                        <h2></h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/4/e/b/9/9/f4eb999c9314d65ba207c6ce22e19109cd6e4f76.webp)" }}>
                                <div className="content">
                                    <h3>Club Records</h3>
                                    <p>Tarix boyu qazandığımız uğurların siyahısı.</p>
                                    <Link to="/historyrdetail">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/4/7/5/d/6/f475d65c827e145f6d645131dd3942161486849c.webp)" }}>
                                <div className="content">
                                    <h3>Wolves Muzeyi</h3>
                                    <p>Kurtlar Muzeyində xatirə zolağında gəzintiyə çıxın.</p>
                                    <Link to="/historymuseumdetail">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/2/b/2/7/7/f2b277b9a9303a0a049e315abaae902231546db6.webp)" }}>
                                <div className="content">
                                    <h3>Şöhrət Zalı</h3>
                                    <p>Kurtlar Şöhrət Zalına kimlərin cəlb olunduğuna baxın.</p>
                                    <Link to="">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/8/9/c/3/1/c/89c31cb3f7ce400c85843a30ad1a9e6ddf8cc529.webp)" }}>
                                <div className="content">
                                    <h3>Menecerlər</h3>
                                    <p>Bütün Kurtlar menecerləri və baş məşqçilər haqqında oxuyun.</p>
                                    <Link to="">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="sentences">
                <div className="container">
                    <div className="text">
                        <p>"Hər gün bura gəlməyi sevirəm, bu futbol klubunun bir hissəsi olmağı sevirəm."</p>
                        <span>Conor Coady</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default History
