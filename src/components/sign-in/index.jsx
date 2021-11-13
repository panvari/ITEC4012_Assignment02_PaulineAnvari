import PropTypes from "prop-types";
import "./styles.css";
import {TextInput} from "../text-input";
import {Button} from "../button";
import {Hyperlink} from "../hyperlink";

export const SignIn = (props) => {
    return (
        <div className="sign-in">
            <h1 className="form-title">Sign In</h1>
            <div className="email" >
                <TextInput label="Email or phone number" type="text"/>
            </div>
            <div className="password" >
                <TextInput label="Password" type="password"/>
            </div>
            <Button className="signin-button" type="primary-color" text="Sign In" isDisabled={false}></Button>
            <div className="check-box">
                <input type="checkbox" name="remember" value="remember"/>
                <label for="remember">Remember me</label>
                <div className="help">
                    <Hyperlink type="secondary-link" text="Need help?" link="/"></Hyperlink>
                </div>
            </div>
            <div className="facebook-div">
                <a className="facebook">Login with Facebook</a>
            </div>
            <div className="sign-up">
                <a className="question">New to Netflix?</a>
                <a className="sign-up-link">Sign up now</a>
            </div>
            <div className="form-details">
                <a className="message">This page is protected by Google reCAPTCHA to ensure you're not a bot.</a>
                <br/>
                <a className="learn-more">Learn more.</a>
            </div>
        </div>
    );
}