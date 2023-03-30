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
    footerPosition: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // width: '100%',
    }
  }

export default function Footer() {
    return (
        <div className='container-fluid' style={styles.outerFooterContainer}>
        <footer className='py-6' style={styles.footerPosition}>
            <div className="container-fluid p-4 pb-0" style={styles.generalFooterStyle}>
                <div className='row' style={styles.generalFooterStyle}>
                    <section className='mb-4 text-center'>
                        <a
                        className="btn btn-outline-light btn-floating m-1"
                        href={'https://www.instagram.com/superpatrick3000/'}
                        // role="button"
                        ><span className="bi bi-instagram"></span>
                        </a>

                        <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                        ><i className="bi bi-linkedin"></i>
                        </a>

                        <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                        ><i className="bi bi-github"></i>
                        </a>
                    </section>
                </div>
            </div>
        </footer>
        </div>
    )
}