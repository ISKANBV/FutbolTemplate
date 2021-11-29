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

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/e/9/a/7/c/b/e9a7cb24773031c74febd41bb910f0b0dd9a2472.jpg)" }}>
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
                                    <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/8/e/e/2/1/b8ee21a985f81dca4b7c32121a7384503d2fede8.jpg" alt="" />
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
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/6/1/e/d/2/e/61ed2ed8036620be8bc4320323b701955e3f89c5.jpg)" }}>
                                <div className="content">
                                    <h3>Club Records</h3>
                                    <p>Tarix boyu qazandığımız uğurların siyahısı.</p>
                                    <Link to="/historyrdetail">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/d/0/d/4/4/d/d0d44d621bcd9bf7a184a05c4506e5a9ace830ca.jpg)" }}>
                                <div className="content">
                                    <h3>Wolves Muzeyi</h3>
                                    <p>Kurtlar Muzeyində xatirə zolağında gəzintiyə çıxın.</p>
                                    <Link to="/historymuseumdetail">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/5/c/8/5/4/7/5c85479ba0c159ddf1c08a7b509c1c918b69c6a9.jpg)" }}>
                                <div className="content">
                                    <h3>Şöhrət Zalı</h3>
                                    <p>Kurtlar Şöhrət Zalına kimlərin cəlb olunduğuna baxın.</p>
                                    <Link to="/historyzdetail">Daha çox məlumat əldə edin</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/3/1/3/f/d/9/313fd9546b8131cc8df6c4c53da976e7bfd0f004.jpg)" }}>
                                <div className="content">
                                    <h3>Menecerlər</h3>
                                    <p>Bütün Kurtlar menecerləri və baş məşqçilər haqqında oxuyun.</p>
                                    <Link to="/historymdetail">Daha çox məlumat əldə edin</Link>
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
