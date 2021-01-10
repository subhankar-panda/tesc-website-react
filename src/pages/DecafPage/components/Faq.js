import React from 'react';
import { Container } from 'reactstrap';

import BorderTop from '../assets/border-faq-top.svg';
import BorderBottom from '../assets/border-faq-bottom.svg';
import Spotlight from '../assets/spotlight.svg';

const Faq = ({ isCompany }) => {
    return (
        <section className="decaf-faq">
            <img
                src={isCompany ? BorderTop : BorderBottom}
                alt=""
                className="decaf-faq__border-top"
            />
            <img src={Spotlight} alt="" />
            <Container>
                <h1 className="decaf-faq__title">
                    frequently asked
                    <br />
                    <em>QUESTIONS</em>
                </h1>
            </Container>
            <img
                src={BorderBottom}
                alt=""
                className="decaf-faq__border-bottom"
            />
        </section>
    );
};

export default Faq;
