import PropTypes from "prop-types";
import "./styles.css";

export const TextInput = (props) => {
    return (
        //return input field with specified input type
        <div className="text-input">
            <label className="input-label">{props.label}</label> {/*set input label to label prop*/}
            <input className="input-field" type={props.type}/> {/*set input type to type prop*/}
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string, //input field label prop
    type: PropTypes.string.isRequired, //input type prop
}