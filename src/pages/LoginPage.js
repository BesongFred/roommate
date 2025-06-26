//AuthForm.jsx 
import React, { useState } from 'react'; 
import { FcGoogle } from 'react-icons/fc';
import { getAuth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, GoogleAuthProvider,
   signInWithPopup } from 'firebase/auth'; 
import './LoginPage.css'; // for styling
import firebaseApp from '../components/firebase/firebase'
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const auth = getAuth(firebaseApp);

const AuthForm = () => { 
//const [isSignUp, setIsSignUp] = useState(false); 
 const [isRightPanelActive, setIsRightPanelActive] = useState(false);
 //const [id, setId] =useState('')
const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate(); 

 const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert(`Welcome ${user.displayName}! 🎉`);
    navigate('/complete-profile');
  } catch (error) {
    alert(error.message);
  }
};


const handleSubmit = async (e, isSignUpMode) => {
    e.preventDefault();
    try {
      if (isSignUpMode) {
       const userCreate = await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created! 🎉');
        // Get secure ID token
       const idToken = await userCreate.user.getIdToken();
        // Send user data to Go backend
       const response = await fetch("http://localhost:8081/users/register", {
         method:"POST",
        headers: {
           Authorization: `Bearer ${idToken}`,
           
           "Content-Type": "application/json",
          },
           body: JSON.stringify({
            idToken,
            email,// must match backend expectations
             }),
           });
              const result = await response.json();
               console.log("Server response:", result);
              //return result;
              navigate('/complete-profile');
      } 
      else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Welcome back! 👋');
        navigate('/');
      }
    }
      catch (err) {
      alert(err.message);
    }
  };

return (
  <div className='bigbox'>
       {/* <h2>Sign in/up Form</h2> */}
       <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
         {/* Sign Up */}
         <div className="form-container sign-up-container">
           <form onSubmit={(e) => handleSubmit(e, true)}>
             <h1>Create Account</h1>
             <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
             <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
             <button type="submit">Sign Up</button>
           </form>
         </div>

         {/* Sign In */}
         <div className="form-container sign-in-container">
           <form onSubmit={(e) => handleSubmit(e, false)}>
             <h1>Sign in</h1>
             <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
             <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
             <div className="social-signin">
             <p className="or-text">or sign in with Google</p>
             <button type="button" onClick={handleGoogleSignIn} className="google-icon-btn"><FcGoogle size={20} /></button>
             </div>
             
             <Link to="/forgot-password" className="forgot-link">Forgot your password?</Link>
             <button type="submit">Log In</button>
           </form>
         </div>

         {/* Overlay */}
         <div className="overlay-container">
           <div className="overlay">
             <div className="overlay-panel overlay-left">
               <h1>Welcome Back!</h1>
               <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
             </div>
             <div className="overlay-panel overlay-right">
               <h1>Hello, Friend!</h1>
               <p>Enter your personal details and start your journey with us</p>
               <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
             </div>
           </div>
         </div>
       </div>
     </div>
); 
};

export default AuthForm;


// import React, { useState } from 'react';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import firebaseApp from '../components/firebase/firebase';
// import './LoginPage.css';
// import { useNavigate } from 'react-router-dom';

// const auth = getAuth(firebaseApp);

// const SignInSignUp = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e, isSignUpMode) => {
//     e.preventDefault();
//     try {
//       if (isSignUpMode) {
//         await createUserWithEmailAndPassword(auth, email, password);
//         alert('Account created! 🎉');
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         alert('Welcome back! 👋');
//       }
//       navigate('/complete-profile');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign in/up Form</h2>
//       <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//         {/* Sign Up */}
//         <div className="form-container sign-up-container">
//           <form onSubmit={(e) => handleSubmit(e, true)}>
//             <h1>Create Account</h1>
//             <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Sign Up</button>
//           </form>
//         </div>

//         {/* Sign In */}
//         <div className="form-container sign-in-container">
//           <form onSubmit={(e) => handleSubmit(e, false)}>
//             <h1>Sign in</h1>
//             <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Log In</button>
//           </form>
//         </div>

//         {/* Overlay */}
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>To keep connected with us please login with your personal info</p>
//               <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start your journey with us</p>
//               <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInSignUp;

