import React, { useState } from 'react';
import "./signup.css"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailTouched(true);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordTouched(true);

    // Password validation
    setPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordTouched(true);

    // Confirm password validation
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
      // Clear form after successful submission
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Reset validation flags and touched flags
      setEmailValid(true);
      setPasswordValid(true);
      setConfirmPasswordValid(true);
      setEmailTouched(false);
      setPasswordTouched(false);
      setConfirmPasswordTouched(false);
    } else {
      alert('Can\'t submit the form. Please check the input values.');
    }
  };

  return (
    <div className='form'>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={() => setEmailTouched(true)} // Mark the field as touched when it loses focus
        style={{ border: emailTouched && !emailValid ? '1px solid red' : '1px solid green' }}
      />
      {emailTouched && !emailValid && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={() => setPasswordTouched(true)}
        style={{ border: passwordTouched && !passwordValid ? '1px solid red' : '1px solid green' }}
      />
      {passwordTouched && !passwordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters long.</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        onBlur={() => setConfirmPasswordTouched(true)}
        style={{ border: confirmPasswordTouched && !confirmPasswordValid ? '1px solid red' : '1px solid green' }}
      />
      {confirmPasswordTouched && !confirmPasswordValid && (
        <p style={{ color: 'red' }}>Passwords do not match.</p>
      )}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUp;
