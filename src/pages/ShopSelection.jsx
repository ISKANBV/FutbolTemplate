import React,{useEffect} from 'react'
import '../Assert/css/Shopselection.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AOS from 'aos';
function ShopSelection(props) {
    AOS.init();
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

            <div className="selection">
                <div className="roww">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="box" data-aos="fade-up-right">
                        <Link to="/homeshop"><img src="https://shop.wolves.co.uk/siteimg/landingpageimg/172.jpg" alt="Home kit" /></Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="box" data-aos="fade-up">
                        <Link to="/awayshop"><img src="https://shop.wolves.co.uk/siteimg/landingpageimg/173.jpg" alt="Away kit" /></Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="box" data-aos="fade-up-left">
                        <Link to="/thirdshop"><img src="https://shop.wolves.co.uk/siteimg/landingpageimg/175.jpg" alt="Third kit" /></Link>
                        </div>
                    </div>
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
        cart: state.cart

    }
}

export default connect(mapStateToProps)(ShopSelection)
