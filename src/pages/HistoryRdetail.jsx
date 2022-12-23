import React, { useEffect } from 'react'
import '../Assert/css/Historydetail.css'
import AOS from 'aos';
function HistoryRdetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    AOS.init();
    return (
        <div style={{ marginTop: "130px" }}>

            <div className="newstitle" style={{ backgroundImage: "url(https://sawolvesprodnortheurope.blob.core.windows.net/cache/5/d/5/1/e/8/5d51e8555606e94aaaa22ea61eb5317737952c92.webp)" }}>
                <div className="overlay">
                    <h1>KLUB ŞƏRƏFLƏRİ & QEYDİYYATLARI</h1>
                </div>
            </div>

            <div className="historycontent">
                <div className="headtext">
                    <h2>KLUB ŞƏRƏFLƏRİ</h2>
                </div>
                <div className="iteam" data-aos="flip-up">
                    <p>Daxili liqalar
                        <br /><br />
                        Premyer Liqa/Birinci Divizion Çempionları |1953/54, 1957/58, 1958/59
                        <br /><br />
                        Qaçan |1937/38, 1938/39, 1949/50, 1954/55, 1959/60
                        Çempionat/İkinci Divizion Çempionları |1931/32, 1976/77, 2008/09, 2017/18
                        <br /><br />
                        Qaçan|1966/67, 1982/83
                        Qalibləri Play |2002/03
                        Birinci Liqa/Üçüncü Divizion Çempionları |1923/24 (North), 1988/89, 2013/14
                        <br /><br />
                        Liqa İki/Dördüncü Divizion Çempionları |1987/88
                        <br /><br />
                        ---
                        <br /><br />
                        Domestic cups
                        <br /><br />
                        FA Kubokunun qalibləri |1892/93, 1907/08, 1948/49, 1959/60
                        <br /><br />
                        Finalçılar |1888/89, 1895/96, 1920/21, 1938/39
                        Liqa Kubokunun Qalibləri |1973/74, 1979/80
                        <br /><br />
                        Futbol Liqasının kubok qalibləri |1987/88
                        <br /><br />
                        FA Charity Shield Qalibləri |1954/55, 1959/60
                        <br /><br />
                        Finalçılar |1958/59
                        ---
                        <br /><br />
                        Avropa turnirləri
                        <br /><br />
                        Texaco Kubokunun qalibi |1970/71
                        <br /><br />
                        UEFA Kubokunun finalçıları |1971/72</p>
                    <br /><br />
                </div>

                <div className="headtext">
                    <h2>KLUB REKORDLARI</h2>
                </div>
                <div className="iteam" data-aos="flip-up">
                    <p>
                        1957/58 - 1960/61 mövsümündə İngiltərə liqalarında ardıcıl 4 mövsüm ərzində 100 qol vuran ilk və yeganə klub.
                        <br /><br />
                        İngilis dörd peşəkar liqasının hamısını qazanan ilk klub.
                        <br /><br />
                        Bütün ölkə kubok yarışlarında (FA Kuboku, Liqa Kuboku və Futbol Liqası Kuboku) qalib gələn yeganə klub.
                        <br /><br />
                        Daxili İngilis tarixində 13 böyük kubok qazanan 9 -cu ən uğurlu klub.
                        <br /><br />
                        2005 -ci ildə Kurtlar Liqada 7000 qol vuran ilk komanda oldu.
                        <br /><br />
                        FA Kubokunu qazanan ən aşağı yer tutan Futbol Liqası komandası (ikinci divizionda doqquzuncu).
                    </p>
                </div>

                <div className="headtext">
                    <h2>OYUNCU REKORDLARI</h2>
                </div>
                <div className="iteam" data-aos="flip-up">
                    <p>Billy Wright | Dünya futbolunda 100 beynəlxalq oyunçu qazanan ilk oyunçu.
                        <br /><br />
                        Steve Bull | Ardıcıl mövsümlərdə yarım əsrlik qol vuran yeganə oyunçu (1987/88 və 1988/89)
                        <br /><br />
                        John Heath | Futbol Liqasında ilk qolu penaltidən vurdu (Accringtona qarşı, 1891)
                        <br /><br />
                        Tom Phillipson | Liqada ardıcıl 13 oyunda qol vuran yeganə oyunçu (1926/27)
                        <br /><br />
                        Jimmy Mullen | İngiltərənin istifadə etdiyi ilk əvəzləyici (Belçikaya qarşı, 1950)
                        <br /><br />
                        Dennis Wilshaw | İngiltərə-İskoçya millisində 4 qol vuran yeganə oyunçu (7-2, Uembli, 1955)</p>
                </div>
            </div>

            <div className="sentences">
                <div className="container">
                    <div className="text">
                        <p>"Biz canavar sürüsü kimiyik. Çox böyük bir ailəyik."</p>
                        <span>Raul Jimenez</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HistoryRdetail
