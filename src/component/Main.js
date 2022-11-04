
import React, { useState } from 'react';
import axios from 'axios';
import Data from './Data'

const Main = ()=> {
  const[item,setItem]= useState([]);
  const fetchProducts = async () =>{
    const response= await axios.get("https://dummyjson.com/products?limit=3");
    setItem(response.data.products);
    console.log(response);
  }
  if(item.length<1){
    fetchProducts();
  }
  return (
    <>
     <div>
       {
         item.map((items,index) =>(
           <Data key={index} items={items} />
         ))
       }
     </div>
    </>
  )
}

export default Main











//import React from 'react';
// import Product from './Product';
// // import Form from '../component/Form';



// export default function Main(props) {
//   const { products, onAdd } = props;

//   return (
//     <>
//         {/* <Form /> */}
//         <main className="block col-2">
      
//         <div className="flexrow">
//            {products?.map((product) => (
//            <Product key={product.id} product={product} onAdd={onAdd}></Product>
//             ))}
//         </div> 
//     </main>
//     </>
//   );
// }