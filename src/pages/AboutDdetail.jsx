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

        <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/7/2/6/a/3/4726a3698f3291ea016be639b2b0c44c66267326.jpg)" }}>
            <div className="overlay">
                <h1>DIREKTORLARIN PROFİLLERİ</h1>
            </div>
        </div>

        <div className="aboutm" style={{paddingTop: "50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/3/b/e/8/6/f3be86d3746e130030518632040f66b61f43bcb7.jpg)" }}>
                            <div className="content">
                                <h3>Jeff Shi</h3>
                                <p>İcra başçısı</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/c/b/d/0/a/fcbd0a0c0a26980c2a524870321ce381c78eec75.jpg)" }}>
                            <div className="content">
                                <h3>John Gough</h3>
                                <p>Rejissor</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/2/3/d/3/2/b23d3226cbc4fee4016e8fe5a72b626c6db88cce.jpg)" }}>
                            <div className="content">
                                <h3>John Bowater</h3>
                                <p>Rejissor</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/5/d/b/4/a/e/5db4ae0f46081da209c176cf46752ca65e3928a4.jpg)" }}>
                            <div className="content">
                                <h3>Steve Bull MBE</h3>
                                <p>VİCE-PREZİDENT</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/3/c/5/d/d/43c5dd05635809477d58c4de6bd917c673282546.jpg)" }}>
                            <div className="content">
                                <h3>Ron Flowers MBE</h3>
                                <p>VİCE-PREZİDENT</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="zoom-out" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/1/e/2/d/5/4/1e2d5436baa10fe8f78d3635611665f817b6d9a9.jpg)" }}>
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
