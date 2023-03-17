import React from 'react'
import about_banner from './images/about-banner.webp'
import about_img1 from './images/about-img1.webp'
import about_img2 from './images/about-img2.webp'
import TryFree from './TryFree'


const About = () => {
return (
<>
    <section className="sub_banner" style={{backgroundImage: 'url('+about_banner+')',}}>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-7">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    </section>

    <section className="vision-statement">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>
                            <span>Vision</span>
                            Statement
                        </h2>
                        <p><a title="Zing Dating App" href="index.html">Zing Dating App</a> is a multi-functional mobile application that is oriented on niche dating and is incredibly user-friendly. We care about our customers and have established a secure and stress-free environment for you to enjoy the communication. You are protected against spam and cat-fishing, in addition we continuously work on keeping the platform up-to-date with the latest trends and features.</p>
                    </div>
                    <div className="col-lg-6 img-tab">
                        <div className="img-tag img-one">
                            <img src={about_img1} alt="About" />
                        </div>
                        <div className="img-tag img-two">
                            <img src={about_img2} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="numbers-speaks">
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-lg-8">
                        <h3>
                            <span>Numbers</span>
                            Speaks Everything
                        </h3>

                        <div className="d-flex justify-content-between ">
                            <div className="numbers">
                                270819
                                <span>Downloads</span>
                            </div>
                            <div className="numbers">
                                7560
                                <span>Likes</span>
                            </div>
                            <div className="numbers">
                                1651
                                <span>5 Star Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <TryFree />
</>
)
}

export default About;