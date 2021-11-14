import PropTypes from "prop-types";
import "./styles.css";

export const Button = (props) => {
    return (
        //returns button with icon and text
        <button className={props.type} disabled={props.isDisabled}>
            <img src={(props.icon)} className="icon"/> {/*set show icon to icon prop*/}
            {props.text} {/*set description to use text prop*/}
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.string, //optional icon prop
    text: PropTypes.string.isRequired, //button text prop
    isDisabled: PropTypes.string.isRequired, //disabled prop
    type: PropTypes.string.isRequired //button type prop
}