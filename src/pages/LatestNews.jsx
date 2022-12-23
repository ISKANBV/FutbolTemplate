import React,{useState,useEffect} from 'react'
import '../Assert/css/News.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AOS from 'aos';
function LatestNews(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      AOS.init();

    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/f/a/7/2/2/b/fa722b3025985bfb40478c00eca0d4157888a5a5.webp)" }}>
                <div className="overlay">
                <div className="text">
                <h1>Xəbərlər</h1>
                <h4>Ən son</h4>
                </div>
                </div>
                
            </div>

            <div className="section">
                <ul>
                    <li><Link to="/news">Xəbərlər</Link></li>
                    <li style={{backgroundColor: "#000"}}><Link to="/latestnews" style={{color: "#fff"}}>Ən son</Link></li>
                    <li><Link to="/teamnews">Komanda</Link></li>
                    <li><Link to="/academynews">Akademiya</Link></li>
                </ul>
            </div>

            <div className="newss">
                <div className="container">
                    <div className="row">
                        {
                        props.latestnews.map((index,key) => (
                            <div className="col-12 col-md-4 col-lg-4">
                             <div className="box" data-aos="zoom-out">
                                 <div className="img">
                                     <img src={index.image} alt="" />
                                 </div>
                                 <div className="text">
                                     <span>{index.type}</span>
                                     <Link to={`/detail/${index.id}`}>{index.title}</Link>
                                     <p>{index.time}</p>
                                 </div>
                             </div>
                         </div>
                        ))
                        }
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

let mapStateToProps = state => {
    return {
        latestnews: state.latestnews

    }
}

export default connect(mapStateToProps)(LatestNews)
