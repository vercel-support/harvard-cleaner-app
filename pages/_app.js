import '../styles/globals.css'
import { CartContext, useCartState } from '../hooks/use-cart.js';
import Navbar from '../components/Nav/Navbar'

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Navbar />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp
