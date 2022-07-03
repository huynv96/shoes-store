import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from './../LoadingError/Toast';
import Message from './../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import { toast } from 'react-toastify';
import { updateUserProfile } from '../../redux/actions/UserAction'
const ProfileTabs = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toastId = useRef(null);
    const ToastObjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: true,
        autoClose: 2000,
    };
    const dispatch = useDispatch();
    const userDatails = useSelector((state) => state.userDatails);

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {loading: updateLoading} = userUpdateProfile
    console.log(userDatails);
    const { loading, error, user } = userDatails;
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, user]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error('Pasword does not match', ToastObjects);
            }
        } else {
            dispatch(updateUserProfile({id:user._id,name,email,password}));
            toastId.current = toast.success('Profile updated', ToastObjects);
        }
    };
    return (
        <>
            <Toast />
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}
            {updateLoading && <Loading />}
            <form className="row  form-container" onSubmit={submitHandler}>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-fn">UserName</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form">
                        <label for="account-email">E-mail Address</label>
                        <input
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-pass">New Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-confirm-pass">Confirm Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </>
    );
};

export default ProfileTabs;
