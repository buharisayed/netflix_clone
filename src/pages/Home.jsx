import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'


const Home = () => {
  return (
    <>
    <Main/>
    <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
    <Row rowID='2' title='Now Playing' fetchURL={requests.requestNowPlaying}/>
    <Row rowID='3' title='Popular' fetchURL={requests.requestPopular}/>
    <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
   </>
  )
}

export default Home