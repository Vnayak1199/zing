import React from 'react'
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import app_store from "../src/images/app-store.webp"
import google_play from "../src/images/google-play.webp"
import banner_mobile from "../src/images/hero_banner_mobile.webp"
import search_profile1 from "../src/images/search-profiles1.webp"
import search_profile2 from "../src/images/search-profiles2.webp"
import search_profile3 from "../src/images/search-profiles3.webp"
import search_profile4 from "../src/images/search-profiles4.webp"
import profile_detail_mobi from "../src/images/profile-details-mobi.webp"
import chat_mobi1 from "../src/images/chat-mobi-1.webp"
import img1 from "../src/images/img1.webp"
import img2 from "../src/images/img2.webp"
import testinonial_img from "../src/images/testimonials-img.webp"
import user1 from "../src/images/user1.webp"
import search_profiles4 from "../src/images/search-profiles4.webp"
import DattingApp from './DattingApp';
// import jQuery from 'jquery';
// import { Helmet } from 'react-helmet';

const Home = () => {
return (
<>
    <section className='hero_banner'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <h2>
                        <span>Let’s do it</span>
                        Find The Perfect Match
                    </h2>
                    <p>Meet, Chat, Flirt &amp; Date!</p>
                    <div className="app_btn_sub">
                        <NavLink className="app_btn" target="_blank"
                            to="https://apps.apple.com/us/app/zing-dating-app-video-chat/id969850672"><img
                                src={app_store} alt="App Store" /></NavLink>
                        <NavLink className="app_btn gp" target="_blank"
                            href="https://play.google.com/store/apps/details?id=video.chat.datingzing"><img
                                src={google_play} alt="Google Play" /></NavLink>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div class="mobile_img">
                        <div><img src={banner_mobile} alt="Hero Banner Mobile" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="zing_dating_app">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <h1><span>Zing dating app</span> Zing - Free Dating Online &amp; Video Chat App </h1>
                    <p>Zing Dating app is the best online option where you can find your perfect partner &amp; begin
                        your beautiful love life. Finding your perfect match has never been easier with the Zing Dating
                        application. In this app, you can find new friends and communicate in real-time via one-to-one
                        live video and chat, send gifts to each other, and much more!</p>
                </div>
            </div>
        </div>
    </section>

    <section className="zing_dating_type">
        <div className="container">
            <div className="row search_profiles">
                <div className="col-lg-7">
                    <div className="img_tag text-center">
                        <div data-aos="fade-down" className=" aos-animate"><img src={banner_mobile} alt="Zing" /></div>
                        <span className="search_user one " data-aos="zoom-in" data-aos-delay="500"><img
                                src={search_profile1} alt="search-profiles1" /></span>
                        <span className="search_user two " data-aos="zoom-in" data-aos-delay="1000"><img
                                src={search_profile2} alt="search-profiles2" /></span>
                        <span className="search_user three " data-aos="zoom-in" data-aos-delay="1500"><img
                                src={search_profile3} alt="search-profiles3" /></span>
                        <span className="search_user four " data-aos="zoom-in" data-aos-delay="2000"><img
                                src={search_profile4} alt="search-profiles4" /></span>
                    </div>
                </div>
                <div className="col-lg-5">
                    <DattingApp sub_title="Search profiles" title="Explore to Find Your Right Match"
                        desc="We firmly believe that online dating should be fun! With instant matching and chat features, you can find your people without tiring out your thumbs. You can set advanced filters like gender, age, relationship, religion, ethnicity, intention, active users, etc. to view profiles with perfect matches. You can select the current location or you can choose any other location using the integrated Google Place Search feature. We facilitate you finding your perfect match beyond any boundaries!"
                        signup="SignUp Now" />
                </div>
            </div>

            <div className="row profile_details">
                <div className="col-lg-7">
                    <div className="img_tag text-center">
                        <div data-aos="fade-up" className=""><img src={profile_detail_mobi} alt="Zing App" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <DattingApp sub_title="Profile details" title="View Fulll Profiles of People"
                        desc="You can view any user’s detailed profile. You can like the person or add them as your favorite as well. When you like any person, you will be able to start chatting with them instantly. You can send the virtual gift from chat. With a free account, you can like and start chatting with 5 people in a day. In case you want to access unlimited likes and chatting options, you can purchase Zing VIP access."
                        signup="SignUp Now" />
                </div>
            </div>

            <div className="row chat_app">
                <div className="col-lg-7">
                    <div className="img_tag text-center">
                        <div data-aos="fade-up" className=""><img src={chat_mobi1} alt="Zing Dating App" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <DattingApp sub_title="Chat" title="Chat and Meet Someone you can trust"
                        desc="You can start a live chat with an individual once you both mutually like one another. You can send them text messages, image attachments, stickers, and gifts as well. Apart from conventional chat, you can also use the random video chat option to communicate with online people of the app using live video chat"
                        signup="SignUp Now" />
                </div>
            </div>
        </div>
    </section>

    <section className="video_of_day">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="video_middle">
                        <OwlCarousel items={1} className="owl-theme video_slide" loop nav margin={10}>
                            <div className="item">
                                <img src={img1} alt="Zing Dating App" />
                            </div>
                            <div className="item">
                                <img src={img2} alt="Zing Dating App" />
                            </div>
                            <div className="item">
                                <img src={img1} alt="Zing Dating App" />
                            </div>
                            <div className="item">
                                <img src={img2} alt="Zing Dating App" />
                            </div>
                            <div className="item">
                                <img src={img1} alt="Zing Dating App" />
                            </div>
                        </OwlCarousel>
                        <h3>
                            <span>Video of the day</span>
                            Chat and Meet Someone you can trust
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="testimonials">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div data-aos="fade-right"><img src={testinonial_img} alt="Our Users Love Us" /></div>
                </div>
                <div className="col-lg-5">
                    <h3>
                        <span>testimonials</span>
                        Our Users Love Us
                    </h3>
                    <OwlCarousel items={1} loop autoplay className="owl-carousel owl-theme testimonials_slide">
                        <div className="item">
                            <p>Well I have been viewing various dating Apps for quite some time now and I believe thus
                                far this one to not only be quite user friendly but also to be Fun to use as well. The
                                interface is easily understandable and to the point and the people on here all seem
                                genuine and real! I’m gonna keep seeing what I think and then I can update my opinion
                                bust thus far I love it.</p>
                            <div className="user_by">
                                <div className="img_tag"><img src={user1} alt="User" /></div>
                                <div className="name">
                                    Benjamin A
                                    <small>Los Angeles</small>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <p>So far, so good. The dating app works well and is easy to use. I really like the make a
                                date button which actually worked on a lady in whom I'm interested.</p>
                            <div className="user_by">
                                <div className="img_tag"><img src={search_profiles4} alt="search profiles" /></div>
                                <div className="name">
                                    Avis S
                                    <small>Los Angeles</small>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Home;