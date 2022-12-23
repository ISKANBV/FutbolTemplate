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

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/2/3/b/a/f/d/23bafde2bd7a78432576a4f71c32063b3af3f362.webp)" }}>
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
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/0/1/b/8/d/401b8d313b8383c1d8270fde636da8f8ca75b21b.webp)" }}>
                                <div className="content">
                                    <h3>Sahiblik</h3>
                                    <p>Wolverhampton Wanderers Futbol Klubunun əsas əsas səhmdarları, Fosun Group -un sədri Guo Guangchang, Fosun Group -un CEO -su Wang Qunbin və Liang Xinjun -dur.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/0/2/7/b/e/b027be08db49ed61348db22f4aa2b79ce98fe989.webp)" }}>
                                <div className="content">
                                    <h3>İdarəetmə qrupu</h3>
                                    <Link to="/aboutmdetail">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/e/d/c/2/4/6/edc2461f875fdce7a51d02730ce07913d6a2209f.webp)" }}>
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
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/2/5/1/7/3/f/25173fd028967079b6914962779843d10559a5d0.webp)" }}>
                                <div className="content">
                                    <h3>Oyunçu profilləri</h3>
                                    <Link to="/players">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/7/4/d/e/8/a74de859be088718bdf7027fd5783f1be62d6018.webp)" }}>
                                <div className="content">
                                    <h3>Futbol olmayan heyət</h3>
                                    <Link to="">Bura basın</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/0/5/b/3/0/5/05b3058142ab00162b2744513688b9195c76ca18.webp)" }}>
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
