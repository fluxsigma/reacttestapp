import React from 'react'
// import Rose from "../img/rose.jpg"
import home from "../img/home3.png"
// import Samsung from "../img/samsung.png"
// import Sony from "../img/sony.png"
// import Boat from "../img/boat.png"

function Home() {
return (
<div className='home'>
    <br />
    <section className="home" id="home">
            <div className="home__container container grid">
                <div className="home__img-bg">
                <img  className='home__img' src={home} alt='rose' height={450} width={500}></img>
                </div>

                <div className="home__social">
                    
                    <a href="https://www.facebook.com/" target="_blank" className="home__social-link bx bxl-facebook">
                        Facebook
                    </a>
                   
                    <a href="https://twitter.com/" target="_blank" className="home__social-link bx bxl-twitter">
                        Twitter
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" className="home__social-link bx bxl-instagram">
                        Instagram
                    </a>
                </div>

                <div className="home__data">
                    <h1 className="home__title">NEW RAVEN WATCH COLLECTIONS XS70</h1>
                    <p className="home__description">
                        Latest arrival of the new imported watches of the XS70 series,
                        with a modern design. Choose us we value your time
                    </p>
                    <span className="home__price">$2890</span>

                    <div className="home__btns">
                        <a href="#" className="button button--gray button--small">
                            Discover
                        </a>

                        <button href ="#products" className="button home__button"> See Our Collections</button>
                    </div>
                </div>
            </div>
        </section>
        
</div>




)
}

export default Home