import {useState,useEffect} from "react"
import useInput from "../components/hooks/use-input"
const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');
  
  let formIsValid = false
   
  if(enteredNameIsValid){
      formIsValid = true
    }

 

  const formSubmisssion = (event) =>{
     event.preventDefault();
     console.log(enteredName)
    
    if(!enteredNameIsValid){
       return;
    // const enteredValue = nameInputRef.current.value;
    
  }
 
  resetNameInput()
}

  const nameInputClasses = nameInputHasError ? "form-control": "form-control invalid"
  return (
    <form onSubmit={formSubmisssion}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameChangedHandler} 
        onBlur={nameBlurHandler}
        type='text'
         id='name' />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      <p style={{color:"red"}}>{nameInputHasError ? "please enter a value":""}</p>
    </form>
  );
};

export default SimpleInput;
