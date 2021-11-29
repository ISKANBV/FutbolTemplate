import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Assert/css/Detail.css'
import { connect } from 'react-redux'
import AOS from 'aos';
function TeamNewsdetailpage(props) {
    let { id } = useParams();
    AOS.init();
    const [data,setData] = useState();
    useEffect(() => {
        window.scrollTo(0, 0)
        setData(props.teamnews.filter(a => a.id == id))
    }, [id])
    return (
        <div style={{ marginTop: "130px" }}>


            <div className="detailtitle" style={{ backgroundImage: `url(${data && data[0].image})` }}>
                <div className="box" data-aos="zoom-out">
                    <h1>{data && data[0].title}</h1>
                </div>
            </div>

            <div className="description">
                <div className="content" data-aos="zoom-out">
                    <div className="time">
                        <p>{data && data[0].time}</p>
                    </div>

                    <h1>FIFA 22 oyunçu reytinqlərinin bu həftə açıqlanması ilə, biliklərinizin cari vəziyyətlə bağlı necə olduğunu sınayırıq
                        Kurtlar birinci komandasının ulduzları, populyar futbol oyununun son buraxılışına ədalətlə yanaşırlar.</h1>
                    <p>Bruno Lage komandasının 23 üzvünün hamısına temp, atış, dribling və müdafiə kimi müxtəlif sahələrdə 100 bal verildi. Bu reytinqlərdən Kurtlar birinci komandasının bütün oyunçularının ümumi göstəricilərini və statistikalarından birini topladıq.
                        <br /><br />

                        Ancaq aşağıdakı çox seçim variantlarından hansı Kurtlar oyunçusunun hansı reytinqlər dəstinə uyğun olduğunu müəyyən edə bilərsinizmi? Ən son Wolves Trivia viktorinasına qatılın və #WolvesTrivia -ya necə girdiyinizi bizə bildirin.
                        <br /><br />
                        (Statistika, fifplay.com saytından, 22 sentyabr 2021 -ci il tarixindən etibarən)</p>
                </div>
            </div>

            <div className="sentence">
                <div className="container">
                <div className="text">
                    <p>"Hər gün bura gəlməyi sevirəm, bu futbol klubunun bir hissəsi olmağı sevirəm."</p>
                    <span> Conor Coady</span>
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

export default connect(mapStateToProps)(TeamNewsdetailpage)
