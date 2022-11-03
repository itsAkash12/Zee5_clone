import React from 'react'
import requests from '../Components/Data/Requests'
import Rows from '../Components/Data/Row'

export default function Movies() {
  return (
    <div style={{marginTop:"20px"}} className="movie__rows">
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Rows
          title="ZEE5 ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}
