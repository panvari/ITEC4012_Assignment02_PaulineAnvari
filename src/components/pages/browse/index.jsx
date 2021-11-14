import "./styles.css";
import {Navbar} from '../../navbar';
import {FeatureShow} from "../../feature-show";
import {ShowSection} from "../../show-section";
import {Footer} from "../../footer";

import logo from './logo.png';
import image from './image.jpeg';
import thumbnail_01 from './thumbnails/thumbnail_01.png';
import thumbnail_02 from './thumbnails/thumbnail_02.png';
import thumbnail_03 from './thumbnails/thumbnail_03.png';
import thumbnail_04 from './thumbnails/thumbnail_04.png';
import thumbnail_05 from './thumbnails/thumbnail_05.png';
import thumbnail_06 from './thumbnails/thumbnail_06.png';
import thumbnail_07 from './thumbnails/thumbnail_07.png';
import thumbnail_08 from './thumbnails/thumbnail_08.png';
import thumbnail_09 from './thumbnails/thumbnail_09.png';
import thumbnail_10 from './thumbnails/thumbnail_10.png';
import thumbnail_11 from './thumbnails/thumbnail_11.png';
import thumbnail_12 from './thumbnails/thumbnail_12.png';
import thumbnail_13 from './thumbnails/thumbnail_13.png';
import thumbnail_14 from './thumbnails/thumbnail_14.png';
import thumbnail_15 from './thumbnails/thumbnail_15.png';
import thumbnail_16 from './thumbnails/thumbnail_16.png';
import thumbnail_17 from './thumbnails/thumbnail_17.png';
import thumbnail_18 from './thumbnails/thumbnail_18.png';

export const HomePage = () => {
    return(
        <div className="browse-container">
            <Navbar item1="Home" item2="TV Shows" item3="Movies" item4="New &amp; Popular" item5="My List"/>
            <FeatureShow logo={logo} text="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits." image={image}></FeatureShow>
            <ShowSection 
                title="My List" 
                isNetflixOriginal01="false" image01={thumbnail_01} title01="breaking bad" 
                isNetflixOriginal02="false" image02={thumbnail_14} title02="my neighbor totoro" 
                isNetflixOriginal03="false" image03={thumbnail_15} title03="joker"
                isNetflixOriginal04="true" image04={thumbnail_16} title04="you" 
                isNetflixOriginal05="false" image05={thumbnail_17} title05="shameless" 
                isNetflixOriginal06="false" image06={thumbnail_18} title06="avatar: the last air bender">
            </ShowSection>
            <ShowSection 
                title="Popular on Netflix" 
                isNetflixOriginal01="false" image01={thumbnail_04} title01="the office" 
                isNetflixOriginal02="false" image02={thumbnail_05} title02="brooklyn 99" 
                isNetflixOriginal03="false" image03={thumbnail_06} title03="new girl"
                isNetflixOriginal04="true" image04={thumbnail_07} title04="dynasty" 
                isNetflixOriginal05="true" image05={thumbnail_08} title05="peaky blinders" 
                isNetflixOriginal06="false" image06={thumbnail_09} title06="how i met your mother">
            </ShowSection>
            <ShowSection 
                title="Only on Netflix" 
                isNetflixOriginal01="true" image01={thumbnail_02} title01="money heist" 
                isNetflixOriginal02="true" image02={thumbnail_03} title02="orange is the new black" 
                isNetflixOriginal03="true" image03={thumbnail_10} title03="the queen's gambit"
                isNetflixOriginal04="true" image04={thumbnail_11} title04="outer banks" 
                isNetflixOriginal05="true" image05={thumbnail_12} title05="narcos" 
                isNetflixOriginal06="true" image06={thumbnail_13} title06="good girls">
            </ShowSection>
            <Footer className="footer"></Footer>
        </div>
    );
}