import { Routes, Route } from 'react-router-dom'
import Futter from './components/Futter';
import Header from './components/Header';
import AboutDdetail from './pages/AboutDdetail';
import AboutFdetail from './pages/AboutFdetail';
import AboutMdetail from './pages/AboutMdetail';
import AboutUs from './pages/AboutUs';
import AcademyNews from './pages/AcademyNews';
import AcademyNewsdetailpage from './pages/AcademyNewsdetailpage';
import AllNews from './pages/AllNews';
import AwayShop from './pages/AwayShop';
import AwayShopdetail from './pages/AwayShopdetail';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Detailpage from './pages/Detailpage';
import History from './pages/History';
import HistoryHdetail from './pages/HistoryHdetail';
import HistoryMdetail from './pages/HistoryMdetail';
import HistoryMuseumdetail from './pages/HistoryMuseumdetail';
import HistoryRdetail from './pages/HistoryRdetail';
import HistoryZdetail from './pages/HistoryZdetail';
import Home from './pages/Home';
import HomeShop from './pages/HomeShop';
import HomeShopdetail from './pages/HomeShopdetail';
import LatestNews from './pages/LatestNews';
import Matchs from './pages/Matchs';
import Newsdetailpage from './pages/Newsdetailpage';
import Playerspage from './pages/Playerspage';
import Register from './pages/Register';
import Shopdetail from './pages/Shopdetail';
import ShopSelection from './pages/ShopSelection';
import TeamNews from './pages/TeamNews'
import TeamNewsdetailpage from './pages/TeamNewsdetailpage';
import ThirdShop from './pages/ThirdShop';
import Login from './pages/Login'
import Membership from './pages/Membership';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/detail/:id' element={<Detailpage />}/>
        <Route exact path='/newsdetail/:id' element={<Newsdetailpage />}/>
        <Route exact path='/news' element={<AllNews />}/>
        <Route exact path='/latestnews' element={<LatestNews />}/>
        <Route exact path='/teamnews' element={<TeamNews />}/>
        <Route exact path='/teamnewsdetail/:id' element={<TeamNewsdetailpage />}/>
        <Route exact path='/academynews' element={<AcademyNews />}/>
        <Route exact path='/academynewsdetail/:id' element={<AcademyNewsdetailpage />}/>
        <Route exact path='/shopdetail/:id' element={<Shopdetail />}/>
        <Route exact path='/homeshopdetail/:id' element={<HomeShopdetail />}/>
        <Route exact path='/awayshopdetail/:id' element={<AwayShopdetail />}/>
        <Route exact path='/shopselection' element={<ShopSelection />}/>
        <Route exact path='/homeshop' element={<HomeShop />}/>
        <Route exact path='/awayshop' element={<AwayShop />}/>
        <Route exact path='/thirdshop' element={<ThirdShop />}/>
        <Route exact path='/cart' element={<Cart />}/>
        <Route exact path='/players' element={<Playerspage />}/>
        <Route exact path='/matchs' element={<Matchs />}/>
        <Route exact path='/aboutus' element={<AboutUs />}/>
        <Route exact path='/aboutmdetail' element={<AboutMdetail />}/>
        <Route exact path='/aboutddetail' element={<AboutDdetail />}/>
        <Route exact path='/aboutfdetail' element={<AboutFdetail />}/>
        <Route exact path='/history' element={<History />}/>
        <Route exact path='/historyhdetail' element={<HistoryHdetail />}/>
        <Route exact path='/historyrdetail' element={<HistoryRdetail />}/>
        <Route exact path='/historymuseumdetail' element={<HistoryMuseumdetail />}/>
        <Route exact path='/historyzdetail' element={<HistoryZdetail />}/>
        <Route exact path='/historymdetail' element={<HistoryMdetail />}/>
        <Route exact path='/contactus' element={<ContactUs />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/membership' element={<Membership />}/>     


      </Routes>

      {/* <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/detail/:id">
          <Detailpage />
        </Route>

        <Route path="/newsdetail/:id">
          <Newsdetailpage />
        </Route>

        <Route path="/news">
          <AllNews />
        </Route>

        <Route path="/latestnews">
          <LatestNews />
        </Route>

        <Route path="/teamnews">
          <TeamNews />
        </Route>

        <Route path="/teamnewsdetail/:id">
          <TeamNewsdetailpage />
        </Route>

        <Route path="/academynews">
          <AcademyNews />
        </Route>
        
        <Route path="/academynewsdetail/:id">
          <AcademyNewsdetailpage />
        </Route>

        <Route path="/shopdetail/:id">
          <Shopdetail />
        </Route>

        <Route path="/homeshopdetail/:id">
          <HomeShopdetail />
        </Route>

        <Route path="/awayshopdetail/:id">
          <AwayShopdetail />
        </Route>

        <Route path="/shopselection">
          <ShopSelection />
        </Route>

        <Route path="/homeshop">
          <HomeShop />
        </Route>

        <Route path="/awayshop">
          <AwayShop />
        </Route>

        <Route path="/thirdshop">
          <ThirdShop />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/players">
          <Playerspage />
        </Route>

        <Route path="/matchs">
          <Matchs />
        </Route>

        <Route path="/aboutus">
          <AboutUs />
        </Route>

        <Route path="/aboutmdetail">
          <AboutMdetail />
        </Route>

        <Route path="/aboutddetail">
          <AboutDdetail />
        </Route>

        <Route path="/aboutfdetail">
          <AboutFdetail />
        </Route>

        <Route path="/history">
          <History />
        </Route>

        <Route path="/historyhdetail">
          <HistoryHdetail />
        </Route>

        <Route path="/historyrdetail">
          <HistoryRdetail />
        </Route>

        <Route path="/historymuseumdetail">
          <HistoryMuseumdetail />
        </Route>

        <Route path="/historyzdetail">
          <HistoryZdetail />
        </Route>

        <Route path="/historymdetail">
          <HistoryMdetail />
        </Route>

        <Route path="/contactus">
          <ContactUs />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/membership">
          <Membership />
        </Route>



      </Switch> */}

      <Futter />

    </div>
  );
}

export default App;
