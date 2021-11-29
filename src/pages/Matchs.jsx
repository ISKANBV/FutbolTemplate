import React, { useEffect } from 'react'
import '../Assert/css/Matchs.css'
import AOS from 'aos';
import logo from '../Assert/image/iskalog.png'

function Matchs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/2/7/5/d/6/5/275d650e873aec4c843a21c1034aa2d7460d370c.jpg)" }}>
                <div className="overlay">
                    <h1>MATÇLAR</h1>
                </div>
            </div>

            <div className="shortmatch">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box b1" data-aos="zoom-out-right">
                                <div className="titletxt">
                                    <h4>SON MAÇ</h4>
                                </div>
                                <div className="scor">
                                    <div className="img" style={{backgroundColor: "#000"}}>
                                        <img src={logo} alt="" />
                                    </div>
                                    <p>2  <span>v</span>  1</p>
                                    <div className="img">
                                        <img src="https://wolves-cdn.azureedge.net/media/1966/newcastle.png" alt="" />
                                        <h6>Newcastle United</h6>
                                    </div>
                                </div>
                                <div className="time">
                                    <p>Şənbə 2 Oktyabr <span>EV</span> 15:00</p>
                                    <h5>Molineux</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box b2" data-aos="zoom-out-left">
                                <div className="titletxt">
                                    <h4>Növbəti matç</h4>
                                </div>
                                <div className="scor">
                                    <div className="img">
                                        <img src="https://wolves-cdn.azureedge.net/media/2304/aston-villa.png" alt="" />
                                        <h6>Aston Villa</h6>
                                    </div>
                                    <p><span>v</span></p>
                                    <div className="img" style={{backgroundColor: "#000"}}>
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                                <div className="time">
                                    <p>Şənbə 16 Oktyabr <span>Uzaq</span> 15:00</p>
                                    <h5>Villa Parkı</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="matchRes">
                <div className="container">
                    <div className="headtext">
                        <h2>Nəticələr</h2>
                    </div>
                    <div className="content">
                        <div className="month">
                            <h3>OKTYABR</h3>
                        </div>

                        <div className="box" data-aos="zoom-in-up">
                            <div className="time">
                                <p>2 oktyabr Şənbə<br /> <span>EV</span></p>
                                <h5>Molineux</h5>
                            </div>
                            <div className="img">
                                <img src="https://wolves-cdn.azureedge.net/media/1966/newcastle.png" alt="" />
                                <h6>Newcastle United</h6>
                            </div>
                            <div className="scor">
                                <p>2  <span>v</span>  1</p>
                                <div className="resicon" style={{backgroundColor: "#54c58f"}}>W</div>
                            </div>
                            <div className="figurdiv"></div>

                        </div>

                        <div className="month2">
                            <h3>SENTYABR</h3>
                        </div>

                        <div className="box" data-aos="zoom-in-up">
                            <div className="time">
                                <p>26 sentyabr bazar günü<br /> <span>Uzaq</span></p>
                                <h5>Müqəddəs Məryəm Stadionu</h5>
                            </div>
                            <div className="img">
                                <img src="https://wolves-cdn.azureedge.net/media/2544/southampton.png" alt="" />
                                <h6>Sauthempton</h6>
                            </div>
                            <div className="scor">
                                <p>0  <span>v</span>  1</p>
                                <div className="resicon" style={{backgroundColor: "#54c58f"}}>W</div>
                            </div>
                            <div className="figurdiv"></div>
                        </div>

                        <div className="box" data-aos="zoom-in-up">
                            <div className="time">
                                <p>22 sentyabr Çərşənbə<br /> <span>EV</span></p>
                                <h5>Molineux</h5>
                            </div>
                            <div className="img">
                                <img src="https://wolves-cdn.azureedge.net/media/1934/tottenham.svg" alt="" style={{width: "20%"}} className="fiximg"/>
                                <h6>Tottenham Hotspur</h6>
                            </div>
                            <div className="scor">
                                <p>2  <span>v</span>  2</p>
                                <div className="resicon" style={{backgroundColor: "#e4a72c"}}>D</div>
                            </div>
                            <div className="figurdiv"></div>
                        </div>

                        <div className="box" data-aos="zoom-in-up">
                            <div className="time">
                                <p>18 sentyabr şənbə<br /> <span>EV</span></p>
                                <h5>Molineux</h5>
                            </div>
                            <div className="img">
                                <img src="https://wolves-cdn.azureedge.net/media/2312/brentford.png" alt="" />
                                <h6>Brentford</h6>
                            </div>
                            <div className="scor">
                                <p>0  <span>v</span>  2</p>
                                <div className="resicon" style={{backgroundColor: "#eb353a"}}>L</div>
                            </div>
                            <div className="figurdiv"></div>
                        </div>

                        <div className="box" data-aos="zoom-in-up">
                            <div className="time">
                                <p>11 sentyabr Şənbə<br /> <span>Uzaq</span></p>
                                <h5>Vicarage Yolu</h5>
                            </div>
                            <div className="img">
                                <img src="https://wolves-cdn.azureedge.net/media/1935/watford.svg" alt="" />
                                <h6>Uotford</h6>
                            </div>
                            <div className="scor">
                                <p>0  <span>v</span>  2</p>
                                <div className="resicon" style={{backgroundColor: "#54c58f"}}>W</div>
                            </div>
                            <div className="figurdiv"></div>
                        </div>
                    </div>
                    <div className="load">
                        <a href="">daha çox yükləyin</a>
                    </div>
                </div>
            </div>

            <div className="sentences">
                <div className="container">
                <div className="text">
                    <p>"İngiltərədə oynadığım ən yaxşı atmosfer Molineuxdur."</p>
                    <span>Ruben Neves</span>
                </div>
                </div>
            </div>


        </div>
    )
}

export default Matchs
