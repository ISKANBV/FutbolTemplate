import React, { useState, useEffect } from 'react'
import '../Assert/css/Home.css'
import { Fancybox } from "@fancyapps/ui";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import OwlCarousel from 'react-owl-carousel2';
import news2 from '../Assert/image/news2.jpg'
import logo from '../Assert/image/iskalog.png'
import AOS from 'aos';


function Home(props) {
    AOS.init();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        mouseDrag: false,
        dots: false,
        navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1223: {
                items: 4
            }
        }
    };
    const options2 = {
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        autoplay: true,
        dots: false,
        navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1223: {
                items: 3
            }
        }
    };

    console.log(props.thirdkit.title);
    return (
        <div style={{ marginTop: "130px" }}>
            <div className="title">
                <div className="box">
                    <div className="contnt">
                        <h1>WOLVES PAKETİNƏ QOŞULUN</h1>

                        <div className="clickbtn">
                            <Link to="/membership">Bura basın</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="news">
                <div className="container">
                    <div className="headtext">
                        <h2>SON XƏBƏRLƏR</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="box box1" data-aos="zoom-in">
                                <div className="img">
                                    <img src={props.latestnews.filter(a => a.id == 61)[0].image} alt="" />
                                </div>
                                <div className="text">
                                    <span>{props.latestnews.filter(a => a.id == 61)[0].type}</span>
                                    <Link to="/detail/61">{props.latestnews.filter(a => a.id == 61)[0].title}</Link>
                                    <p>{props.latestnews.filter(a => a.id == 61)[0].time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-6">
                                    <div className="box" data-aos="zoom-in">
                                        <div className="img">
                                            <img src={props.latestnews.filter(a => a.id == 62)[0].image} alt="" />
                                        </div>
                                        <div className="text">
                                            <span>{props.latestnews.filter(a => a.id == 62)[0].type}</span>
                                            <Link to="/detail/62">{props.latestnews.filter(a => a.id == 62)[0].title}</Link>
                                            <p>{props.latestnews.filter(a => a.id == 62)[0].time}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6">
                                    <div className="box" data-aos="zoom-in">
                                        <div className="img">
                                            <img src={props.latestnews.filter(a => a.id == 63)[0].image} alt="" />
                                        </div>
                                        <div className="text">
                                            <span>{props.latestnews.filter(a => a.id == 63)[0].type}</span>
                                            <Link to="/detail/63">{props.latestnews.filter(a => a.id == 63)[0].title} </Link>
                                            <p>{props.latestnews.filter(a => a.id == 63)[0].time}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6">
                                    <div className="box" data-aos="zoom-in">
                                        <div className="img">
                                            <img src={props.latestnews.filter(a => a.id == 64)[0].image} alt="" />
                                        </div>
                                        <div className="text">
                                            <span>{props.latestnews.filter(a => a.id == 64)[0].type}</span>
                                            <Link to="/detail/64">{props.latestnews.filter(a => a.id == 64)[0].title}</Link>
                                            <p>{props.latestnews.filter(a => a.id == 64)[0].time}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6">
                                    <div className="box" data-aos="zoom-in">
                                        <div className="img">
                                            <img src={props.latestnews.filter(a => a.id == 65)[0].image} alt="" />
                                        </div>
                                        <div className="text">
                                            <span>{props.latestnews.filter(a => a.id == 65)[0].type}</span>
                                            <Link to="/detail/65">{props.latestnews.filter(a => a.id == 65)[0].title}</Link>
                                            <p>{props.latestnews.filter(a => a.id == 65)[0].time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <Link to="/latestnews">Daha çox oxu</Link>
                    </div>
                </div>
            </div>

            <div className="wolwestv">
                <div className="headtext">
                    <h2>WOLVESTV</h2>
                </div>
                <div className="roww">
                    <OwlCarousel options={options} >
                        <div className="box" data-aos="zoom-in">
                            <a target="_blank" href="https://www.youtube.com/watch?v=BZ9omn0woFY&list=PL7bxCYhjCueRCZOMS_qbxF96L_nuIleSC">
                                <div className="play"><span><i class="fas fa-play"></i> Play</span></div>
                                <div className="img">
                                    <img src="https://open.http.mp.streamamg.com/p/3000198/sp/300019800/thumbnail/entry_id/0_j5zcbjl7//width/480" alt="" />
                                </div>
                                <p>Lage oyunçuları müdafiə səhvlərini aradan qaldırmağ...</p>
                                <div className="dropUp">
                                    <div className="maindrop">
                                        <h3>mətbuat konfransları</h3>
                                        <p>Lage oyunçuları müdafiə səhvlərini aradan qaldırmağa çağırır | Southampton əvvəli mətbuat konfransı<br />03:18</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a target="_blank" href="https://www.youtube.com/watch?v=v3aDqjHFE4k&t=9s">
                                <div className="play"><span><i class="fas fa-play"></i> Play</span></div>
                                <div className="img">
                                    <img src="https://open.http.mp.streamamg.com/p/3000198/sp/300019800/thumbnail/entry_id/0_adowhw5z//width/480" alt="" />
                                </div>
                                <p>Kurtlar Liqa Kubokundan penaltilərlə çıxır | Kurtlar...</p>
                                <div className="dropUp">
                                    <div className="maindrop">
                                        <h3>matçın əsas məqamları</h3>
                                        <p>Kurtlar Liqa Kubokundan penaltilərlə çıxır | Kurtlar 2-2 Tottenham Hotspur (2-3 Qələm) | Vurğulanan məqamlar<br />04:10</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a target="_blank" href="https://www.youtube.com/watch?v=BZ9omn0woFY">
                                <div className="play"><span><i class="fas fa-play"></i> Play</span></div>
                                <div className="img">
                                    <img src="https://open.http.mp.streamamg.com/p/3000198/sp/300019800/thumbnail/entry_id/0_kuvqpnol//width/480" alt="" />
                                </div>
                                <p>Lage, Carabao kubokunun Tottenham Hotspur'a çıxı...</p>
                                <div className="dropUp">
                                    <div className="maindrop">
                                        <h3>müsahibələr</h3>
                                        <p>Lage, Carabao kubokunun Tottenham Hotspur'a çıxışını qiymətləndirir,Brentford, Jimenezin forması və Moutinho'nun gələcəyi<br />03:18</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a target="_blank" href="https://www.youtube.com/watch?v=SG7fEZLH6xg">
                                <div className="play"><span><i class="fas fa-play"></i> Play</span></div>
                                <div className="img">
                                    <img src="https://open.http.mp.streamamg.com/p/3000198/sp/300019800/thumbnail/entry_id/0_c5sz0lsp//width/480" alt="" />
                                </div>
                                <p>Matkapları bitirmə və heç vaxt sevimli oğlunun ziyarətləri!</p>
                                <div className="dropUp">
                                    <div className="maindrop">
                                        <h3>təlim</h3>
                                        <p>Matkapları bitirmə və heç vaxt sevimli oğlunun ziyarətləri! | Spurs hazırlıqları<br />10:04</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a target="_blank" href="https://www.youtube.com/watch?v=T5Zi3NOo5Zc">
                                <div className="play"><span><i class="fas fa-play"></i> Play</span></div>
                                <div className="img">
                                    <img src="https://open.http.mp.streamamg.com/p/3000198/sp/300019800/thumbnail/entry_id/0_dzuhibja//width/480" alt="" />
                                </div>
                                <p>Wolves Records nədir? Bu Kurtlara necə kömək ...</p>
                                <div className="dropUp">
                                    <div className="maindrop">
                                        <h3>wolves tv xüsusiyyətləri</h3>
                                        <p>Wolves Records nədir? Bu Kurtlara necə kömək edə bilər? | Suallara cavab verildi<br />04:32</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a target="_blank" href="https://www.youtube.com/watch?v=s27955mIddQ&list=PL7bxCYhjCueRDIU3WNl1qbbdDPh98PWzd&index=2">
                                <div className="play"><span><i class="fas fa-play"></i> Play</span></div>
                                <div className="img">
                                    <img src="https://open.http.mp.streamamg.com/p/3000198/sp/300019800/thumbnail/entry_id/0_jtws5coa//width/480" alt="" />
                                </div>
                                <p>Liqa liderləri üzərində qələbə! Kurtlar 2-1 Fulhem | ...</p>
                                <div className="dropUp">
                                    <div className="maindrop">
                                        <h3>wolves akademiyası</h3>
                                        <p>Liqa liderləri üzərində qələbə! Kurtlar 2-1 Fulhem | PL2 -nin əsas məqamları<br />04:15</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div className="thirdshop">
                <div className="container">
                    <div className="headtext">
                        <h2>MAĞAZA 21/22 ÜÇÜNCÜ KIT</h2>
                        <span>İndi sifariş verin!</span>
                    </div>
                    <div className="roww">
                        <OwlCarousel options={options2} >
                            {props.thirdkit.map((index, key) => (
                                <div className="box" data-aos="zoom-in">
                                    <div className="img">
                                        <img src={index.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>{index.title}</h3>
                                        <span>{`$${index.price}.00`}</span><br /><br />
                                        <Link to={`/shopdetail/${index.id}`}>indi al</Link>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                    <div className="viewall">
                        <Link to="/thirdshop">hamısına bax</Link>
                    </div>
                </div>
            </div>


            <div className="tagnew">
                <div className="headtext">
                    <h2>#WOLNEW</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-5">
                            <div className="box" data-aos="zoom-in">
                                <img src="https://wolves-cdn.azureedge.net/media/20731/new-h13.jpg?anchor=center&mode=crop&width=1000&rnd=132776599510000000" data-fancybox="gallery" alt="" />
                            </div>
                        </div>

                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="box" data-aos="zoom-in">
                                <img src="https://i.guim.co.uk/img/media/a3a3d19a07c35ba0c59ce83848859ed9929f0d7e/191_373_5809_3486/master/5809.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8e545f4dc5e6f52040d2543d945a3b09" data-fancybox="gallery"
                                    alt="" />
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-lg-4">
                            <div className="box" data-aos="zoom-in">
                                <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/6/4/b/c/e/b/64bceb0a1fbf45ac98a67d45ae631e3a7e56393a.jpg" data-fancybox="gallery" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row row2">
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="box" data-aos="zoom-in">
                                <img src="https://wikiimg.tojsiabtv.com/wikipedia/commons/2/2e/Ronaldo_in_2018.jpg" data-fancybox="gallery" alt="" />
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-lg-4">
                            <div className="box" data-aos="zoom-in">
                                <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/e/c/d/c/b/6/ecdcb6153292119587fb06a7d0f151561078675f.jpg" data-fancybox="gallery" alt="" />
                            </div>
                        </div>

                        <div className="col-6 col-md-5 col-lg-5">
                            <div className="box" data-aos="zoom-in">
                                <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/3/2/4/8/4/4/3248444fb33c983ac7ca3b721811deb96877528d.jpg" data-fancybox="gallery" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="storeg">
                        <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/6/5/8/1/8/4/658184f072d1d3ff3715a84f24eca39a15b8c62a.jpg" data-fancybox="gallery" alt="" />
                        <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/a/d/b/c/2/fadbc2ba36913e7e8aabd4ce8376162730f5beeb.jpg" data-fancybox="gallery" alt="" />
                        <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/9/f/b/e/e/7/9fbee7f07e59c20e55cb0016f67b6a30566b18fb.jpg" data-fancybox="gallery" alt="" />
                        <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/a/5/e/5/2/b/a5e52b210f91bf3998c509b405368ee46cb5223b.jpg" data-fancybox="gallery" alt="" />
                        <img src="https://sawolvesprodnortheurope.blob.core.windows.net/cache/b/8/d/6/5/1/b8d6515f45700f4ab1467c064eba7ce1a37fac57.jpg" data-fancybox="gallery" alt="" />
                    </div>
                </div>
            </div>

            <div className="stories">
                <div className="container">
                    <div className="headtext">
                        <h2>Trend Hekayələr</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <Link to="/news">
                                <div className="box b1" data-aos="zoom-in">
                                    <div className="content">
                                        <span>17 Hekayələr</span>
                                        <h4>#WOLNEW</h4>
                                        <p>Kurtlar 2-1 Newcastle United</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <Link to="academynews">
                                <div className="box b2" data-aos="zoom-in">
                                    <div className="content">
                                        <span>21 Hekayələ</span>
                                        <h4>#Wolves Akademiyası</h4>
                                        <p>Kurtlar Akademiyasından ən son</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="matchs">
                <div className="container">
                    <div className="headtext">
                        <h2>FIKTURLAR</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="box b1" data-aos="zoom-in">
                                <div className="titletxt">
                                    <h4>SON MAÇ</h4>
                                </div>
                                <div className="scor">
                                    <div className="img" style={{ backgroundColor: "#000" }}>
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
                            <div className="box b2" data-aos="zoom-in">
                                <div className="titletxt">
                                    <h4>Növbəti matç</h4>
                                </div>
                                <div className="scor">
                                    <div className="img">
                                        <img src="https://wolves-cdn.azureedge.net/media/2304/aston-villa.png" alt="" />
                                        <h6>Aston Villa</h6>
                                    </div>
                                    <p><span>v</span></p>
                                    <div className="img" style={{ backgroundColor: "#000" }}>
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

            <div className="sentences">
                <div className="container">
                    <div className="text">
                        <p>"Klubun zehniyyəti hər gün inkişaf etmək, hər dəqiqə, hər oyun, hər mövsüm inkişaf etməkdir."</p>
                        <span>Joao Moutinho</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

let mapStateToProps = state => {
    return {
        thirdkit: state.thirdkit,
        latestnews: state.latestnews
    }
}

export default connect(mapStateToProps)(Home)
