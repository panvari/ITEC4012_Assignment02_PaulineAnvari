import PropTypes from "prop-types";
import "./styles.css";

export const Button = (props) => {
    return (
        <button className={props.type}>
            <img src={(props.icon)} className="icon"/>
            {props.text}
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.string.isRequired
}