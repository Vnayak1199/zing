import React from 'react'
import footer_logo from "../src/images/footer-logo.webp"
import facebook from "../src/images/facebook.webp"
import twitter from "../src/images/twitter.webp"
import pinterest from "../src/images/pinterest.webp"
import youtube from "../src/images/youtube.webp"
import instagram from "../src/images/instagram.webp"

const Footer = () => {
return (
<div>
    <footer>
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xl-6">
                        <div className="footer_logo">
                            <a href="/"><img src={footer_logo} alt="Footer Logo" /></a>
                        </div>
                        <p>Zing is #1 dating app for one-to-one live video chat app to meet new people nearby and
                            worldwide. Download Now!</p>
                        <div className="footer_social">
                            <ul>
                                <li>
                                    <a title="facebook" target="_blank" rel="noreferrer" 
                                        href="https://www.facebook.com/zing.datingapp/"><img src={facebook}
                                            alt="facebook" /></a>
                                </li>
                                <li>
                                    <a title="twitter" target="_blank" rel="noreferrer" 
                                        href="https://twitter.com/Zing_DatingApp"><img src={twitter}
                                            alt="twitter" /></a>
                                </li>
                                <li>
                                    <a title="pintrest" target="_blank" rel="noreferrer" 
                                        href="https://www.pinterest.com/zingdatingapp/"><img src={pinterest}
                                            alt="pintrest" /></a>
                                </li>
                                <li>
                                    <a title="youtube" target="_blank" rel="noreferrer" 
                                        href="https://www.youtube.com/channel/UCteJVjJJ03Q4R7-cLFd5cRg/videos"><img
                                            src={youtube} alt="youtube" /></a>
                                </li>
                                <li>
                                    <a title="instagram" target="_blank" rel="noreferrer" 
                                        href="https://www.instagram.com/zing.datingapp/"><img
                                            src={instagram} alt="instagram" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7 col-xl-6 d-flex justify-content-between">
                        <div className="link_list">
                            <h4>Helpful Links</h4>
                            <ul>
                                <li><a title="Support" href={"/Contact"}>Support</a></li>
                            </ul>
                        </div>
                        <div className="link_list">
                            <h4>Company</h4>
                            <ul>
                                <li><a title="About Us" href={"/About"}>About Us</a></li>
                                <li><a title="Contact Us" href={"/Contact"}>Contact Us</a></li>
                                <li><a title="Privacy" href={"/"}>Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="link_list">
                            <h4>Download Now</h4>
                            <ul>
                                <li>
                                    <a target="_blank" rel="noreferrer" 
                                        href="https://apps.apple.com/us/app/zing-dating-app-video-chat/id969850672">iOS
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" 
                                        href="https://play.google.com/store/apps/details?id=video.chat.datingzing">
                                        Android</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <p>© Copyright 2020 — All rights reserved — Zing Team</p>
            </div>
        </div>
    </footer>
</div>
)
}

export default Footer