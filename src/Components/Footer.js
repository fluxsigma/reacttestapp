import React from 'react'

function Footer() {
  return (
    <div><footer className="footer section">
    <div className="footer__container container grid">
        <div className="footer__content">
            <h3 className="footer__title">Our Info & Location</h3>

            <ul className="footer__list">
                <li>Ind - Gurgaon</li>
                <li>hawai</li> 
                <li>989-562-456-0</li>
            </ul>
        </div>
        <div className="footer__content">
            <h3 className="footer__title">About Us</h3>

            <ul className="footer__links">
                <li>
                    <a href="#" className="footer__link">Support Center</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Customer Support</a>
                </li>
                <li>
                    <a href="#" className="footer__link">About Us</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Copy Right</a>
                </li>
            </ul>
        </div>

        <div className="footer__content">
            <h3 className="footer__title">Others</h3>

            <ul className="footer__links">
                <li>
                    <a href="#" className="footer__link">Aditya Sharma</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Mechanical </a>
                </li>
                <li>
                    <a href="#" className="footer__link">Electric</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Accesories</a>
                </li>
            </ul>
        </div>

        <div className="footer__content">
            <h3 className="footer__title">Social</h3>

            <ul className="footer__social">
                <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                    <i className='bx bxl-facebook'></i>
                </a>

                <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                    <i className='bx bxl-twitter'></i>
                </a>

                <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                    <i className='bx bxl-instagram'></i>
                </a>
            </ul>
        </div>
    </div>

    <span className="footer__copy">&#169; Aditya Sharma. All rights reserved, something@gmail.com</span>
</footer>
</div>
  )
}

export default Footer