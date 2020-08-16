import React from "react";

const Me = () => {
  return (
    <section>
      <div className="c-about">
        <div className="o-container">
          <div className="o-grid o-grid--between">
            <div className="o-grid__col u-6/12@md">
              <h1 className="c-about__title">
                My story through web development
              </h1>
            </div>
            <div className="o-grid__col u-6/12@md">
              <div className="c-about__img">
                <img
                  className="c-about__me"
                  src="/images/me.jpg"
                  alt="Santiago Correa"
                />
              </div>
            </div>
          </div>
          <div className="o-grid o-grid--center">
            <div className="o-grid__col u-9/12@md">
              <p className="c-about__copy u-mb">
                As a child I always loved tech, I was amazed by websites such as
                Facebook, Yahoo, and many others. I was like man, how the heck
                can I create something on the web, I want to be like one of
                these companies, so I said let's do this, what the heck.
              </p>
              <p className="c-about__copy u-mb">
                My story started with me trying out millions of courses, I got
                so frustrated and I was like man is this really for me, so I
                left for a couple of months and went back to it, I decided that
                I couldn't give up, that I wanted to keep learning more and more
                until I could finally understand and get a grip of things.
              </p>
              <p className="c-about__copy u-mb">
                So I finished a Bootcamp with Udacity which is just amazing and
                went learning things on the way, I finally was able to see
                websites I created on my computer, which were initially terrible
                but marked my career in the right path.
              </p>
              <p className="c-about__copy u-mb">
                What I now love doing is creating beautiful, responsive and fast
                optimized websites using the experience gained in all these
                years and sleepless nights. I have also had the opportunity to
                work a little bit in devops which is pretty cool when using a
                Custom build solution on bitbucket as well as work with PHP and
                Node.js a bit.
              </p>
              <p className="c-about__copy u-mb">
                The method and tech stack I use for custom solutions are the
                following: HTML5, CSS3, SCSS, LESS, Javascript, jQuery, ES6,
                PHP, WordPress, React, Webpack, Docker, Bitbucket Pipelines,
                Agile, Jira, Confluence, Rest API Handling, IOTA, Bulma,
                Bootstrap, 3rd party integrations, and BEM.
              </p>
              <p className="c-about__copy u-mb">
                I build and maintain websites, I love being in constant contact
                with clients/people of interest keeping them updated on
                progress, milestones, issues that come up and more based on what
                is happening at the moment, I also love to adapt to tools that
                are being used to ensure everyone feels comfortable and
                confident.
              </p>
              <p className="c-about__copy u-mb">
                I also consider that it is important to love what you do, and
                when you do, you just do great, so as Nike says "JUST DO IT"
                I've worked with individuals, small companies, medium companies
                and fortune 500 companies such as Toyota.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
