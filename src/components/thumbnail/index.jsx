import PropTypes from "prop-types";
import "./styles.css";

import logo from './logo.png';

export const Thumbnail = (props) => {
    return (
        //returns thumbnail of show with possible netflix logo
        <div className="thumbnail-container">
            <img src={(props.image)} className="show-image" alt={(props.title) + "thumbnail"}/> {/*use image prop for thumbnail image and title prop for alt text*/}
            <img src={logo} className={props.isNetflixOriginal}/> {/*use is netflix original prop to determine if show should display netflix logo*/}
        </div>
    );
}

Thumbnail.propTypes = {
    isNetflixOriginal: PropTypes.bool, //optional is netflix original prop that determines if netflix logo appears on thumbnail
    image: PropTypes.string.isRequired, //show image prop
    title: PropTypes.string.isRequired //show title prop
}