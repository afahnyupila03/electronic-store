
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cat from './components/Categories/Cat';
import Cam from './components/Cameras/Cam';
import Lap from './components/Laptops/Lap';
import Smart from './components/Smartphones/smart';
import NavbarTab from './Navbar';
import Footer from './Footer';
import Accessories from './components/Accessories/Accessories';
import WishList from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart';
import Login from './components/Account/Login';
import Register from './components/Account/Register';


function App() {
  return (
    <div className="App">
      <NavbarTab />
        <Routes>
          {/* Navbar Links */}
            <Route path='/' element={<Home />} ></Route>
            <Route exact={true} path='/categories' element={<Cat />} />
            <Route exact={true} path='/cameras' element={<Cam />} />
            <Route exact={true} path='/laptops' element={<Lap />} />
            <Route exact={true} path='/smartphones' element={<Smart />} />
            <Route exact={true} path='/accessories' element={<Accessories />} />
            <Route exact={true} path='/login' element={<Login />} />
            <Route exact={true} path='/register' element={<Register />} />
            <Route exact={true} path='/wishlist' element={<WishList />} />
            <Route exact={true} path='/cart' element={<Cart />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
