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

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/f/f/9/4/3/aff943392b94e0bd42d71a7dbfe23abe6b7127a3.webp)" }}>
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
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/5/2/d/c/0/b52dc04eccd84496bd93e2793a0b78a6fffb51ba.webp)" }}>
                                <div className="content">
                                    <h3>Jeff Shi</h3>
                                    <p>İcra başçısı</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/9/4/e/3/c/b/94e3cbc4281bda89be1c1ab55cc3e9f719687875.webp)" }}>
                                <div className="content">
                                    <h3>Scott Sellars</h3>
                                    <p>Texniki direktor</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/3/1/a/d/6/b31ad6692adfb22e506b10f04900a1138d2c6ccc.webp)" }}>
                                <div className="content">
                                    <h3>Matt Wild</h3>
                                    <p>Baş menecer - futbol əməliyyatları</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/4/9/a/a/5/b49aa5c6519a723e820ad9bff27e3bf9feb4ad3d.webp)" }}>
                                <div className="content">
                                    <h3>Vinny Clark</h3>
                                    <p>Baş menecer - kommersiya əməliyyatları</p>
                                    <a href="">Daha çox oxu</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/3/7/1/c/7/a371c731ecbb8743c171623faa511f68e1c5419d.webp)" }}>
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
