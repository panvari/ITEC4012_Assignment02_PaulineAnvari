import "./styles.css";
import {SignIn, SignInForm} from '../../sign-in';

import logo from './logo.png';

export const SignInPage = () => {
    return(
        //return page with sign in form, background image, and netflix logo
        <div className="signin-container">
            {/*set background image for page*/}
            <img className="bg" alt="image of show thumbnails" src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/84dcb252-0261-4be0-aac7-dbdf29c81e8d/CA-en-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
            <img src={logo} alt="Logo" className="big-logo"/> {/*display netflix logo*/}
            <SignIn className="form"></SignIn> {/*display sign in form component*/}
        </div>
    );
}