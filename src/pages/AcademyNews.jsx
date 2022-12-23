import React,{useState,useEffect} from 'react'
import '../Assert/css/News.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AOS from 'aos';
function AcademyNews(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/c/a/6/2/3/6/ca623662dd209b629f8dbab2426e1c6c5cefe815.webp)" }}>
                <div className="overlay">
                <div className="text">
                <h1>Xəbərlər</h1>
                <h4>Akademiya</h4>
                </div>
                </div>
            </div>

            <div className="section">
                <ul>
                    <li><Link to="/news">Xəbərlər</Link></li>
                    <li><Link to="/latestnews">Ən son</Link></li>
                    <li><Link to="/teamnews">Komanda</Link></li>
                    <li style={{backgroundColor: "#000"}}><Link to="/academynews" style={{color: "#fff"}}>Akademiya</Link></li>
                </ul>
            </div>

            <div className="newss">
                <div className="container">
                    <div className="row">
                        {
                        props.academynews.map( (index,key) => (
                            <div className="col-12 col-md-4 col-lg-4">
                             <div className="box" data-aos="zoom-out-down">
                                 <div className="img">
                                     <img src={index.image} alt="" />
                                 </div>
                                 <div className="text">
                                     <span>{index.type}</span>
                                     <Link to={`/academynewsdetail/${index.id}`}>{index.title}</Link>
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
        academynews: state.academynews

    }
}


export default connect(mapStateToProps)(AcademyNews)
