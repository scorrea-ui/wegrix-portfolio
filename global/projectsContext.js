import React, { createContext } from 'react'

const projectsState = [
  {
    image:
      'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/toyota.jpg',
    project: 'Toyota Forklift',
    company: 'ADK Group',
    url: 'https://www.toyotaforklift.com/',
    tech: 'Private',
    featured: true,
  },
  {
    image:
      'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/cloudtask.jpg',
    project: 'CloudTask',
    company: 'CloudTask',
    url: 'https://www.cloudtask.com/',
    featured: true,
  },
  {
    image: 'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/jha.jpg',
    project: 'JHA',
    company: 'ADK Group',
    url: 'https://www.johnhummel.com/',
    featured: true,
  },
  {
    image:
      'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/privafy.jpg',
    project: 'Privafy',
    company: 'ADK Group',
    url: 'https://www.privafy.com/',
    featured: false,
  },
  {
    image:
      'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/indecision.png',
    project: 'Indecision',
    company: 'Andrew Mead',
    url: 'https://santiago-correa-dev.github.io/indecision/',
    featured: false,
  },
  {
    image:
      'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/pizza.png',
    project: 'Pizza Calculator App',
    company: 'Santiago Correa',
    url: 'https://unruffled-fermi-473b52.netlify.app/',
    featured: false,
  },
  {
    image:
      'https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/news_room.png',
    project: 'News Room App',
    company: 'Santiago Correa',
    url: 'https://admiring-lewin-885a59.netlify.app/',
    featured: false,
  },
]

export const projectsContext = createContext(projectsState)

export const ProjectProvider = ({ children }) => {
  return (
    <projectsContext.Provider
      value={{
        projects: projectsState,
      }}
    >
      {children}
    </projectsContext.Provider>
  )
}
