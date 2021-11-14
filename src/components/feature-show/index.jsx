import PropTypes from "prop-types";
import "./styles.css";
import {Button} from "../button";

import play from './play-button.png';
import info from './information.png';

export const FeatureShow = (props) => {
    return (
        //return image of show with logo, description, and buttons
        <div class="show-container">
            <img src={(props.image)} className="image"/> {/*set background image to image prop*/}
            <div className="content">
                <img src={(props.logo)} className="show-logo"/> {/*set show logo to logo prop*/}
                <div className="text">{(props.text)}</div> {/*set description to text prop*/}
                <ul className="buttons">
                    <li>
                        <Button className="button" type="primary" icon={play} text="Play" isDisabled={false}></Button> {/*define play button as primary button*/}
                    </li>
                    <li>
                        <Button className="button" type="secondary" icon={info} text="More Info" isDisabled={false}></Button> {/*define more info button as secondary button*/}
                    </li>
                </ul>
            </div>
        </div>
    );
}

FeatureShow.propTypes = {
    logo: PropTypes.string.isRequired, //show logo prop
    text: PropTypes.string.isRequired, //show description prop
    image: PropTypes.string.isRequired //show image prop
}