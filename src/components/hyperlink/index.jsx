import PropTypes from "prop-types";
import "./styles.css";

export const Hyperlink = (props) => {
    return (
        //return hyperlink with type and link
        <a className={props.type} href={props.link}>{props.text}</a>
    );
}

Hyperlink.propTypes = {
    text: PropTypes.string.isRequired, //link text prop
    link: PropTypes.string.isRequired, //link prop
    type: PropTypes.string.isRequired //link type prop
}