
import React from 'react'
import {Link} from 'react-router-dom'

const Data = ({items})=> {
  const{id,thumbnail,title,price,description,category} = items;

return (
  <>
  <div className="boxx">
    <div className="cardBox">
      <div className="pic">
        <img src={thumbnail} alt="img"/>
      </div>
      <div className="card-details">
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>


        <Link to="/cart">
          Cart{' '}
          {items.countCartItems ? (
            <button className="badge">{items.countCartItems} </button>
          ) : (
            ''
          )}
        </Link>{' '} 
         {/* <a href="#/signin"> SignIn</a>  */}
        {/* <Link to ="/cart"></Link> */}

        {/* <button>Add to cart</button> */}



      </div>
    </div>
    </div>
  </>
)
}
 export default Data


















































// import pexels1 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels1.jpg'
// import pexels2 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels2.jpg'
// import pexels3 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels3.jpg'
// import pexels4 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels4.jpg'
// import pexels5 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels5.jpg'
// import pexels6 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels6.jpg'
// import pexels7 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels7.jpg'
// import pexels8 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels8.jpg'
// import pexels9 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels9.jpg'
// import pexels10 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels10.jpg'
// import pexels11 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels11.jpg'
// import pexels12 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels12.jpg'
// import pexels13 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels13.jpg'
// import pexels14 from '/home/me/Documents/my-e-commerce/e-commerce/src/component/images/pexels14.jpg'

// const data = {
//   products: [
//     {
//       id: '1',
//       name: 'rambogin',
//       price: 14000,
//       image: pexels1,
//     },
//     {
//       id: '2',
//       name: 'toyota',
//       price: 24000,
//       image: pexels2,
//     },
//     {
//       id: '3',
//       name: 'compressor',
//       price: 10000,
//       image: pexels3,
//     },
//     {
//       id: '4',
//       name: 'Benz',
//       price: 15000,
//       image: pexels4,
//     },
//     {
//       id: '5',
//       name: 'Range-rover',
//       price: 8000,
//       image: pexels5,
//     },
//     {
//       id: '6',
//       name: 'toyota-yaris',
//       price: 11000,
//       image: pexels6,
//     },
//     {
//       id: '7',
//       name: 'white-decapo',
//       price: 18000,
//       image: pexels7,
//     },
//     {
//       id: '8',
//       name: 'gray-yaris',
//       price: 5000,
//       image: pexels8,
//     },
//     {
//       id: '9',
//       name: 'blue-benz',
//       price: 12000,
//       image: pexels9,
//     },
//     {
//       id: '10',
//       name: 'red-scorpio',
//       price: 9000,
//       image: pexels10,
//     },
//     {
//       id: '11',
//       name: 'yellow-scorpio',
//       price: 10000,
//       image: pexels11,
//     },
//     {
//       id: '12',
//       name: 'orange-brabus',
//       price: 4000,
//       image: pexels12,
//     },
//     {
//       id: '13',
//       name: 'hamma',
//       price: 15000,
//       image: pexels13,
//     },
//     {
//       id: '14',
//       name: 'arvin',
//       price: 13000,
//       image: pexels14,
//     }
// ]
// }

// export default data;



// // const [products, setProducts] = useState({id:"",name:"",price:"",image:""});
//     // const [product, setProduct] = useState([ 