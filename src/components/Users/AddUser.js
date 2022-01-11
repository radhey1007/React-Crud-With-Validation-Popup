import React , { useState , useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUserName, setEnteredUserName] =  useState('');
    const [enteredAge, setEnteredAge] =  useState('');
    const [error, setError] =  useState(null);

    const submitHandler = (event) => {
     event.preventDefault();  
     console.log(nameInputRef.current.value);   // we can get the value using useRef Hooks, It didn't update the entire component or reload the component. 

     if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title:'Invalid Input',
            message:'please enter the name and age.'
        });
        return;
    }
    if(+enteredAge < 1){
        setError({
            title:'Invalid Age',
            message:'Age must be greater than 0 ( >1)'
        });
        return;
    }
    props.onAddUser(enteredUserName , enteredAge);
    reset();
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    
    const reset = () => {
        setEnteredUserName('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
        { error && <ErrorModal title={error.title} message ={error.message} onConfirm={errorHandler}/> }
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
           <label htmlFor='username'>Username</label>
           <input type="text" id="username" ref={nameInputRef} value={enteredUserName} onChange={userNameChangeHandler}/>     
           <label htmlFor='age'>Age</label>
           <input type="number" id="age" ref={ageInputRef} value={enteredAge} onChange={ageChangeHandler}/>
           <Button type="submit" onClick={errorHandler}>Add User</Button> 
        </form>
        </Card>
        </Wrapper>
    )
}


export default AddUser;