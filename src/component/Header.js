import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div className='flexrow'>
      <div>
        <a href="#/">
          <h1>Mimi's Car Shop</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
        <button onClick={props.Header}>AddNew</button>
      </div>
      </div>
    </header>
  );
}