import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/chrisaaron_"><BsTwitter /></a>
        </div>
        <div>
            <a href="https://github.com/chrisaaronr"><FaGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/chrisaaronr/"><FaLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia