import PropTypes from "prop-types";
import "./styles.css";
import {Hyperlink} from "../hyperlink";

export const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-list">
                <li>
                    <Hyperlink type="secondary-link" text="Audio and Subtitles" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Media Center" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Privacy" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Contact Us" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Audio Description" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Investor Relations" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Legal Notices" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Help Center" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Jobs" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Cookie Preferences" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Gift Cards" link="/"></Hyperlink>
                </li>
                <li>
                    <Hyperlink type="secondary-link" text="Corporate Information" link="/"></Hyperlink>
                </li>
            </ul>
            <div className="service-code">
                <Hyperlink type="primary-link" text="Service Code" link="/"></Hyperlink>
            </div>
            <div className="copyright">
                <a className="copyright-text">© 1997-2021 Netflix, Inc.</a>
            </div>
        </div>
    );
}