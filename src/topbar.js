import React from 'react';
import classes from './topbar.module.css';

const Topbar=(props)=>{
    return(
        <header className="App-header">
      <nav className={classes.navbar}>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo"/>
      </nav>
      </header>
    );
}
export default Topbar;