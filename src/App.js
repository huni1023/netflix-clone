import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import {CoLA_Unggi, CoLA_Huni} from './CoLA';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title="NETFILX ORIGINALS" 
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow // with nothing equla size
      />
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>  
      <CoLA_Unggi title='2021Year Unggi PT'/>
      <CoLA_Huni title='2021Year Huni PT'/>
      
    </div>
  );
}

export default App;
