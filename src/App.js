import { Switch, Route } from 'react-router-dom'
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

      <Switch>

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



      </Switch>

      <Futter />

    </div>
  );
}

export default App;
