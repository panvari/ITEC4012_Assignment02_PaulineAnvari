import PropTypes from "prop-types";
import "./styles.css";

export const Hyperlink = (props) => {
    return (
        <a className={props.type} href={props.link}>{props.text}</a>
    );
}

Hyperlink.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}