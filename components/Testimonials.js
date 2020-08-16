import React, { Component } from "react";
import Glide from "@glidejs/glide";
import { Fade } from "react-awesome-reveal";
class Testimonials extends Component {
  state = {
    slider: new Glide(".glide", {
      autoheight: true,
      breakpoints: {
        1280: {
          perView: 3,
        },
        1024: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
      bound: true,
      peek: {
        before: "20px",
        after: "20px",
      },
      perView: 3,
      startAt: 0,
      type: "carousel",
    }),
  };

  componentDidMount() {
    this.state.slider.mount();
  }

  componentWillUnmount() {
    this.state.slider.destroy();
  }
  render() {
    const testimonials = [
      {
        content: `For some time I've served as a facilitator and mentor for
        Santiago and I can definitely ensure that it is rare to
        come across standout talent like him.`,
        author: "Manuel Stroh | Full Stack Dev",
        company: "Globant",
      },
      {
        content: `I have the pleasure of working with Santiago on a variety of WordPress website development projects, and I am always impressed with his professionalism, self-driven attitude, and the teamwork spirit which he brings to every project. `,
        author: "Fiana Eber | Project Manager",
        company: "ADK Group",
      },
      {
        content: `Santiago helped me create 2 great websites in the space of 4 weeks. He is super responsive and attentive, and also worked extremely well with my graphic designer and pushed her to get ready what we needed to finish the projects on time. `,
        author: "Michael Hanson | Founder",
        company: "Growth Genie | Enmotion Energy",
      },
      {
        content: `Santiago is a great web developer. He works quickly and produces quality work. I'd be happy to recommend him to anyone.`,
        author: "Tom Jenkins | VP of Marketing",
        company: "Cloudtask | Hakuna Digital",
      },
    ];
    return (
      <Fade direction="top" triggerOnce>
        <section>
          <div className="c-testimonial">
            <div className="o-container">
              <h1 className="u-mb u-text-center">Public Testimonials</h1>
              <div className="glide">
                <div className="glide__track" data-glide-el="track">
                  <div className="glide__slides">
                    {testimonials.map((testimonial) => {
                      return (
                        <div className="glide__slide" key={testimonial.author}>
                          <a href="https://www.linkedin.com/in/wegrix/">
                            <div className="c-testimonial__card">
                              <div className="c-testimonial__content">
                                <p>{testimonial.content}</p>
                              </div>
                              <div className="c-testimonial__author">
                                <p className="c-testimonial__name">
                                  {testimonial.author}
                                </p>
                                <p className="c-testimonial__company">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div data-glide-el="controls">
                  <button
                    aria-label="Swipe Left"
                    className="glide__arrow glide__arrow--left"
                    data-glide-dir="<"
                  ></button>
                  <button
                    aria-label="Swipe Right"
                    className="glide__arrow glide__arrow--right"
                    data-glide-dir=">"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}

export default Testimonials;
