import "./styles.css";
import {FeatureShow} from "../../feature-show";
import {ShowSection} from "../../show-section";

import logo from './logo.png';
import image from './image.jpeg';
import thumbnail from './thumbnails/image.jpeg';

export const HomePage = () => {
    return(
        <div className="browse-container">
            <FeatureShow logo={logo} text="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits." image={image}></FeatureShow>
            <ShowSection 
                title="My List" 
                isNetflixOriginal01="true" image01={thumbnail} title01="testing000" 
                isNetflixOriginal02="false" image02={thumbnail} title02="testing000" 
                isNetflixOriginal03="true" image03={thumbnail} title03="testing000"
                isNetflixOriginal04="true" image04={thumbnail} title04="testing000" 
                isNetflixOriginal05="false" image05={thumbnail} title05="testing000" 
                isNetflixOriginal06="true" image06={thumbnail} title06="testing000">
            </ShowSection>
            <ShowSection 
                title="My List" 
                isNetflixOriginal01="true" image01={thumbnail} title01="testing000" 
                isNetflixOriginal02="false" image02={thumbnail} title02="testing000" 
                isNetflixOriginal03="true" image03={thumbnail} title03="testing000"
                isNetflixOriginal04="true" image04={thumbnail} title04="testing000" 
                isNetflixOriginal05="false" image05={thumbnail} title05="testing000" 
                isNetflixOriginal06="true" image06={thumbnail} title06="testing000">
            </ShowSection>
        </div>
    );
}