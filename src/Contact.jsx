import React from 'react'
import about_banner from './images/about-banner.webp'
import contact_img from './images/contact-img.webp'
import TryFree from './TryFree'

const Contact = () => {
return (
<>
<section className="sub_banner" style={{backgroundImage: 'url('+about_banner+')',}}>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-7">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-middle">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-6">
                    <h2>
                        <span>Let’s Create</span>
                        Progress Together
                    </h2>
                    <form>
                        <input class="form-control" type="text" placeholder="Full Name" />
                        <input class="form-control" type="text" placeholder="Email  Address" />
                        <textarea class="form-control" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn_sub">Submit</button>
                    </form>
                </div>
                <div class="col-lg-6 img-tab">
                    <div class="img-tag img-one">
                        <img src={contact_img} alt="Contact" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <TryFree />
</>
)
}

export default Contact;