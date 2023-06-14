import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Icons..css";


function Icons() {
    return (
        <div>
            <ul>
                <a href="https://altunit.nl" target="_blank"><li className="icon"><FaFacebookF/></li></a>
                <a href="https://altunit.nl" target="_blank"><li className="icon"><FaTwitter/></li></a>
                <a href="https://altunit.nl" target="_blank"><li className="icon"><FaLinkedinIn/></li></a>
                <a href="https://altunit.nl" target="_blank"><li className="icon"><FaGithub/></li></a>
            </ul>
        </div>
    );
}

export default Icons;
