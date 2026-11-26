import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
function App() {
  const [email,setEmail] = useState("");
  //Email is set here instead of in Login as App is mounted all the time which will help the data stored in email not lost
  const [page,setPage] = useState("home");
  const [cart,setCart] = useState([]);

  const decreaseQuantity = (id) =>{
    const item = cart.find((i)=>i.id === id);
    if(item.quantity === 1){
      setCart(cart.filter((product)=>product.id!==id))
    }else{ 
      setCart(cart.map((product)=>
        product.id=== id
          ? {...product,quantity:product.quantity-1}
          : product
      )
    )}
  }

  const deleteProduct = (id) => {
    setCart(cart.filter((product)=>product.id!==id))
  }

  const addToCart = (product) => {
    const alreadyInCart = cart.some((item)=>item.id === product.id);
    if (alreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      
        setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return(
    <>
      <Navbar onLogin={()=> setPage("login")} onHome={()=> setPage("home")} onSignup={()=> setPage("signup")} cart={cart}/>
      {page==="login" && <Login email={email} setEmail={setEmail}/>}
      {page==="home" && <Home onAddToCart={addToCart} cart={cart} onDecrease={decreaseQuantity} onDelete={deleteProduct}/>}
      {page==="signup" && <Signup/>}
      <Footer onLogin={()=>setPage("login")} onHome={()=>setPage("home")} onSignup={()=>setPage("signup")}/>
    </>
  )
}

export default App
