
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
      <Routes>
         <Route path='/' element={<Shop />}/>
         <Route path='/login' element={<LoginSignup />}/>
         <Route path='/mens' element={<ShopCategory category="men" />}/>
         <Route path='/womens' element={<ShopCategory category="women"/>}/>
         <Route path='/kids' element={<ShopCategory category="kid"/>}/>
         <Route path='/product' element={<Product />}>
           <Route path=':productId' element={<Product />}/>
         </Route>
         <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
