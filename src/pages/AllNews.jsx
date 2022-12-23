import React,{useState,useEffect} from 'react'
import '../Assert/css/News.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AOS from 'aos';
function AllNews(props) {
    AOS.init();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/5/c/0/5/4/b/5c054b5b373f5162a0b6c652254383abab8da3b8.webp)" }}>
                <div className="overlay">
                <h1>Xəbərlər</h1>
                </div>
            </div>

            <div className="section">
                <ul>
                    <li style={{backgroundColor: "#000"}}><Link to="/news" style={{color: "#fff"}}>Xəbərlər</Link></li>
                    <li><Link to="/latestnews">Ən son</Link></li>
                    <li><Link to="/teamnews">Komanda</Link></li>
                    <li><Link to="/academynews">Akademiya</Link></li>
                </ul>
            </div>

            <div className="newss">
                <div className="container">
                    <div className="row">
                        {
                        props.allnews.map((index,key) => (
                            <div className="col-12 col-md-4 col-lg-4">
                            <div className="box" data-aos="zoom-out-down">
                                <div className="img">
                                    <img src={index.image} alt="" />
                                </div>
                                <div className="text">
                                    <span>{index.type}</span>
                                    <Link to={`/newsdetail/${index.id}`}>{index.title}</Link>
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
        allnews: state.allnews

    }
}

export default connect(mapStateToProps)(AllNews)
