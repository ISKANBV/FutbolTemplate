import React,{useState,useEffect} from 'react'
import '../Assert/css/News.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AOS from 'aos';
function TeamNews(props) {
    AOS.init();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/8/d/d/d/1/5/8ddd1595a7cc67a69add777038f866865def170b.webp)" }}>
                <div className="overlay">
                <div className="text">
                <h1>Xəbərlər</h1>
                <h4>Komanda</h4>
                </div>
                </div>
            </div>

            <div className="section">
                <ul>
                    <li><Link to="/news">Xəbərlər</Link></li>
                    <li><Link to="/latestnews">Ən son</Link></li>
                    <li style={{backgroundColor: "#000"}}><Link to="/teamnews" style={{color: "#fff"}}>Komanda</Link></li>
                    <li><Link to="/academynews">Akademiya</Link></li>
                </ul>
            </div>

            <div className="newss">
                <div className="container">
                    <div className="row">
                        {
                        props.teamnews.map((index,key) => (
                            <div className="col-12 col-md-4 col-lg-4">
                             <div className="box" data-aos="zoom-out">
                                 <div className="img">
                                     <img src={index.image} alt="" />
                                 </div>
                                 <div className="text">
                                     <span>{index.type}</span>
                                     <Link to={`/teamnewsdetail/${index.id}`}>{index.title}</Link>
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
        teamnews: state.teamnews

    }
}

export default connect(mapStateToProps)(TeamNews)
