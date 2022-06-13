import React from 'react';
import classes from './ProductData.module.css';
const ProductData=(props)=>{
    const colorselect=props.data.selectColor.map((item,pos)=>{
    const classArr=[classes.productimg]
    if(pos===props.currentImagePos){
        classArr.push(classes.selectedimg);
    }
return(
<img key={pos} className={classArr.join(' ')} src={item.imageurl} alt={item.stylename} onClick={()=>props.onColorClick(pos)}/>
);
})
const featureList=props.data.features.map((item,pos)=>{
  const classArr=[classes.features]
  if(pos=== props.currentFeaturePos){
    classArr.push(classes.selectedFeature);
  }
return(
<button key={pos} className={classArr.join(' ')} onClick={()=>props.onFeatureClick(pos)}>{item}</button>
);
})
    
    return(
        <div>
        <h1 className={classes.title}>{props.data.title}</h1>
        <p className={classes.para}>{props.data.description}</p>
        <h3 className={classes.heading}>Select Colour</h3>
        <div>
          {/* <img className={[classes.productimg, classes.selectedimg].join(' ')} src="https://i.imgur.com/PTgQlim.png" alt="Red Colour" />
          <img className={classes.productimg} src="https://i.imgur.com/iOeUBV7.png" alt="Black Colour" />
          <img className={classes.productimg} src="https://i.imgur.com/Mplj1YR.png" alt="Blue Colour" />
          <img className={classes.productimg} src="https://i.imgur.com/Zygu7I3.png" alt="Pink Colour" />
          <img className={classes.productimg} src="https://i.imgur.com/xSIK4M8.png" alt="Purple Colour" /> */}
          {/* //already included in line 10 */}
          {colorselect}
        </div>
        <h3 className={classes.heading}>Features</h3>
        <div>
          {featureList}
        </div>
        {/* <div>
          <button className={classes.features}>Heart Rate</button>
        </div> */}
        <div>
        <button className={classes.Submit}>Add to Cart</button>
        <button className={classes.Submit}>Add to Wishlist</button>
        </div>
        <button className={[classes.Submit, classes.Buynow].join(' ')}>Buy Now</button>
      </div>
    );
}
export default ProductData;