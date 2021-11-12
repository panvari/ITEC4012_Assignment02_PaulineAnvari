import PropTypes from "prop-types";
import "./styles.css";

import logo from './logo.png';
import thumbnail from './thumbnails/image.jpeg';

export const Thumbnail = (props) => {
    return (
        <div className="thumbnail-container">
            <img src={(props.image)} className="show-image" alt={(props.title) + "thumbnail"}/>
            <img src={logo} className={props.isNetflixOriginal}/>
        </div>
    );
}

Thumbnail.propTypes = {
    isNetflixOriginal: PropTypes.bool,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}