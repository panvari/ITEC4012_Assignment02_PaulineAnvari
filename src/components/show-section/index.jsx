import PropTypes from "prop-types";
import "./styles.css";
import {Thumbnail} from "../thumbnail";

export const ShowSection = (props) => {
    return(
        //return section of six show/movie thumbnails with section title
        <div className="section-container">
            <h1 className="section-title">{(props.title)}</h1> {/*set section title to title prop*/}
            <div className="show-thumbnails">
                {/*set each of the six thumbnail to use its corresponding title, image, and netflix original prop*/}
                <Thumbnail className="thumbnail" image={(props.image01)} isNetflixOriginal={props.isNetflixOriginal01} title={props.title01}></Thumbnail>
                <Thumbnail className="thumbnail" image={(props.image02)} isNetflixOriginal={props.isNetflixOriginal02} title={props.title02}></Thumbnail>
                <Thumbnail className="thumbnail" image={(props.image03)} isNetflixOriginal={props.isNetflixOriginal03} title={props.title03}></Thumbnail>
                <Thumbnail className="thumbnail" image={(props.image04)} isNetflixOriginal={props.isNetflixOriginal04} title={props.title04}></Thumbnail>
                <Thumbnail className="thumbnail" image={(props.image05)} isNetflixOriginal={props.isNetflixOriginal05} title={props.title05}></Thumbnail>
                <Thumbnail className="thumbnail" image={(props.image06)} isNetflixOriginal={props.isNetflixOriginal06} title={props.title06}></Thumbnail>
            </div>
        </div>
    );
}

ShowSection.propTypes = {
    title: PropTypes.string.isRequired, //section title prop

    //define is netflix original, image, and title props for each of the six thumbnails in section
    isNetflixOriginal01: PropTypes.bool,
    image01: PropTypes.string.isRequired,
    title01: PropTypes.string.isRequired,

    isNetflixOriginal02: PropTypes.bool,
    image02: PropTypes.string.isRequired,
    title02: PropTypes.string.isRequired,

    isNetflixOriginal03: PropTypes.bool,
    image03: PropTypes.string.isRequired,
    title03: PropTypes.string.isRequired,

    isNetflixOriginal04: PropTypes.bool,
    image04: PropTypes.string.isRequired,
    title04: PropTypes.string.isRequired,

    isNetflixOriginal05: PropTypes.bool,
    image05: PropTypes.string.isRequired,
    title05: PropTypes.string.isRequired,
    
    isNetflixOriginal06: PropTypes.bool,
    image06: PropTypes.string.isRequired,
    title06: PropTypes.string.isRequired,
}