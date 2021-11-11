import PropTypes from "prop-types";
import "./styles.css";
import {Button} from "../button";

import play from './play-button.png';
import info from './information.png';

export const FeatureShow = (props) => {
    return (
        <div class="show-container">
            <img src={(props.image)} className="image"/>
            <div className="content">
                <img src={(props.logo)} className="show-logo"/>
                <div className="text">{(props.text)}</div>
                <ul className="buttons">
                    <li>
                        <Button className="button" type="primary" icon={play} text="Play"></Button>
                    </li>
                    <li>
                        <Button className="button" type="secondary" icon={info} text="More Info"></Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

FeatureShow.propTypes = {
    logo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}