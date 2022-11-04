import Header from './component/Header';
import Main from './component/Main';
import Basket from './component/Basket';
import data from './component/Data';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Form from './component/Form';
import Footer from './component/Footer'


function App() {


  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);


    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);



    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (

    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
    

    <Routes>
       <Route path='/' element={ <Main products={products} onAdd={onAdd} /> }/>
       <Route path='/Add' element={ <Form/> }/>
       <Route path='/cart' element={ 
       
       <div className="flexrow">
      
      <Basket
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></Basket>
    </div> }/>

    </Routes>
    <Footer />
      
    </div>
  );
}

export default App;