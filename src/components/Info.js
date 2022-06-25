import React from 'react';
import profilePic from '../images/profile-pic.png';

function Info() {
  return (
    <section className='info-section'>
      <img className='profile-pic' src={profilePic} alt='Yiorgos profile pic' />
      <h1>Yiorgos Fil</h1>
      <h2>Software Developer</h2>
      {/* <a></a> //TODO add a link to the deployed portfolio website */}
      <div className='button-row'>
        <button>
          <a href='mailto:georgefil@outlook.com'>Email</a>
        </button>
        <button>
          <a href='https://www.linkedin.com/in/george-filimegkas/'>LinkedIn</a>
        </button>
      </div>
    </section>
  );
}

export default Info;
