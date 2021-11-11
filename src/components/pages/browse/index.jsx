import "./styles.css";
import {Button} from "../../button";
import {FeatureShow} from "../../feature-show";

import image from './image.jpeg';
import logo from './logo.png';

export const HomePage = () => {
    return(
        <body>
            <FeatureShow logo={logo} text="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits." image={image}></FeatureShow>
        </body>
    );
}