import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Assert/css/Shoplist.css'
import { connect } from 'react-redux'

function ThirdShop(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="info">
                <ul>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/91.png" alt="" />UK STANDART ÇATDIRILMASI Cəmi 3 AZN</li>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/287.png" alt="" />OPENPAY & LAYBUY İLƏ PULSUZ YAYIN</li>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/75.png" alt="" />DÜNYA ÇAPINDA ÇATDIRILMA</li>
                </ul>
            </div>

            <div className="shopiteams">
                <div className="roww">
                    {props.thirdkit.map((index, key) => (
                        <div className="col-12 col-md-6 col-lg-3">
                            <Link to={`/shopdetail/${index.id}`}>
                                <div className="box mb-3" key={key} >
                                    <div className="img">
                                        <img src={index.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>{index.title}</h3>
                                        <span>{`$${index.price}.00`}</span><br /><br />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cart">
            <Link to="cart">
            {props.cart.length > 0 ? <span>{props.cart.length}</span> : ""}
                <i class="fas fa-shopping-cart"></i>
            </Link>
            </div>

        </div>
    )
}

let mapStateToProps = state => {
    return {
        thirdkit: state.thirdkit,
        cart: state.cart

    }
}

export default connect(mapStateToProps)(ThirdShop)
