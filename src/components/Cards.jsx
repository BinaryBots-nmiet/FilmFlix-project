import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='pb-5 flex flex-row gap-4'>
        <Card
        movieName="Road House"
        movieType= "Action, Thriller"
        img="https://image.tmdb.org/t/p/original/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg"
        date="Mar 8, 2024"
        rate="8.4"
        link="https://movix-eta.vercel.app/movie/359410"
        />
        <Card 
        movieName="Dune: Part Two"
        movieType= "Science Fiction, Adventure"
        img="https://image.tmdb.org/t/p/original/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg"
        date="Feb 27, 2024"
        rate="7.5"
        />
        <Card 
        movieName="Godzilla x Kong"
        movieType= "Action, Science Fiction, Adventure"
        img="https://image.tmdb.org/t/p/original/gmGK5Gw5CIGMPhOmTO0bNA9Q66c.jpg"
        date="Feb 27, 2024"
        rate="7.5"
        />
        <Card 
        movieName="Madame Web"
        movieType= "Action, Fantasy"
        img="https://image.tmdb.org/t/p/original/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg"
        date="Feb 27, 2024"
        rate="7.5"
        />
    </div>
  )
}

export default Cards
