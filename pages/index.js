import React, {component} from 'react'
import fetch from 'isomorphic-unfetch'
import Hero from '../components/Home/Hero'


function Home({data}) {
  return (
    <div>
      <div className="hero">
      <h1>{data.Hero.Headline}</h1>
      <h2>{data.Hero.Subheading}</h2>
      </div>
    </div>
  )
}

const {API_URL} = process.env

export async function getServerSideProps () {

  const res = await fetch(`${API_URL}/home`)
  const data = await res.json()
  return {
    props: {
      data: data
    }
  }
}

export default Home
