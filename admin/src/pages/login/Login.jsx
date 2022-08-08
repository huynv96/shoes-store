import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/LoadingError/Loading";
import Message from "../../components/LoadingError/Error";
import { login } from "../../redux/actions/UserAction";
import logo from "../../assets/images/common/logo.png";
import Button from "../../components/button/Button";
import Toast from "../../components/LoadingError/Toast";
import { Roller } from "react-awesome-spinners";

const Login = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Toast />
      <div className="login-page">
        <div className="modal login">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <span className="welcome_txt">Welcome to Admin!</span>
          {error && <Message variant="alert-danger">{error}</Message>}
          <div className="loading">{loading && <Roller color="#2ecc71"/>}</div>
          <form className="form" onSubmit={submitHandler}>
            <input
              className="txt_email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="txt_password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="remember">
              <label htmlFor="remember_me">
                <input className="ckc_input" type="checkbox" id="remember_me" />
                Keep me signed in
              </label>
            </div>
            <div className="btn_signin">
              <Button type="submit" shape="round-1" isOnsubmit={true}>
                Login
              </Button>
            </div>
            <div className="btn-create">
              <Link to="/register">Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
