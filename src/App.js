
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
import { useState, useEffect } from 'react';


function App() {

  // Add to Card function to be used in all components
  // useEffect is used to store the cart in local storage
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      setCart(cart);
    }
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
      const filteredCart = cart.filter(p => p.id !== existingProduct.id);
      existingProduct.quantity += 1;
      setCart([...filteredCart, existingProduct]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  // function to add to wishlist and store in local storage
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (wishlist) {
      setWishlist(wishlist);
    }
  }, []);


  const addToWishlist = (product) => {
    const existingProduct = wishlist.find(p => p.id === product.id);
    if (existingProduct) {
      return;
    } else {
      setWishlist([...wishlist, product]);
    }
  }


  return (
    <div className="App">
      <NavbarTab />
        <Routes>
          {/* Navbar Links */}
            <Route path='/' element={<Home onAddToWishlist={addToWishlist} onAddToCart={addToCart} />} ></Route>
            <Route exact={true} path='/categories' element={<Cat onAddToWishlist={addToWishlist} onAddToCart={addToCart} />} />
            <Route exact={true} path='/cameras' element={<Cam onAddToWihslist={addToWishlist} onAddToCart={addToCart} />} />
            <Route exact={true} path='/laptops' element={<Lap onAddToWishlist={addToWishlist} onAddToCart={addToCart} />} />
            <Route exact={true} path='/smartphones' element={<Smart onAddToWishlist={addToWishlist} onAddToCart={addToCart} />} />
            <Route exact={true} path='/accessories' element={<Accessories onAddToWishlist={addToWishlist} onAddToCart={addToCart} />} />
            <Route exact={true} path='/login' element={<Login />} />
            <Route exact={true} path='/register' element={<Register />} />
            <Route exact={true} path='/wishlist' element={<WishList onAddToWishlist={addToWishlist} onAddToCart={addToCart} wishlists={wishlist} />} />
            <Route exact={true} path='/cart' element={<Cart onAddToWishlist={addToWishlist} onAddToCart={addToCart} carts={cart} />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
