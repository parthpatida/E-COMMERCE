import {  useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'
import FormInput from "../form-input/form-input.component";

import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component"; 

const defaultFormFields = {
 
  email: "",
  password: "",
 
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;

  //const {setCurrentUser}=useContext(UserContext)
  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle=async()=>{
   await signInWithGooglePopup();
  
}

  const handlesubmit = async (event) => {
    event.preventDefault();
   

    try {
      const {user}=await signInAuthUserWithEmailAndPassword(email,password)
      

     // setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      switch (error.code){
        case 'auth-wrong-password':
          alert('incorrect password for email')
          break;
        
        case 'auth/user-not-found':
          alert('user does not exist for given mail')
          break;

        default :
        console.log(error)
      }  
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
        <h2>Don't have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handlesubmit}>
       

        <FormInput
          label="email"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={password}
        />

        <div className="buttons-container">

        <Button  type="submit">Sign In</Button>
        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign in</Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
