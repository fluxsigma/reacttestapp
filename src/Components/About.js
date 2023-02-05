import React from 'react'
import Rose3 from "../img/rose3.jpg"
function About() {
    return (
        <div className='about'> <h1 className='joker'>About Page</h1>

            <section className="story section container">
                <div className="story__container grid">
                    <div className="story__data">
                        <h2 className="section__title story__section-title">
                            Our Journey
                        </h2>

                        <h1 className="story__title">
                            Inspirational Watch of <br /> this year
                        </h1>

                        <p className="story__description">
                            Unlike jewelry, watches are both aesthetic and useful
                            The latest and modern watches of this year, is available in various
                            presentations in this store, discover them now.
                        </p>

                        {/* <a href="/" className="button button--small">Discover More</a> */}
                    </div>

                    <div className="story__images">
                        <img src={Rose3} alt='rose' height={500} width={550} className="story__img"></img>
                        <div className="story__square"></div>
                    </div>
                </div>
            </section>




        </div>


    )
}

export default About