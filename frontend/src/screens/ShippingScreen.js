import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {saveShippingAddress} from '../redux/actions/CartAction'
const ShippingScreen = ({history}) => {
    window.scrollTo(0, 0);

    const [address, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setcountry] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode,country}));
        history.push('/payment');
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <h6>DELIVERY ADDRESS</h6>
                    <input
                        type="text"
                        placeholder="Enter address"
                        required
                        value={address}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter city"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter postal code"
                        value={postalCode}
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter country"
                        value={country }
                        required
                        onChange={(e) => setcountry(e.target.value)}
                    />
                    <button type="submit">
                        <Link to="/payment" className="text-white">
                            Continue
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};

export default ShippingScreen;
