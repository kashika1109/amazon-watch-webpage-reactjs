import React from 'react';
import classes from './productimage.module.css';

const ProductPreview=(props)=>{

    const currenthr= new Date().getHours()>9 ?new Date().getHours():'0'+ new Date().getHours();
    const currentmin=new Date().getMinutes()>9 ?new Date().getMinutes():'0'+new Date().getMinutes();
    return (
    <div className={classes.Productimage}>
        <img src={props.currentImage} alt="Black watch"/>
        {
          props.currentFeaturePos==1?
          <div className={classes.heartbeat}>
          <i className="fas fa-heartbeat"></i>
          <p>78</p>
          </div>
          :
          <div className={classes.time}>
          <p>{`${currenthr}:${currentmin}`}</p>
          </div>

        }
          </div>
          );
}
export default ProductPreview;