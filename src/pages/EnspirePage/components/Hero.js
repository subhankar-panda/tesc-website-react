import React, {Component} from 'react';
import $ from 'jquery';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
// import Nav from './Nav';

class Hero extends Component {


    // change #about later - i liked 800 ms over 450
    scrollAnimation() {
        window.scrollTo(0,0)
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    }

    render() {

        //write your css in src/scss/apps/enspire/components/_hero.scss
        // temporarily removed <Nav /> because it was messing up with the layout
        return (
            <section className="w-100 h-100 d-flex align-items-center justify-content-center enspire-hero">
                <div className="container-fluid text-center enspire-contents">
                    <img className="enspire-hero__logo" src="/Enspire-logo-text-blue.svg" />
                    <p>
                        <br />
                        UC San Diego &#9679; January 28, 2019
                        <br />
                        Explore UCSD for a day of fun and engaging engineering activities.
                    </p>
                    <button type="button" className="btn btn-outline-primary btn-custom-large btn-space-right">Register now</button>
                    <button type="button" className="btn btn-outline-primary btn-custom-large btn-space-left">Volunteer sign-up</button>
                    <br /><br />
                    <button type="button" className="btn btn-custom-chevron" onClick={this.scrollAnimation}><i className="fas fa-chevron-down fa-5x"></i></button>
                </div>
            </section>
        )
    }
}

export default Hero;