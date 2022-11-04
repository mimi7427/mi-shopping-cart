
import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(props) {
  return (
    <header className="block row center">
      <div className='flexrow'>
      <div>
        
          <Link to = "/"> <h1>Mimi's Car Shop</h1></Link>
        
      </div>
      <div className="one">
         <Link to="/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '} 
         {/* <a href="#/signin"> SignIn</a>  */}
        <Link to ="/Add">AddNew</Link>
      </div>
      </div>
    </header>
  );
}