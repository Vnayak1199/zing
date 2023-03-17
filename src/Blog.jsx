import React from 'react'
import about_banner from './images/about-banner.webp'
import find_love from './images/find-your-love-in-covid-19-pandemic.webp'
import arrow_right_black from './images/arrow-right-black.webp'
import datting_profile from './images/dating-profile-in-zing.webp'
import how_do from './images/how-do-I-create-a-zing-account.webp'
import blog from './images/blog.webp'
import zing_datting_app from './images/zing-dating-app-how-to-use-2.webp'
import BlogCommon from './BlogCommon'
import TryFree from './TryFree'

const Blog = () => {
return (
<>
    <section className="sub_banner" style={{backgroundImage: 'url('+about_banner+')',}}>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-7">
                    <h1>Blog</h1>
                </div>
            </div>
        </div>
    </section>

    <section className="blog-list">
        <div className="container">
            <div className="row justify-content-between ">
                <div className="col-md-6">

                    <BlogCommon img={find_love} alt="Find Your Love in Covid-19 Pandemic" date=" August 27, 2020"
                        title="Find Your Love in Covid-19 Pandemic" detail="In the tough time of the COVID-19 pandemic, the whole world is getting used to the concept of social distancing. For some people, it means lots of quality time with their
                        loved ones or life partner, but for singles, the self-quarantine situation is creating a different set of challenges." arrow={arrow_right_black}>
                    </BlogCommon>

                </div>
                <div className="col-md-6">
                    <BlogCommon img={datting_profile} alt="How to make a great dating profile in Zing" date=" June 10, 2020"
                        title="How to make a great dating profile in Zing?" detail="It’s a very intimidating task to create a good online dating profile. It’s not easy tooveremphasize yourself without sounding narcissistic, egotistic or, even worse,despairing. It’s all about how you introduce yourself to people in a way that makes themwant to learn more." arrow={arrow_right_black}>
                    </BlogCommon>
                </div>
                <div className="col-md-6">
                    <BlogCommon img={how_do} alt="How do I create a Zing account" date="May 27, 2020"
                        title="How do I create a Zing account?" detail="Welcome to Zing Website! Zing Dating app is the best online option where you can find your perfect partner & begin your beautiful love life. In this app, you can find new
                        friends and communicate in real-time via one-to-one live video and chat, send gifts to each other, and much more! To start using the app, the very first thing you need to do is, create a Zing account. Zing" arrow={arrow_right_black}>
                    </BlogCommon>
                </div>
                <div className="col-md-6">
                    <BlogCommon img={blog} alt="Dating App Development – Building an App NOT Like Tinder!" date="April 16, 2020"
                        title="Dating App Development – Building an App NOT Like Tinder!" detail="A Statista report shows that astounding 60% of Americans have used an online dating app
                        at some point. It’s obvious that you can’t ignore the impact of dating apps, 20% of the
                        current committed relationships in the US began online and it may only increase. With
                        the overflowing dating applications, people have moved away from traditional dating
                        practices and shifted to online dating platforms. Collaborate with a dating app
                        development company, and" arrow={arrow_right_black}>
                    </BlogCommon>
                </div>
                <div className="col-md-6">
                    <BlogCommon img={zing_datting_app} alt="Zing: Dating App – How to Use" date="April 14, 2020"
                        title="Zing: Dating App – How to Use" detail="Zing is the perfect dating app to find your partner. With the&nbsp;Zing Dating app, you
                        can find your perfect partner &amp; let your relationship bloom into harmony. You can
                        find new friends and communicate in real-time via one-to-one live video and chat, send
                        gifts to each other, and much more! In this article, we will talk about why our dating
                        app is so popular by looking at the features of" arrow={arrow_right_black}>
                    </BlogCommon>
                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <ul className="pagination justify-content-center align-items-center">
                        <li className="page-item"><a className="page-link text-inherit border-0 bg-transparent"
                                href="/blog">Prev</a></li>
                        <li className="page-item mx-1"><a className="page-link text-inherit rounded-circle"
                                href="/blog">1</a></li>
                        <li className="page-item mx-1"><a className="page-link text-inherit rounded-circle"
                                href="/blog">2</a></li>
                        <li className="page-item mx-1"><a className="page-link text-inherit rounded-circle"
                                href="/blog">3</a></li>
                        <li className="page-item"><a className="page-link text-inherit border-0 bg-transparent"
                                href="/blog">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <TryFree />
</>
)
}

export default Blog;