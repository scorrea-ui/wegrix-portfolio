import React, { useContext } from 'react'
import { Zoom } from 'react-awesome-reveal'
import { projectsContext } from '../global/projectsContext'
import Layout from '../components/Layout'

const ProjectsPage = () => {
  const { projects } = useContext(projectsContext)
  return (
    <Layout
      title='Santiago Correa | Front End Developer | Projects'
      description='Here iss some projects I have worked on ranging from 2017 to 2020
      which have all been great, fun and always include a learning
      experience.'
      url='https://wegrix.com/Projects'
    >
      <section>
        <div className='c-projects'>
          <div className='o-container'>
            <div className='c-projects__wrapper u-fd-col'>
              <h1 className='c-projects__title'>Public Work Showcase</h1>
              <p className='c-projects__copy'>
                Here's some projects I've worked on ranging from 2017 to 2020
                which have all been great, fun and always include a learning
                experience.
              </p>
            </div>
            <div className='o-grid o-grid--cards o-grid--equal-height'>
              {projects.map((project) => {
                return (
                  <div className='o-grid__col u-4/12@md' key={project.name}>
                    <Zoom bottom key={project.url} triggerOnce>
                      <a
                        className='c-projects__wrapper'
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <div className='c-projects__card'>
                          <img src={project.image} alt={project.project} />
                          <div className='c-projects__content'>
                            <div className='c-projects__copy'>
                              <p className='c-projects__tagline'>
                                {project.company}
                              </p>
                              <p className='c-projects__heading'>
                                {project.project}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Zoom>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
