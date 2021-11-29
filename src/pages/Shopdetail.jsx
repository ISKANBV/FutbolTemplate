import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import OwlCarousel from 'react-owl-carousel2';
import '../Assert/css/Shopdetail.css'
import Swal from 'sweetalert2'

function Shopdetail(props) {

    let { id } = useParams();
    
    const addbtn = useRef(null);
    const stok = useRef();
    const [data, setData] = useState(null);
    const [size, setSize] = useState(false);



    useEffect(() => {
        window.scrollTo(0, 0)
        setData(props.thirdkit.filter(a => a.id == id))

    }, [id])

    const ChoseSize = (e, id) => {
        setSize(true);

        [...e.target.parentElement.children].filter(a => a.innerText == e.target.innerText)[0].style.backgroundColor = "#00A651";
        [...e.target.parentElement.children].filter(a => a.innerText != e.target.innerText).map(a => a.style.backgroundColor = "transparent")
        addbtn.current.style.backgroundColor = "#00A651";
        addbtn.current.style.cursor = "pointer";
        stok.current.style.display = "block";

        props.dispatch({ type: "ADD_SIZE_THIRDKIT", payload: id, value: e.target.innerText })

    }
    const AddToCard = (data) => {
        if (size == true) {
            let test = props.cart.filter(a => a.id === data.id)
            if (test.length < 1) {
                props.dispatch({ type: "ADD_CART", payload: data })
                Swal.fire({
                    title: 'MƏHSUL ÇANTANIZA ƏLAVƏ EDİLDİ!',
                    imageUrl: `${data.image}`,
                    text: `${data.title}`,
                    imageWidth: 300,
                    imageHeight: 300,    
                    confirmButtonText: 'OK!',
                  })
            }
            else {
                if (data.count >= 20) {
                    Swal.fire('Oops...', '20den cox əlavə edilə bilməz!', 'error')
                }
                else {
                    Swal.fire('MƏHSULUN MIQDARI ARTIRILDI!', '', 'success')
                    props.dispatch({ type: "ADD_COUNT", payload: data.id })
                }
            }

        }

    }
    console.log(props.cart);



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
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/91.png" alt="" />UK STANDART ÇATDIRILMASI Cəmi 3 AZN</li>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/287.png" alt="" />OPENPAY & LAYBUY İLƏ PULSUZ YAYIN</li>
                    <li><img src="https://shop.wolves.co.uk/siteimg/depthead/75.png" alt="" />DÜNYA ÇAPINDA ÇATDIRILMA</li>

                </ul>
            </div>
            
            <div className="addcard">
                <div className="img" >
                    <img src={data && data[0].image} alt="" />
                </div>
                <div className="iteams" >
                    <div className="toptxt">
                        <h4>{data && data[0].title}</h4>
                        <span>{`$${data && data[0].price}.00`}</span>
                    </div>
                    <div className="allert">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>16/09/2021 tarixindən sonra sifarişlər sifarişdən sonra 14 gün ərzində göndəriləcək.</p>
                    </div>
                    <div className="allert">
                        <i class="fas fa-tags"></i>
                        <p>Wolves Cash bu maddə ilə 5,50 funt sterlinq mükafatlandırıldı. Üzv ol və bu gün qazan.</p>
                    </div>
                    <h5>Rəng:<span>{data && data[0].color}</span></h5>
                    <div className="size">
                        <h6>ölçü:</h6>
                        <span ref={stok}><i class="fas fa-check"></i>Stokda</span>
                        <ul>
                            <li onClick={(e) => ChoseSize(e, data && data[0].id)}>XS</li>
                            <li onClick={(e) => ChoseSize(e, data && data[0].id)}>S</li>
                            <li onClick={(e) => ChoseSize(e, data && data[0].id)}>M</li>
                            <li onClick={(e) => ChoseSize(e, data && data[0].id)}>L</li>
                            <li onClick={(e) => ChoseSize(e, data && data[0].id)}>XL</li>
                            <li onClick={(e) => ChoseSize(e, data && data[0].id)}>2XL</li>
                        </ul>
                    </div>

                    <button onClick={() => AddToCard(data && data[0])} ref={addbtn}>Səbətə əlavə edin</button>

                    <div className="bottominfo">
                        <ul>
                            <li><img src="http://brand.openpay.com.au/wp-content/uploads/2020/05/OpenpayBrandpadAssets_2020-01-1.png" alt="" /> 4 faizsiz aylıq ödəniş 13,75 manat</li>
                            <li><img src="https://shop.wolves.co.uk/stdimg/laybuy-icon.png" alt="" /> 9,17 manat sterlinqdən 6 həftəlik faizsiz ödəniş</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="recoment">
                <div className="headtext">
                    <h2>SİZ HƏMÇİNİN BƏYƏNƏ BİLƏRSİNİZ</h2>
                </div>
                <div className="roww">
                    <OwlCarousel options={options} >
                        {props.homekit.map((index, key) => (
                            <Link to={`/homeshopdetail/${index.id}`}>
                                <div className="box" key={key} >
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
            </div>

            <div className="cart">
                <Link to="/cart">
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
        cart: state.cart,
        homekit: state.homekit

    }
}

export default connect(mapStateToProps)(Shopdetail)
