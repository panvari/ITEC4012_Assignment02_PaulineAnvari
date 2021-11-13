import PropTypes from "prop-types";
import "./styles.css";

export const TextInput = (props) => {
    return (
        <div className="text-input">
            <label className="input-label">{props.label}</label>
            <input className="input-field" type={props.type}/>
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
}