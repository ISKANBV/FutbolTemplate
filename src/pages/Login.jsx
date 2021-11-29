import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import AOS from 'aos';
function Login() {

    const [data, setData] = useState(null);
    const [inp, setInp] = useState(null);
    const [name, setName] = useState(false);
    const errortext = useRef();
    const errortext2 = useRef();
    AOS.init();
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInp({
            ...inp,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        data.map(a => {
            if (a.Email == inp.Email &&
                a.password == inp.password) {
                setName(a.Ad);
                errortext.current.style.display = "none"
                errortext2.current.style.display = "none"
                Swal.fire('GİRİŞ OLUNDU!', '', 'success')
                e.target.children[0].value = "";
                e.target.children[4].value = "";
            }
            else if (a.Email != inp.Email) {
                errortext.current.style.display = "block"
            }
            else if (a.Email == inp.Email && a.password != inp.password) {
                errortext2.current.style.display = "block"
            }
        })
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        fetch("http://localhost:8000/userList")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div style={{ marginTop: "130px" }}>

            {name == false ? <div className="register">
                <div className="headtext">
                    <h2>GİRİŞ / QEYDİYYAT</h2>
                    <p>
                        Kurtlar Hesabı e -poçt və şifrənizlə aşağıdan daxil olun. Və ya yeni bir hesab yaradın.</p>
                </div>
                <form action="" onSubmit={(e) => handleSubmit(e)} data-aos="zoom-out">

                    <input type="email" placeholder="E -poçt" name="Email" onChange={(e) => handleChange(e)} /><br /><br />
                    <p className="errortext" ref={errortext}>E -poçt səhvdir!</p>
                    <input type="text" placeholder="Şifrə" name="password" onChange={(e) => handleChange(e)} /><br />
                    <p className="errortext" ref={errortext2}>Şifrə düzgün deyil!</p>

                    <div className="submitbtn">
                        <ul>
                            <li><button>DAXİL OL</button></li>
                            <li>və ya</li>
                            <li><Link to="/register"><button>QEYDİYYAT</button></Link></li>
                        </ul>
                    </div>
                </form>
                <div className="icons">
                    <div className="img">
                        <img src="https://login.wolves.co.uk/resources/images/or_divide.png" alt="" />
                    </div>
                    <ul data-aos="zoom-out">
                        <li className="li1"><a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=276833659620656&kid_directed_site=0&app_id=276833659620656&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv10.0%2Fdialog%2Foauth%2F%3Fclient_id%3D276833659620656%26redirect_uri%3Dhttps%253A%252F%252Flogin.wolves.co.uk%252FAuth%252FFacebookSignin%26response_type%3Dcode%26state%3D1%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D5073af06-3e26-4671-881e-55a0bdd7f0d7%26tp%3Dunspecified&cancel_url=https%3A%2F%2Flogin.wolves.co.uk%2FAuth%2FFacebookSignin%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D1%23_%3D_&display=page&locale=ru_RU&pl_dbl=0"><i class="fab fa-facebook-f"></i></a></li>
                        <li className="li2"><a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=49949073982-1qlvkohvu7pq3k4h78hcg4mf05jv8d0e.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flogin.wolves.co.uk%2FAuth%2FGoogleSignin&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&flowName=GeneralOAuthFlow"><i class="fab fa-google"></i></a></li>
                    </ul>
                </div>


            </div> : <div className="afterlogindiv">
            <p className="afterlogintxt">
                Salam {name}.
                Wolves Birliyinə xoş gəldiniz</p>
                    </div>}



        </div>
    )
}

export default Login
