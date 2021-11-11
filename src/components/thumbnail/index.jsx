import PropTypes from "prop-types";
import "./styles.css";

import logo from './logo.png';

export const Thumbnail = (props) => {
    return (
        <div className="thumbnail-container">
            <img src={(props.image)} className="show-image"/>
            <img src={logo} className={props.isNetflixOriginal}/>
        </div>
    );
}

Thumbnail.propTypes = {
    isNetflixOriginal: PropTypes.bool,
    image: PropTypes.string.isRequired
}