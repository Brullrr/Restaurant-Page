
import React from 'react';
import classes from './Input.module.css';


const input = (props) => {
    let inputElement
    const inputClasses = [classes.InputElement];
    
    
    if(props.Invalid && props.shouldValidate && props.Touched) {
        inputClasses.push(classes.Invalid)
    }

    let errorMessaage = null;
    
    if(props.Invalid && props.Touched) {
        errorMessaage = <p className={classes.ErrorMessage}>{props.ValidationErrorMessage}</p>
    }

    switch(props.elementType) {
        case('input'):
            inputElement = <input className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;
        case('textarea'): 
            inputElement = <textarea className={classes.InputElement} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
            break;
        default: 
            inputElement = <input className={inputClasses.join(' ')} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
    } 
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.Label}</label>
            {inputElement} 
            {errorMessaage}
        </div>
    )
}

export default input