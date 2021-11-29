import React, { useEffect } from 'react'
import '../Assert/css/Aboutdetail.css'
import AOS from 'aos';

function AboutMdetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/5/7/9/c/b/a/579cbae1492baef965e347fab839d22c003cb017.jpg)" }}>
                <div className="overlay">
                    <h1>İDARƏ QURUB</h1>
                </div>
            </div>

            <div className="aboutm">
                <div className="container">
                    <div className="headtext">
                        <h2>İDARƏ KOMANDASI ​​ilə tanış olun</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/1/c/b/1/c/a1cb1cdec41bd3453981b93cccf9ffe552aeceee.jpg)" }}>
                                <div className="content">
                                    <h3>Jeff Shi</h3>
                                    <p>İcra başçısı</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/9/6/0/f/e/4/960fe43de19e6b2dc6c6c218172d5fcd06596d73.jpg)" }}>
                                <div className="content">
                                    <h3>Scott Sellars</h3>
                                    <p>Texniki direktor</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/b/8/5/c/0/fb85c0753702cbdbcbd10f55f61b78ff79684887.jpg)" }}>
                                <div className="content">
                                    <h3>Matt Wild</h3>
                                    <p>Baş menecer - futbol əməliyyatları</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/3/4/8/0/e/43480e319a7ef8a8c0dbd89202202944050bbcdb.jpg)" }}>
                                <div className="content">
                                    <h3>Vinny Clark</h3>
                                    <p>Baş menecer - kommersiya əməliyyatları</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/0/e/0/9/d/f/0e09dfba265cf0adcc1b18cd99e8eff4f963f264.jpg)" }}>
                                <div className="content">
                                    <h3>Russell Jones</h3>
                                    <p>General manager - marketing and commercial growth</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sentences">
                <div className="container">
                    <div className="text">
                        <p>"Biz canavar sürüsü kimiyik. Çox böyük bir ailəyik."</p>
                        <span>Raul Jimenez</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMdetail
