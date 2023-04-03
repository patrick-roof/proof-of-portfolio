import React from 'react';
import headshot from "../../assets/images/headshot 2.jpg"
import '../../styles/App.css';

const styles = {
    aboutPageStyle: {
        padding: '10%',
    },
    profilePic: {
        display: 'block',
        borderRadius: '50%',
        boxShadow: '1px 1px 10px #BF4E30, 1px 1px 10px #5D2A42',
        width: '210px',
        height: '220px',
        marginLeft: 'auto',
        marginRight: 'auto',
        //^important for centering - display block && margins
    },
    pageTitle: {
      padding: '10%',
      color: '#5D2A42',
    },
}

export default function About() {
  return (
    <div>
      <h1 style={styles.pageTitle}>About Patrick Ruf</h1>
      <img style={styles.profilePic} src= {headshot} alt=''></img>
      <div style={styles.aboutPageStyle}>
        <p className='p-4 text-white' style={{background: '#BF4E30',borderRadius: '10px'}}>
              My name is Patrick Ruf. I am 23 years old, living in Lehi, Utah.
              I enjoy playing the guitar, synth, and bass, and I like to make my own music.
              I also enjoy a variety of videogames, and I love to learn new things.
              I am currently a bootcamp student at the University of Utah, 
              learning to code in order to widen my horizons and obtain a job where I can
              be creative and constantly developing new skills. This is my portfolio, where past and current projects will be displayed.
        </p>
      </div>
    </div>
  );
}
