import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import OwlCarousel from 'react-owl-carousel2';
import '../Assert/css/Cart.css'
import Swal from 'sweetalert2'
function Cart(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const delCount = (id, count) => {
        if (count <= 1) {
            props.dispatch({ type: "REMOVE_CART", payload: id })
        } else {
            props.dispatch({ type: "DEL_COUNT", payload: id })
        }
    }

    const delCart = (id) => {
        props.dispatch({ type: "REMOVE_CART", payload: id })
    }

    const addCount = (id, count) => {
        if (count >= 20) {
            Swal.fire('Oops...', '20den cox əlavə edilə bilməz!', 'error')
        }
        else {
            props.dispatch({ type: "ADD_COUNT", payload: id })
        }

    }

    let total = 0;
    props.cart.map( e => {
        total += e.price * e.count
        return total
    })

    const finalShop = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Satınalma tamamlandı',
            showConfirmButton: false,
            timer: 1500
          })
          props.dispatch({ type: "REMOVE_ALLCART" })
    }


    const options = {
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        autoplay: true,
        dots: false,
        navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 4
            },
            1223: {
                items: 7
            }
        }
    };

    return (
        <div style={{ marginTop: "130px" }}>

            <div className="info">
                <ul>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/91.png" alt="" />UK STANDART ÇATDIRILMASI Cəmi 3 AZN.</li>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/287.png" alt="" />OPENPAY & LAYBUY İLƏ PULSUZ YAYIN.</li>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/75.png" alt="" />DÜNYA ÇAPINDA ÇATDIRILMA</li>
                </ul>
            </div>

            <div className="cartlist">
                <div className="headtext">
                    <h2>Alış-veriş çantası {props.cart.length > 0 ? `(${props.cart.length})` : ""}</h2>
                </div>
                {
                    props.cart.length > 0 ? <div className="roww">
                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="carts">
                                {
                                    props.cart.map((index, key) => (
                                        <div className="cartt" key={key} >
                                            <div className="img">
                                                <img src={index.image} alt="" />
                                            </div>
                                            <div className="content">
                                                <h3>{index.title}</h3>
                                                <span>{`$${index.price * index.count}.00`}</span>
                                                <h5>Rəng:<span>{index.color}</span></h5>
                                                <h5>Ölçü:<span>{index.size}</span></h5>
                                                <h5>Miqdar:<span><button onClick={() => delCount(index.id, index.count)}>-</button>{index.count}<button onClick={() => addCount(index.id, index.count)}>+</button></span></h5>
                                                <h6 onClick={() => delCart(index.id)}>Sil</h6>
                                            </div>
                                        </div>
                                    ))


                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-5">
                            <div className="cost">
                                <div className="costform">
                                    <div className="headtxt">
                                        <h4>XÜLASƏ</h4>
                                    </div>
                                    <div className="total">
                                        <h5>Aralıq cəmi<span>{`$${total}.00`}</span></h5>
                                        <h4>Ümumi Xərc<span>{`$${total}.00`}</span></h4>
                                        <a onClick={finalShop}>Ödəniş Edin</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> : <p className="emptytxt">Çantanız boşdur. Alış -veriş edərkən çantanıza əlavə etmək istədiyiniz bir şey görürsünüzsə, Çantaya Əlavə et düyməsini basın.</p>

                }

            </div>

            {
                props.cart.length > 0 ? <div className="recoment">
                <div className="headtext">
                    <h2>SİZ HƏMÇİNİN BƏYƏNƏ BİLƏRSİNİZ</h2>
                </div>
                <div className="roww">
                    <OwlCarousel options={options} >
                        {props.thirdkit.map((index, key) => (
                            <Link to={`/shopdetail/${index.id}`}>
                                <div className="box" key={key}>
                                    <div className="img">
                                        <img src={index.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>{index.title}</h3>
                                        <span>{`$${index.price}.00`}</span><br /><br />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </OwlCarousel>
                </div>
            </div> : ""
            }


        </div>
    )
}

let mapStateToProps = state => {
    return {
        thirdkit: state.thirdkit,
        cart: state.cart,
        homekit: state.homekit

    }
}

export default connect(mapStateToProps)(Cart)
