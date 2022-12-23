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

        <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/4/b/f/c/c/a/4bfccaf31a9e2ca683707bbc624344ec86081c16.webp)" }}>
            <div className="overlay">
                <h1>MÜZE</h1>
            </div>
        </div>

        <div className="aboutm" style={{paddingTop: "50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/4/7/5/d/6/f475d65c827e145f6d645131dd3942161486849c.webp)" }}>
                            <div className="content">
                                <h3>Muzey Biletləri alın</h3>
                                <p>Bilet Ofisini və ya Megastore'u ziyarət edin və ya 0371 222 1877 nömrəsinə zəng edin</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/5/9/0/e/9/d/590e9dfa6896b0fce082cdf1132c5b1d7e094ba5.webp)" }}>
                            <div className="content">
                                <h3>Stadion turuna çıxın</h3>
                                <p>Bazar günü turlarla Molineux Stadionunda pərdə arxasına keçin</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/d/8/6/8/2/5/d8682593de804d71975f87d2ccc2179c6a7d1c9c.webp)" }}>
                            <div className="content">
                                <h3>Şəxsi Stadion Turu sifariş edin</h3>
                                <p>Molineux Stadionuna öz şəxsi qrup turunuzu sifariş edin.</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/2/e/f/c/4/9/2efc49cbff30dec56151fd4c9d1a0669adf8676c.webp)" }}>
                            <div className="content">
                                <h3>Açılış vaxtları</h3>
                                <p>Kurtlar Muzeyi açılış saatları</p>
                                <a href="">Daha çox oxu</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="box" data-aos="flip-up" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/2/e/2/9/b/9/2e29b9bf13288419ae459398edef87733d304935.webp)" }}>
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
