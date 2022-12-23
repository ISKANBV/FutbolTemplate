import React, { useEffect } from 'react'
import '../Assert/css/Aboutdetail.css'
import AOS from 'aos';

function AboutDdetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

        <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/7/f/4/7/0/4/7f47044e57c6eb04f819eb12b0b586f59f55198e.webp)" }}>
            <div className="overlay">
                <h1>DIREKTORLARIN PROFİLLERİ</h1>
            </div>
        </div>

        <div className="aboutm" style={{paddingTop: "50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/8/6/6/3/a/a8663a09f4875f57d4b4b703e0d114c5feacd1e8.webp)" }}>
                            <div className="content">
                                <h3>Jeff Shi</h3>
                                <p>İcra başçısı</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/8/0/7/a/e/4/807ae4e6b584541213d61ce477707328512fb87b.webp)" }}>
                            <div className="content">
                                <h3>John Gough</h3>
                                <p>Rejissor</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/6/c/4/0/5/9/6c40594d1299fabc213e725af3ca901469520d6c.webp)" }}>
                            <div className="content">
                                <h3>John Bowater</h3>
                                <p>Rejissor</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/2/1/7/e/0/a217e03715b34fd1d3eeb60b2a99892ff327ccd3.webp)" }}>
                            <div className="content">
                                <h3>Steve Bull MBE</h3>
                                <p>VİCE-PREZİDENT</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/9/0/6/9/a/49069aa1142aa0b3569a592e08a5405c692b9f58.webp)" }}>
                            <div className="content">
                                <h3>Ron Flowers MBE</h3>
                                <p>VİCE-PREZİDENT</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/e/4/6/6/3/ae46639ada59f7799a040482ca81526ac266fcae.webp)" }}>
                            <div className="content">
                                <h3>Robert Plant CBE</h3>
                                <p>VİCE-PREZİDENT</p>
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

export default AboutDdetail
