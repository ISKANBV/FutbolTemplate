import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Assert/css/AboutUs.css'
import AOS from 'aos';

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/6/5/8/f/4/e/658f4ef61b2d4dce3d1a6c32bde80bd2e41c4ac6.png)" }}>
                <div className="overlay">
                    <h1>Bizim haqqımızda</h1>
                </div>
            </div>

            <div className="aboutus">
                <div className="container">
                    <div className="headtext">
                        <h2>BİZ WOLVES</h2>
                    </div>
                    <div className="contacticons">
                        <ul>
                            <li data-aos="zoom-out"><i class="fas fa-mobile-alt"></i><a href=""> 0371 222 2220</a></li>
                            <li data-aos="zoom-out"><i class="fas fa-envelope"></i><a href="">help@ismayil.az</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/5/e/f/2/6/f/5ef26f1e7073185d5548be783ae94b1ec7f1a064.jpg)" }}>
                                <div className="content">
                                    <h3>Sahiblik</h3>
                                    <p>Wolverhampton Wanderers Futbol Klubunun əsas əsas səhmdarları, Fosun Group -un sədri Guo Guangchang, Fosun Group -un CEO -su Wang Qunbin və Liang Xinjun -dur.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/1/c/b/1/c/a1cb1cdec41bd3453981b93cccf9ffe552aeceee.jpg)" }}>
                                <div className="content">
                                    <h3>İdarəetmə qrupu</h3>
                                    <Link to="/aboutmdetail">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/c/4/a/d/d/7/c4add73cab4bf156959ae96c52cb35e7c4f1fa9f.jpg)" }}>
                                <div className="content">
                                    <h3>Direktor profilləri</h3>
                                    <Link to="/aboutddetail">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/3/3/5/6/7/f/33567f973e95ccc0506d3f565cf5723eb881eba8.jpg)" }}>
                                <div className="content">
                                    <h3>Futbol heyəti</h3>
                                    <Link to="/aboutfdetail">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/f/e/e/d/c/4feedc60877958424a5747856a3f154a1b4e561d.jpg)" }}>
                                <div className="content">
                                    <h3>Oyunçu profilləri</h3>
                                    <Link to="/players">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/c/7/e/8/2/9/c7e829c4d63abb1786cda0a4453d817cae7cbf4a.jpg)" }}>
                                <div className="content">
                                    <h3>Futbol olmayan heyət</h3>
                                    <Link to="/aboutfdetail">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/2/b/8/8/5/8/2b885839f9c9a6086992579789926400e311d919.jpg)" }}>
                                <div className="content">
                                    <h3>Wolvesden soruş</h3>
                                    <p>Ask Wolves Jeff Shi və Wolves -un yüksək rəhbərlik qrupunun bir sıra mövzuları həll edərək tərəfdarları tərəfindən verilən suallara cavab verdiyini görür.</p>
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

export default AboutUs
