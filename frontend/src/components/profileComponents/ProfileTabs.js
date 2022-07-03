import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const ProfileTabs = () => {
  const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const userDatails = useSelector((state) => state.userDatails)
    const {loading, error,user} = userDatails;
    useEffect(() => {
      setName(user.name)
      setEmail(user.mail)
    },[dispatch,user])
  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert('Password do not match! Please enter your password')
    }
    else{
      console.log('Password do not match! Please enter your password')
    }
  }
  return (
    <>
      <form className="row  form-container" onSubmit={submitHandler}>
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">UserName</label>
            <input className="form-control" type="text" required value ={name} onChange={(e)=> setName(e.target.value)} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">E-mail Address</label>
            <input className="form-control" type="email" value ={email} onChange={(e)=> setEmail(e.target.value)}  />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass" >New Password</label>
            <input className="form-control" type="password" value ={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <input className="form-control" type="password" value ={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
};

export default ProfileTabs;
