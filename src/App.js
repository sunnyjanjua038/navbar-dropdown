import './App.css';
import {BrowserRouter,Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import News from './pages/News';
import Profit from './pages/Profit';
import ExtraProfit from './pages/ExtraProfit';

import Boxing from './pages/Boxing';
import Volleyball from './pages/Volleyball';
import Tennis from './pages/Tennis';
import Cricket from './pages/Cricket';
import Batting from './pages/Batting';
import Bowling from './pages/Bowling';
import Field from './pages/Field';
import Samsung from './pages/Samsung';
import Iphone from './pages/Iphone';
import Oppo from './pages/Oppo';
import Vivo from './pages/Vivo';
import Abuout from './pages/Abuout';
import ContectUs from './pages/ContectUs';
import Moreinfo from './pages/Moreinfo';
import NewsFeeds from './pages/NewsFeeds';
import Theme from './pages/Theme';
import Blog from './pages/Blog';
import AryNews from './pages/AryNews';
import JeoNews from './pages/JeoNews';
import BolNews from './pages/BolNews';
import ExpressNews from './pages/ExpressNews';
import RSSFeed from './pages/RSSFeed';
import Lahore from './pages/Lahore';
import Karachi from './pages/Karachi';
import Kamalia from './pages/Kamalia';
import License from './pages/License';
import Website from './pages/Website';
import Versions from './pages/Versions';
import Y19 from './pages/Y19';
import Y20 from './pages/Y20';
import Y29 from './pages/Y29';
function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Home/>
      <Routes>
        {/* <Route path="/" exact element={<Home/>}></Route> */}
        <Route path="/about" exact element={<Abuout/>}></Route>
        <Route path="/contatct" exact element={<ContectUs/>}></Route>


        <Route path="/moreinfo" exact element={<Moreinfo/>}>
        <Route path="lahore" exact element={<Lahore/>}></Route>
        <Route path="karachi" exact element={<Karachi/>}></Route>
        <Route path="kamalia" exact element={<Kamalia/>}></Route>
        </Route>
        <Route path="/theme" exact element={<Theme/>}></Route>
        <Route path="/blog" exact element={<Blog/>}></Route>
        <Route path="/newsfeeds" element={<NewsFeeds/>}>
        <Route path="arynews" element={<AryNews/>}></Route>
        <Route path="jeonews"  element={<JeoNews/>}></Route>
        <Route path="bolnews" element={<BolNews/>}></Route>
        <Route path="expressnews" element={<ExpressNews/>}></Route>
        <Route path="rssfeed"  element={<RSSFeed/>}></Route>
        </Route>
        <Route path="/products" element={<Products/>}>
        <Route path="samsung" element={<Samsung/>}></Route>
        <Route path="iphone" element={<Iphone/>}></Route>
        <Route path="oppo" element={<Oppo/>}></Route>
        <Route path="vivo" element={<Vivo/>}>
        <Route path="y19" element={<Y19/>}></Route>
        <Route path="y20" element={<Y20/>}></Route>
        <Route path="y29" element={<Y29/>}></Route>
        </Route>
        </Route>
        <Route  path="/services" element={<Services/>}>
        <Route path="marketing" element={<Marketing/>}></Route>
        <Route path="development" element={<Development/>}>
        <Route path='news' element={<News/>}></Route>
        <Route path='profit' element={<Profit/>}></Route>
        <Route path='extraprofit' element={<ExtraProfit/>}></Route>
        <Route path="theme" exact element={<Theme/>}></Route>
        <Route path="blog" exact element={<Blog/>}></Route>
        </Route>
        <Route path="design" element={<Design/>}></Route>
        <Route path="consulting" element={<Consulting/>}>
        <Route path="licence" element={<License/>}></Route>
        <Route path="website" element={<Website/>}></Route>
        <Route path="versions" element={<Versions/>}></Route>
        </Route>
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>

        <Route path="/sports" element={<Contactus/>}>
        <Route path='boxing' element={<Boxing/>}></Route>
        <Route path='volleyball' element={<Volleyball/>}></Route>
        <Route path='tennis' element={<Tennis/>}></Route>
        <Route path='cricket' element={<Cricket/>}>
        <Route path='batting' element={<Batting/>}></Route>
        <Route path='bowling' element={<Bowling/>}></Route>
        <Route path='field' element={<Field/>}></Route>
        </Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
  </>
  );
}

export default App;
