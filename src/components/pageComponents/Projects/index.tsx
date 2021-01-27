import Card from '@components/atoms/Card'
import Hero from '@components/atoms/Hero'
import Mosaic from '@components/atoms/Mosaic'
import Section from '@components/atoms/Section'
import { nanoid } from 'nanoid'
import slugify from 'slugify'
import { Legend } from './style'

const proj = [
  {
    title: 'Proj1',
    lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    current: true,
    img:
      'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Proj2',
    lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    current: true,
    img:
      'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Proj3',
    lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    current: false,
    img:
      'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Proj4',
    lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    current: false,
    img:
      'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Proj5',
    lead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    current: false,
    img:
      'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
]

export default function Projects() {
  return (
    <>
      <Hero
        title="Fazer podcast é gostoso demais"
        lead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, saepe architecto odit ducimusa"
        main
      />
      <Section>
        <Legend>
          <div>
            <p>
              <span></span>Com quem ando
            </p>
            <p>
              <span></span>Já passearam comigo
            </p>
          </div>
        </Legend>
        <Mosaic>
          {proj.map(each => (
            <Card
              key={nanoid()}
              image={each.img}
              title={each.title}
              lead={each.lead}
              to={`/projetos/${slugify(each.title)}`}
              current={each.current}
            />
          ))}
        </Mosaic>
      </Section>
    </>
  )
}
