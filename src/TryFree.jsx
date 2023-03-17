import React from 'react'
import icon from './images/icon.webp'
import app_store from './images/app-store.webp'
import google_play from "./images/google-play.webp"

const TryFree = () => {
  return (
    <>
    <section className="try-free">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 d-flex align-items-center">
                    <div className="icon">
                        <img src={icon} alt="Icon" />
                    </div>
                    <div className="text">
                        <h2>Try Zing for free!</h2>
                        <p>Zing is #1 dating app for one-to-one live video chat app to meet new people nearby and
                            worldwide. Download Now!</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="app_btn_sub">
                        <a className="app_btn" target="_blank" rel="noreferrer"
                            href="https://apps.apple.com/us/app/zing-dating-app-video-chat/id969850672"><img
                                src={app_store} alt="App Store" /></a>
                        <a className="app_btn gp" target="_blank" rel="noreferrer"
                            href="https://play.google.com/store/apps/details?id=video.chat.datingzing"><img
                                src={google_play} alt="Google Play" /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TryFree;