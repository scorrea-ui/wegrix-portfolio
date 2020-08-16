import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import SkillItem from './SkillItems'

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      image: '/images/icons/components.svg',
      title: 'Components',
      copy:
        'Reusable, modular and maintainable code to save time and make code consistent.',
    },
    {
      image: '/images/icons/responsive.svg',
      title: 'Responsive',
      copy:
        'Reponsive design, so that whatever website I work / collaborate on looks good on mobile, tablet and desktop',
    },
    {
      image: '/images/icons/functional.svg',
      title: 'Functional',
      copy:
        'Use of vanilla javascript or javascript frameworks to make animations, create logic, have fun.',
    },
    {
      image: '/images/icons/accessible.svg',
      title: 'Accessible',
      copy:
        'Keeping in mind keyboard navigation, screen readers and other types of tech to make an easy and great experience.',
    },
  ])

  return (
    <div>
      <Fade cascade direction='top' delay={500} triggerOnce>
        <section>
          <div className='c-skills'>
            <div className='o-container'>
              <h1 className='c-skills__title u-text-center u-mb50 u-mb0@md'>
                What I care about
              </h1>
              <div className='o-grid o-grid--center o-grid--cards o-grid--equal-height'>
                {skills.map((skill) => {
                  return (
                    <SkillItem
                      key={skill.title}
                      title={skill.title}
                      copy={skill.copy}
                      image={skill.image}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  )
}

export default Skills
