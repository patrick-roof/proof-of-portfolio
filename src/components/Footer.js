import React from 'react';
import '../styles/App.css';

const styles = {
    generalFooterStyle: {
        background: '#305252',
    },
    outerFooterContainer: {
        background: '#305252',
        padding: '30px'
    },
    buttonColor: {
        background: '#E98A15'
    }
  }

export default function Footer() {
    return (
        <div className='container-fluid' style={styles.outerFooterContainer}>
        <footer className='py-6'>
            <div className="container-fluid p-4 pb-0" style={styles.generalFooterStyle}>
                <div className='row' style={styles.generalFooterStyle}>
                    <section className='mb-4 text-center'>
                        <a
                        className="btn text-white btn-floating m-1"
                        href={'https://www.instagram.com/superpatrick3000/'}
                        role="button"
                        style={styles.buttonColor}>
                        {/* <span className="bi bi-instagram"></span> */}
                        Instagram
                        </a>

                        <a
                        className="btn text-white btn-floating m-1"
                        href={'https://www.linkedin.com/in/patrick-ruf-319a4913a'}
                        role="button"
                        style={styles.buttonColor}>
                        {/* <i className="bi bi-linkedin"></i> */}
                        LinkedIn
                        </a>

                        <a
                        className="btn text-white btn-floating m-1"
                        href={'https://github.com/patrick-roof'}
                        role="button"
                        style={styles.buttonColor}>
                        {/* <i className="bi bi-github"></i> */}
                        GitHub
                        </a>
                    </section>
                </div>
            </div>
        </footer>
        </div>
    )
}