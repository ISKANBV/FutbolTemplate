import React, { useEffect } from 'react'
import '../Assert/css/Players.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AOS from 'aos';

function Playerspage(props) {
    AOS.init();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/6/a/1/b/e/1/6a1be155602b3b0b96addfc00f9bcae0931ef007.jpg)" }}>
                <div className="overlay">
                    <h1>KOMANDA</h1>
                </div>
            </div>

            <div className="player">
                <div className="container">
                    <div className="row">
                        {
                            props.players.map((index, key) => (
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="box" key={key} data-aos="fade-up">
                                        <div className="playernum">{index.number}</div>
                                        <div className="img">
                                            <img src={index.image} alt="" className="playerimg" />
                                            <img src="https://wolves-cdn.azureedge.net/images/wolves-icon.png" alt="" className="wolicon" />
                                        </div>
                                        <div className="playername">
                                            <span>{index.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
let mapStateToProps = state => {
    return {
        players: state.players

    }
}


export default connect(mapStateToProps)(Playerspage)
