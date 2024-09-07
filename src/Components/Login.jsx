import { useRef, useState } from 'react'
import {Header} from './index'
import { checkValidData } from '../utils/validate';


function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        // validate form data 
        let message;
        if(!isSignInForm){
            if (!name.current?.value || name.current?.value.trim() === "") {
                message = "Name is required for Sign Up";
            }
            else {
                message = checkValidData(name.current?.value, email.current.value, password.current.value);
            }
            
        }
        else{
            message = checkValidData(null,email.current.value, password.current.value);
        }
        
        setErrorMessage(message)
        
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg'
                    alt = "bg-image"
                />
            </div>

            <form 
                onSubmit={(e) => e.preventDefault()}
                className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
                <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (
                    <input 
                        ref = {name}
                        type='text' 
                        placeholder='Full Name' 
                        className='p-4 my-4 w-full bg-gray-700' 
                    />
                )}
                
                <input 
                    ref = {email}
                    type='text'
                    placeholder='Email Id' 
                    className='p-4 my-4 w-full bg-gray-700' 
                />
                <input 
                    ref={password}
                    type='password' 
                    placeholder='Password' 
                    className='p-4 my-4 w-full bg-gray-700' 
                />

                <p className='text-red-500 font-bold text-lg py-2'> {errorMessage} </p>

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >
                    {isSignInForm ? "New to CinemaFlix? Sign Up Now" : "Already registerd? Sign In Now"}
                    
                </p>

            </form> 

        </div>
    )
}

export default Login