import React, { useEffect, useRef, useState } from 'react'
import '../Assert/css/Register.css'
import Swal from 'sweetalert2'
import AOS from 'aos';
function Register() {
    useEffect(() => {
        window.scrollTo(0, 0)
        fetch("http://localhost:8000/userList")
            .then(res => res.json())
            .then(data => data.map(e => setLast(e.id)))
    }, [])
    AOS.init();
    const errortext = useRef();
    const errortext2 = useRef();
    const errortext3 = useRef();
    const errortext4 = useRef();
    const errortext5 = useRef();
    const errortext6 = useRef();

    const [inp, setInp] = useState()

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInp({
            ...inp,
            id: last + 1,
            [name]: value
        })

    }
    const [last, setLast] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        if ([...e.target.children[12].value].includes("@") &&
            [...e.target.children[2].value].length > 2 &&
            [...e.target.children[7].value].length > 2 &&
            [...e.target.children[22].value].length >= 8 &&
            e.target.children[17].value == e.target.children[12].value &&
            e.target.children[27].value == e.target.children[22].value &&
            (e.target.children[12].value.split("@")[1] == "mail.ru" ||
                e.target.children[12].value.split("@")[1] == "mail.com" ||
                e.target.children[12].value.split("@")[1] == "gmail.com")) {

            errortext.current.style.display = "none"
            errortext2.current.style.display = "none"
            errortext3.current.style.display = "none"
            errortext4.current.style.display = "none"
            errortext5.current.style.display = "none"
            errortext6.current.style.display = "none"
            fetch("http://localhost:8000/userList", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inp),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                Swal.fire('QEYDİYYAT OLUNDUZ!', '', 'success')
                e.target.children[2].value = "";
                e.target.children[7].value = "";
                e.target.children[12].value = "";
                e.target.children[17].value = "";
                e.target.children[22].value = "";
                e.target.children[27].value = "";

        }
        else if ([...e.target.children[2].value].length <= 2) {
            errortext2.current.style.display = "block"
        }
        else if ([...e.target.children[7].value].length <= 2) {
            errortext3.current.style.display = "block"
        }
        else if ([...e.target.children[22].value].length < 8) {
            errortext4.current.style.display = "block"
        }
        else if (e.target.children[17].value != e.target.children[12].value) {
            errortext5.current.style.display = "block"
        }
        else if (e.target.children[27].value != e.target.children[22].value) {
            errortext6.current.style.display = "block"
        }
        else {
            errortext.current.style.display = "block"
        }


    }
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="register">
                <div className="headtext">
                    <h2>QEYDİYYAT</h2>
                    <p>Facebook və ya Google hesabınızı istifadə edərək 1 kliklə və ya bu qısa formu dolduraraq öz Kurtlar Hesabınızı yaratmaq üçün məlumatlarınızı aşağıya daxil edin.</p>
                </div>
                <form action="" onSubmit={(e) => handleSubmit(e)} data-aos="zoom-out">
                    <label>Adı *</label><br />
                    <input type="text" placeholder="Ad" name="Ad" onChange={(e) => handleChange(e)} /><br />
                    <p className="errortext" ref={errortext2}>Ad çox kiçikdir. 2 simvoldan çox olmalıdır</p>
                    <label>Soyadı *</label><br />
                    <input type="text" placeholder="Soyad" name="Soyad" onChange={(e) => handleChange(e)} /><br />
                    <p className="errortext" ref={errortext3}>Soyad çox kiçikdir. 2 simvoldan çox olmalıdır</p>
                    <label>E -poçt *</label><br />
                    <input type="email" placeholder="E -poçt" name="Email" onChange={(e) => handleChange(e)} /><br />
                    <p className="errortext" ref={errortext}>Zəhmət olmasa etibarlı bir e -poçt daxil edin</p>
                    <label>E -poçtu təsdiq edin *</label><br />
                    <input type="email" placeholder="E -poçtu təsdiq edin" /><br />
                    <p className="errortext" ref={errortext5}>E -poçtlar eyni deyil</p>
                    <label>Şifrə *</label><br />
                    <input type="text" placeholder="Şifrə" name="password" onChange={(e) => handleChange(e)} /><br />
                    <p className="errortext" ref={errortext4}>Şifrələr ən azı 8 simvoldan ibarət olmalı</p>
                    <label>Şifrəni təsdiq edin *</label><br />
                    <input type="text" placeholder="Şifrəni təsdiq edin" /><br />
                    <p className="errortext" ref={errortext6}>Şifrəlar eyni deyil</p>
                    <div className="submitbtn">
                        <button>Davam et</button>
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

            </div>

        </div>
    )
}

export default Register
