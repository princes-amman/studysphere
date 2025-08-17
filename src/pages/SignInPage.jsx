import React from "react";
import "../styles/signIn.css";

function SignInPage() {
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Signed in successfully!");
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Welcome Back 👋</h1>
        <p className="signin-subtitle">Sign in to continue your journey on <b>StudySphere</b></p>

        <form onSubmit={handleSignIn} className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <p className="signin-footer">
          Don’t have an account? <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
