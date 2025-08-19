import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import React from 'react';
import { auth } from '../../firebase/Firebase.imt';
const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        // Implement Google Sign-In logic here  
        console.log("Google Sign-In clicked");
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
    }
  return (
    <div>
      <h2>Please Login</h2>
      {/* Add your login form here */}
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
}

export default Login;