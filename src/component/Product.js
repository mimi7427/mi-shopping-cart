import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;


  return (
    <div className='container'>
    <div className='row'>
      <img className="big" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
      </div>
    </div>
  );
}


// const [products, setProducts] = useState({name:"",price:"",image:""});
//     const [product, setProduct] = useState([ 


// const changeProducts = (e)=>{
//   setProducts({...products,[e.target.name]:e.target.value})
// }
//  const addProducts=()=>{
//    setProduct([...product,products])
//    setProducts({name:"",price:"",image:""})
//  }




// 