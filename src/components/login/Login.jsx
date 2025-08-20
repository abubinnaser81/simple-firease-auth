import React, { useState } from "react";

import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { auth } from '../../firebase/Firebase.imt';
const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        // Implement Google Sign-In logic here  
        console.log("Google Sign-In clicked");
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    // Sign-Out function
        const handleGithubSignIn = () => {
          signInWithPopup(auth,githubProvider)
          .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            setUser(loggedInUser);

            if(!loggedInUser.email && loggedInUser?.providerData?.length){
              console.log("User email not found");
            }
            

          })
          .catch(error => {
            console.error("GitHub Sign-In error", error);
          });
        }
    const handleSignOut = () => {
        // Implement Sign-Out logic here
        signOut(auth).then(() => {
            console.log("User signed out");
            setUser(null);
        }).catch(error => {
            console.error("Sign out error", error);
        });
    };
  return (
    <div>
      <h2>Please Login</h2>
      {/* Add your login form here */}
      {/* <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {
        user ?  <button onClick={handleSignOut}>Sign Out</button>
        : 
        
        <>
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        <button onClick={handleGithubSignIn}>Sign In with GitHub</button>
        </>
        
      }
      {
        user && 
          <div>
            <h3> user name :{user.displayName}</h3>
            <p> user email :{user.email}</p>
            <img src={user.photoURL} alt={user.displayName} />
          </div>
}
  
    </div>
  );
};

export default Login;