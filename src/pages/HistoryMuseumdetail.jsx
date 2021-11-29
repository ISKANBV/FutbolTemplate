import React, { useEffect } from 'react'
import '../Assert/css/Aboutdetail.css'
import AOS from 'aos';
function HistoryMuseumdetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

        <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/e/9/a/7/c/b/e9a7cb24773031c74febd41bb910f0b0dd9a2472.jpg)" }}>
            <div className="overlay">
                <h1>MÜZE</h1>
            </div>
        </div>

        <div className="aboutm" style={{paddingTop: "50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/d/0/d/4/4/d/d0d44d621bcd9bf7a184a05c4506e5a9ace830ca.jpg)" }}>
                            <div className="content">
                                <h3>Muzey Biletləri alın</h3>
                                <p>Bilet Ofisini və ya Megastore'u ziyarət edin və ya 0371 222 1877 nömrəsinə zəng edin</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/e/f/1/c/f/a/ef1cfaa5bc39dae7dd46e87e3e0867a4a88b7e81.jpg)" }}>
                            <div className="content">
                                <h3>Stadion turuna çıxın</h3>
                                <p>Bazar günü turlarla Molineux Stadionunda pərdə arxasına keçin</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/b/f/5/d/4/abf5d4d2cc401e5b55e4dff7e3d23e25bb98f48f.jpg)" }}>
                            <div className="content">
                                <h3>Şəxsi Stadion Turu sifariş edin</h3>
                                <p>Molineux Stadionuna öz şəxsi qrup turunuzu sifariş edin.</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/6/1/e/d/2/e/61ed2ed8036620be8bc4320323b701955e3f89c5.jpg)" }}>
                            <div className="content">
                                <h3>Açılış vaxtları</h3>
                                <p>Kurtlar Muzeyi açılış saatları</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/8/e/e/2/1/b8ee21a985f81dca4b7c32121a7384503d2fede8.jpg)" }}>
                            <div className="content">
                                <h3>Muzeyi kirayə verin</h3>
                                <p>İşinizi və ya xüsusi tədbirinizi, 140 ildən çox tarixi olan, həqiqətən bənzərsiz bir məkanda keçirin!</p>
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

export default HistoryMuseumdetail
