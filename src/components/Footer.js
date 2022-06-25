import React from 'react';
import githubIcon from '../images/github-icon.png';
import twitterIcon from '../images/twitter-icon.png';

function Footer() {
  return (
    <footer>
      <button>
        <a href='https://github.com/yogiyiorgos'>
          <img src={githubIcon} alt='GitHub logo' />
        </a>
      </button>
      <button>
        <a href='https://twitter.com/YogiYiorgos'>
          <img src={twitterIcon} alt='Twitter logo' />
        </a>
      </button>
    </footer>
  );
}

export default Footer;
