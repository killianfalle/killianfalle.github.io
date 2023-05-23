import React from "react";
import "../../assets/styles/tech-stacks.scss"

import ReactLogo from "../../assets/svgs/react-logo";
import TailwindLogo from "../../assets/svgs/tailwind-logo";
import LaravelLogo from "../../assets/svgs/laravel-logo";
import JavascriptLogo from "../../assets/svgs/javascript-logo";
import TypescriptLogo from "../../assets/svgs/typescript-logo";
import PhpLogo from "../../assets/svgs/php-logo";
import IonicLogo from "../../assets/svgs/ionic-logo";
import FirebaseLogo from "../../assets/svgs/firebase-logo";
import HtmlLogo from "../../assets/svgs/html-logo";
import CssLogo from "../../assets/svgs/css-logo";

const TechStacks = () => {
  return (
    <div className="stacks-wrapper">
        <p className="title">Tech Stacks</p>
        <span className="stacks-divider">|</span>
        <div className="stacks-container">
            <ReactLogo />
            <IonicLogo />
            <JavascriptLogo />
            <TypescriptLogo />
            <LaravelLogo />
            <PhpLogo />
            <FirebaseLogo />
            <HtmlLogo />
            <CssLogo />
            <TailwindLogo />
        </div>
    </div>
  );
};

export default TechStacks;