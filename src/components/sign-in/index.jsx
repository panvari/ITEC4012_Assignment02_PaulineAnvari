import PropTypes from "prop-types";
import "./styles.css";
import {TextInput} from "../text-input";
import {Button} from "../button";
import {Hyperlink} from "../hyperlink";

import {
    NavLink
} from 'react-router-dom';

export const SignIn = (props) => {
    return (
        //return sign in form component with title, input fields, button, checkbox, hyperlink, and additional text
        <div className="sign-in">
            <h1 className="form-title">Sign In</h1> {/*set title of form*/}
            <div className="email" >
                <TextInput label="Email or phone number" type="text"/> {/*define input field of type text*/}
            </div>
            <div className="password" >
                <TextInput label="Password" type="password"/> {/*define input field of type password*/}
            </div>
            <NavLink to="/">
                <Button className="signin-button" type="primary-color" text="Sign In" isDisabled={false} ></Button> {/*define coloured primary sign in button*/}
            </NavLink>
            <div className="check-box">
                <input type="checkbox" name="remember" value="remember"/> {/*define checkbox input*/}
                <label for="remember">Remember me</label> {/*label for checkbox*/}
                <div className="help">
                    <Hyperlink type="secondary-link" text="Need help?" link="/"></Hyperlink> {/*define hyperlink component for help*/}
                </div>
            </div>
            <div className="facebook-div">
                <a className="facebook">Login with Facebook</a> {/*additional text*/}
            </div>
            <div className="sign-up"> {/*sign up prompt text*/}
                <a className="question">New to Netflix?</a>
                <a className="sign-up-link">Sign up now</a>
            </div>
            <div className="form-details"> {/*text of form details*/}
                <a className="message">This page is protected by Google reCAPTCHA to ensure you're not a bot.</a>
                <br/>
                <a className="learn-more">Learn more.</a>
            </div>
        </div>
    );
}