import React from 'react'

function Banner() {
  return (
    <section className="banner" id="banner">
        <div className="container">
            <div className="banner-wrapper">
                <div className="banner-img">
                    <img src="/person.png" width={300} alt="" />
                </div>
                <div className="banner-content">
                    <h6> Hello I am Anjali Pandey</h6>
                    <h3> FrontEnd Developer </h3>
                    <p>
                        I have basic knowledge of c and have worked on frontend development
                        projects which include Html , css, javascript, Reactjs and reduxtoolkit
                        major projects are snake game, cryptocurrency site, payment form 
                    </p>
                    <a className="btn" href="#projects">
                        About Me
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
