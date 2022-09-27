import React from 'react'
import './nav.css'
import Link from './Link/Link'

const Nav = () => {
  const links = [
    { title: 'Films', url: 'https://swapi.dev/api/films/' },
    { title: 'People', url: 'https://swapi.dev/api/people/' },
    { title: 'Planets', url: 'https://swapi.dev/api/planets/' },
    { title: 'Google', url: 'https://www.google.com/' },
  ]
  return (
    <ul className='nav-menu'
    >

    {links.map((linky) => (
      
    <Link key={linky.title} link={linky} />

    ))}
    </ul>
  )
}

export default Nav