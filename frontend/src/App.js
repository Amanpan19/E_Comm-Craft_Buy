
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Assets/banner_mens.png';
import womens_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
      <Routes>
         <Route path='/' element={<Shop />}/>
         <Route path='/login' element={<LoginSignup />}/>
         <Route path='/mens' element={<ShopCategory category="men"  banner={mens_banner}/>}/>
         <Route path='/womens' element={<ShopCategory category="women" banner={womens_banner}/>}/>
         <Route path='/kids' element={<ShopCategory category="kid" banner={kids_banner}/>}/>
         <Route path='/product' element={<Product />}>
           <Route path=':productId' element={<Product />}/>
         </Route>
         <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
