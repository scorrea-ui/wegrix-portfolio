import React from 'react'
import ProjectButton from './shared/ProjectsButton'
import { Fade } from 'react-awesome-reveal'

const Hero = (props) => {
  return (
    <section>
      <div className={props.className}>
        <div className='o-container'>
          <div className={`${props.col ? 'o-grid o-grid--flush' : 'o-grid '}`}>
            <div
              className={`o-grid__col ${props.col ? props.col : 'u-7/12@md'}`}
            >
              <Fade cascade direction='left' triggerOnce>
                {props.title ? (
                  <h1 className={props.titleClass}>{props.title}</h1>
                ) : null}
                {props.copy ? (
                  <p className='c-hero__copy'> {props.copy} </p>
                ) : null}
                {props.buttons ? (
                  <div className='c-hero__buttons'>
                    <ProjectButton
                      className='c-btn c-btn--primary c-hero__btn js-btn'
                      content='Projects'
                    />
                    <a
                      href='/contact'
                      className='c-btn c-btn--secondary c-hero__btn'
                    >
                      Contact
                    </a>
                  </div>
                ) : <div></div>}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
