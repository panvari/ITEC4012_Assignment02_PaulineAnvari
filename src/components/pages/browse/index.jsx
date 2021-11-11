import "./styles.css";
import {Button} from "../../button";
import {FeatureShow} from "../../feature-show";
import {Thumbnail} from "../../thumbnail";

import logo from './logo.png';
import image from './image.jpeg';
import thumbnail from './thumbnails/image.jpeg';

export const HomePage = () => {
    return(
        <div className="browse-container">
            <FeatureShow logo={logo} text="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits." image={image}></FeatureShow>
            <Thumbnail image={thumbnail} isNetflixOriginal="true"></Thumbnail>
        </div>
    );
}