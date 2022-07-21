
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

  // Function to remove from cart and store in local storage
  const removeFromCart = (product) => {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct.quantity === 1) {
      const filteredCart = cart.filter(p => p.id !== existingProduct.id);
      setCart(filteredCart);
    } else {
      existingProduct.quantity -= 1;
      const filteredCart = cart.filter(p => p.id !== existingProduct.id);
      setCart([...filteredCart, existingProduct]);
    }
  }
  // Function to remove from wishlist and store in local storage
  const removeFromWishlist = (product) => {
    const filteredWishlist = wishlist.filter(p => p.id !== product.id);
    setWishlist(filteredWishlist);
  }

  // Cart Counter
  const [cartCount, setCartCount] = useState(0);
  const addCartCount = () => {
    setCartCount (cartCount + 1);
  };
  const reduceCartCount = () => {
    setCartCount (cartCount - 1);
  };

  // Wishlist Counter
  const [wishlistCount, setWishlistCount] = useState(0);
  const addWishlistCount = (product) => {
    const existingProduct = wishlist.find(p => p.id === product.id);
    if (existingProduct) {
      return;
    } else {
      setWishlistCount (wishlistCount + 1);
    }
  };
  const reduceWishlistCount = () => {
    setWishlistCount (wishlistCount - 1)
  };


  return (
    <div className="App">
      <NavbarTab onCartCount={cartCount} onWishlistCount={wishlistCount} />
        <Routes>
          {/* Navbar Links */}
            {/* Home */}
            <Route path='/' element={<Home 
              onAddwishlistCount={addWishlistCount}
              onAddcartCount={addCartCount} 
              onAddToWishlist={addToWishlist} 
              onAddToCart={addToCart} 
            />} ></Route>
            {/* Categories */}
            <Route exact={true} path='/categories' element={<Cat
                onAddwishlistCount={addWishlistCount}
                onAddcartCount={addCartCount}
                onAddToWishlist={addToWishlist} 
                onAddToCart={addToCart} 
              />}
            />
            {/* Cameras */}
            <Route exact={true} path='/cameras' element={<Cam
                onAddwishlistCount={addWishlistCount}
                onAddcartCount={addCartCount}
                onAddToWihslist={addToWishlist} 
                onAddToCart={addToCart} 

              />} 
            />
            {/* Laptops */}
            <Route exact={true} path='/laptops' element={<Lap 
                onAddwishlistCount={addWishlistCount}
                onAddcartCount={addCartCount}
                onAddToWishlist={addToWishlist} 
                onAddToCart={addToCart} 

              />}
            />
            {/* SmartPhones */}
            <Route exact={true} path='/smartphones' element={<Smart 
                onAddToWishlist={addToWishlist} 
                onAddToCart={addToCart} 
                onAddwishlistCount={addWishlistCount}
                onAddcartCount={addCartCount}
              />} 
            />
            {/* Accessories */}
            <Route exact={true} path='/accessories' element={<Accessories 
                onAddToWishlist={addToWishlist} 
                onAddToCart={addToCart} 
                onAddwishlistCount={addWishlistCount}
                onAddcartCount={addCartCount}
              />}
            />
            {/* Login */}
            <Route exact={true} path='/login' element={<Login />} />
            {/* Register */}
            <Route exact={true} path='/register' element={<Register />} />
            {/* Wishlist */}
            <Route exact={true} path='/wishlist' element={<WishList 
                onRemoveFromWishlist={removeFromWishlist} 
                onAddToWishlist={addToWishlist} 
                onAddToCart={addToCart}
                onAddwishlistCount={addWishlistCount}
                onAddcartCount={addCartCount}
                onReduceWishlistCount={reduceWishlistCount}
                wishlists={wishlist} 

              />} 
            />
            {/* cart */}
            <Route exact={true} path='/cart' element={<Cart 
                  onRemoveFromCart={removeFromCart} 
                  onAddToWishlist={addToWishlist} 
                  onAddToCart={addToCart}
                  onAddwishlistCount={addWishlistCount}
                  onAddcartCount={addCartCount}
                  onReduceCartCount={reduceCartCount}
                  carts={cart} 
                />} 
              />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
