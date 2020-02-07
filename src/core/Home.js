import React, { Component } from "react";
import "../css/Home.css";

// Components
import Carousel from "./Carousel.js";
import Section from "./Section";
import AvatarCard from "./AvatarCard";
import Navbar from "./Navbar";
import Loader from "./Loader";

// Assets
import Connected from "../images/Connected.svg";
import Speed from "../images/Speed.svg";
import Avatar_1 from "../images/Avatar_1.svg";
import Avatar_2 from "../images/Avatar_2.svg";
import Avatar_3 from "../images/Avatar_3.svg";
import Moon from "../images/Moon.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        {/* Section is a wrapper class that renders differently depending on the modifier prop passed*/}
        <Section modifier="primary">
          {/* First Image & heading */}
          <div className="container d-flex justify-content-between image-primary pt-5">
            <div>
              <h1 className="display-2">Make Connections</h1>
              <h1 className="display-2 font-weight-bold">Faster.</h1>
              <p className="description-text">
                Quicker than ever before! Never miss a thing.
              </p>
            </div>
            <img src={Speed} className="homepage-medium-image" alt="" />
          </div>
        </Section>
        {/* Second Image & heading */}
        <Section modifier="primary">
          <div className="container d-flex justify-content-between image-secondary pb-2">
            <img
              src={Connected}
              className="homepage-medium-image mb-4"
              alt=""
            />
            <div>
              <h1 className="display-2">Meet People</h1>
              <h1 className="display-2 font-weight-bold">Like You.</h1>
              <p className="description-text">
                Make new friends, create new memories.
              </p>
            </div>
          </div>
        </Section>
        <Section modifier="secondary">
          <div className="container d-flex justify-content-between section-text my-4">
            <h1 className="display-3 font-weight-bold">Discover</h1>
            <i className="far fa-comments fa-3x mb-2"></i>
            <p className="description-text">
              Updated For 2020, Newly improved, and full of great updated
              features, Socialify is leading the way in making sure you stay
              connected! Make connections that matter and hangout with friends!
            </p>
            <Loader modifier="dots" />
          </div>
        </Section>
        <Section modifier="primary" className="section-flex-container">
          <div className="mt-4">
            <h1 className="text-center">What people are saying...</h1>
          </div>

          <div className="section-reviews mb-3">
            <div className="mb-4">
              <AvatarCard
                image={Avatar_2}
                name="Peter Griffin"
                phraseOne="This is fantastic! Thanks so much guys, sharing is caring!"
              />
            </div>
            <div className="my-4">
              <AvatarCard
                image={Avatar_1}
                name="John Smith"
                phraseOne="This is amazing. I've been using it to create lots of super nice get togethers."
              />
            </div>
            <div className="mb-3">
              <AvatarCard
                image={Avatar_3}
                name="Sandy White"
                phraseOne="Thanks so much for making these free resources available to us!"
              />
            </div>
          </div>
        </Section>

        {/* Parallax */}
        <Section modifier="primary">
          <div className="parallax-background background-overlay"></div>
        </Section>
        {/*  */}

        <Section modifier="primary">
          <div className="container d-flex justify-content-between section-text my-4">
          <h1 className="display-3 font-weight-bold text-center">Ready for action!</h1>
          <p className="description-text mb-5">
          Modern life can be complicated, we made it simple. Simplify your day with the app that manages
          all of your social life.
          </p>
          <Loader modifier="spinner" />
          </div>
          
        </Section>

        <Section modifier="secondary">
          <div className="d-flex flex-column justify-content-around align-items-center mx-auto my-4">
            <div className="mx-auto">
              <h1 className="text-center">Ready, Set, GO!</h1>
              <p className="description-text text-center">
                Open your account today, it's free and only takes a minute!
              </p>
              <button className="btn btn-outline btn-block">
                Sign up
              </button>
            </div>

            <div className="mt-4">
              <img src={Moon} className="homepage-medium-image" alt="" />
            </div>
          </div>
        </Section>

        <Section modifier="footer">
          <div className="mt-4">
            <p>© Copyright 2000-2019 by Friends corp. All Rights Reserved.</p>
            <div>
              <i className="fab fa-twitter fa-2x mx-3 mb-4" />
              <i className="fab fa-facebook fa-2x mx-3 mb-4" />
              <i className="fab fa-instagram fa-2x mx-3 mb-4" />
              <i className="fab fa-linkedin fa-2x mx-3 mb-4" />
            </div>
          </div>
        </Section>
      </div>
    );
  }
}
