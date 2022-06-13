import logo from './logo.svg';
import classes from './App.module.css';
import { isClassExpression } from '@babel/types';
import ProductPreview from './productimage.js';
import ProductData from './ProductData.js';
import ProductDetails from './ProductDetails.js';
import React, {Component} from 'react';
import Topbar from './topbar.js';

class App extends Component {
  state={
    productdetails: ProductDetails,
    // currentImage: 'https://i.imgur.com/iOeUBV7.png',
    currentImagePos:0,
    currentFeaturePos:0,
  }

//we can pass position also directly rather that urls and simultaneously chnge which inpur we have selected
  onColorClick=(pos)=>{
    // const updatedimage=this.state.productdetails.selectColor[pos].imageurl
    // console.log(updatedimage)
    this.setState({currentImagePos: pos})
  }
  onFeatureClick=(pos)=>{
    console.log(pos)
    // let updatedState=false;
    // if(pos==1){
    //   updatedState=true;
    // }
    // this.setState({showHeartbeat:updatedState})
    this.setState({currentFeaturePos:pos})
  }
  shouldComponentUpdate(nextProps,nextState){
    // console.log("Next state: ",nextState)
    // console.log("Current state: ",this.state)
    if(nextState.currentImagePos===this.state.currentImagePos){
      console.log("render not called")
      return false
    }
    else {
      return true
    }
  }

  render(){
    console.log('Render called')
  return (
    <div className="App">
      <Topbar/> 
      <div className={classes.Maincontainer}>
        <div className={classes.Productimage}>
          <ProductPreview currentImage={this.state.productdetails.selectColor[this.state.currentImagePos].imageurl} currentFeaturePos={this.state.currentFeaturePos}
         />
          </div>
        <div className={classes.ProductData}>
          <ProductData data={this.state.productdetails} onColorClick={this.onColorClick} currentImagePos={this.state.currentImagePos}
          onFeatureClick={this.onFeatureClick} currentFeaturePos={this.state.currentFeaturePos}/>
        </div>
      </div>
      </div>
  );
  }
}

export default App;
