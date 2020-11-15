import React,{ Fragment}  from 'react';
import classes from './SmallAbout.module.css';
import { Link } from 'react-router-dom';


const smallAbout = () => {
    return (
        <Fragment>
            <div className={classes.SmallAbout}>
                
                <div className={classes.Overlay}>
                    <p className={classes.AboutUs}>About Us</p>
                    <p className={classes.Title}>The Best of East and West</p>
                    <p className={classes.Paragraph}> Here at the The Golden Castle we strive for original taste. Our dishes are based off of traditional Eastern cuisuine. 
                    From there we add western flavors which results in a suberb blend. </p>
                    <Link to='/about' ><button className={classes.Button}>FIND OUT MORE</button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default smallAbout