import React, { Fragment } from "react";
import classes from './PhotoHolder.module.css';

const photoHolder = () => {
    return (
        <Fragment>
                <div className={classes.Wrapper} >
                    <div className={classes.ImageOne}>
                        <img className={classes.ImageOneImage} src ={process.env.PUBLIC_URL + '/Images/Lobby.jpg'} alt="lobby" ></img>
                    </div>
                    <div className={classes.ImageTwo}>
                        <img className={classes.ImageTwoImage} src ={process.env.PUBLIC_URL + '/Images/StorePhotoOne.jpg'} alt="store one"></img>
                    </div>
                    <div className={classes.ImageThree}>
                        <img className={classes.ImageThreeImage} src ={process.env.PUBLIC_URL + '/Images/TeaPlant.jpg'} alt="tea plaant"></img>
                    </div>
                    <div className={classes.ImageFour}>
                        <img className={classes.ImageFourImage} src ={process.env.PUBLIC_URL + '/Images/StorePhotoThree.jpg'} alt="store three"></img>
                    </div>
                    <div className={classes.ImageFive}>
                        <img className={classes.ImageFiveImage} src ={process.env.PUBLIC_URL + '/Images/StorePhotoTwo.jpg'} alt="store two"></img>
                    </div>
                    <div className={classes.ImageSix}>
                        <img className={classes.ImageSixImage} src ={process.env.PUBLIC_URL + '/Images/StorePhotoFour.jpg'} alt="store four" ></img>
                    </div>
                    <div className={classes.ImageSeven}>
                        <img className={classes.ImageSevenImage} src ={process.env.PUBLIC_URL + '/Images/Panda.jpg'} alt="panda"></img>
                    </div>
                </div>
            
        </Fragment>
        

    )
}

export default photoHolder