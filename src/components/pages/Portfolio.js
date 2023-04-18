import React from 'react';
import '../../styles/App.css';
import knowYourMusic from '../../assets/images/know-your-music.png'
import workoutInator from '../../assets/images/workout-inator.png'
import codingQuiz from '../../assets/images/coding-quiz.png'
import insulink from '../../assets/images/insulink.png'


const styles = {
  headerStyle: {
    paddingLeft: '10%',
    paddingTop: '10%',
    paddingBottom: '2%',
    color: '#5D2A42'
  },
  cardSize: {
    // width: '30rem',
    height: '30rem',
    border: '5px solid #BF4E30',
  },
  cardText: {
    backgroundColor: '#BF4E30',
    color: 'white',
  },
  cardPadding: {
    padding: '20px',
  },
  portfolioContainer: {
    padding: '5%',
    marginBottom: '10%',
  }
}

export default function Portfolio() {
  return (
    <div>
      <h1 style={styles.headerStyle}>Portfolio</h1>
        
        <div className='container text-center d-flex flex-wrap' style={styles.portfolioContainer}>
          <div className='row' id='portfolio-row'>
            
            <div className='col-sm-6' style={styles.cardPadding}>
              <section className='card' style={styles.cardSize}>
                <a href={'https://brachtco.github.io/know-your-music/'}>
                  <img src={knowYourMusic} 
                  className='card-img-top' 
                  alt='' 
                  style={{height: 360 + 'px'}}
                  ></img>
                </a>
                  <div className='card-body' style={styles.cardText}>
                    <h5 className='card-title'>Know Your Music</h5>
                    <p className='card-text'>A music information website using last.fm API</p>
                  </div>
              </section>
            </div>

            <div className='col-sm-6' style={styles.cardPadding}>
              <section className='card' style={styles.cardSize}>
                <a href={'https://workout-inator.herokuapp.com/'}>
                  <img src={workoutInator} 
                  className='card-img-top' 
                  alt='' 
                  style={{height: 360 + 'px'}}
                  ></img>
                </a>
                  <div className='card-body' style={styles.cardText}>
                    <h5 className='card-title'>Workout-inator</h5>
                    <p className='card-text'>A basic website with a macro-calculator that 
                    allows a user to sign up and login</p>
                  </div>
              </section>
            </div>
            
            <div className='col-sm-6' style={styles.cardPadding}>
              <section className='card' style={styles.cardSize}>
                <a href={'https://patrick-roof.github.io/coding-quiz-pr/'}>
                  <img src={codingQuiz} 
                  className='card-img-top' 
                  alt='' 
                  style={{height: 360 + 'px'}}
                  ></img>
                </a>
                  <div className='card-body' style={styles.cardText}>
                    <h5 className='card-title'>Coding Quiz</h5>
                    <p className='card-text'>A simple coding quiz using javascript, 
                    HTML, and CSS</p>
                  </div>
              </section>
            </div>

            <div className='col-sm-6' style={styles.cardPadding}>
              <section className='card' style={styles.cardSize}>
                <a href={"https://insulink-develop.up.railway.app/"}>
                  <img src={insulink} 
                  className='card-img-top' 
                  alt='' 
                  style={{height: 360 + 'px'}}
                  ></img>
                </a>
                  <div className='card-body' style={styles.cardText}>
                    <h5 className='card-title'>InsuLink</h5>
                    <p className='card-text'>
                      An app that allows users to connect with others that have Type 1 Diabetes</p>
                  </div>
              </section>
            </div>

          </div>
        </div>
    </div>
  );
}