import "./styles.css";
import {Button} from "../../button";

import play from './play-button.png';
import info from './information.png';

export const HomePage = () => {
    return(
        <body>
            <Button type="primary" icon={play} text="Play"></Button>
            <Button type="secondary" icon={info} text="More Info"></Button>
        </body>
    );
}