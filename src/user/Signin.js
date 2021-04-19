import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import logogif from '../image/AWARE1.jpg';
const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signUpForm = () => (
        <div className="row signin p-4 m-4 rounded shadow-lg ">
        <div className="col-md-5 signin-form p-3 rounded-left shadow-lg offset-md-1 border-right">
        <div>
        <h1 className="text-center font-weight-bold p-2 m-3 h2 shadow-lg rounded">Signin</h1>
        </div>
        <form>
            <div className="form-group mt-3">
                <label className="text-muted font-weight-bold">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group mt-3">
                <label className="text-muted font-weight-bold">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary rounded font-weight-bold">
                Submit
            </button>
        </form>
        </div>
        <div className="col-md-5 signin-description p-3 rounded-right shadow-lg border-gray">
            <img src={logogif} alt="logo" className="img-fluid"/>
            {/* <p className="text-white font-weight-bold m-1" id="signin-description-text">Hii, Please signin to get your get your recommendation and checkout becuase every fork is unique</p> */}
            </div>
    </div>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout
            title="Welcome back Organictarian !!"
            description="Please Signin to Continue....."
            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </Layout>
    );
};

export default Signin;
