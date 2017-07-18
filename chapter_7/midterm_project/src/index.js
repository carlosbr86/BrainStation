import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import './index.css';

function Song(source, title, description, id) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('/upstep.mp3', 'Upstep', 'Brutal beat and bulky bass are the foundation for a dubstep frenzy featuring synths, wailing guitar and jitters and glitches. Tempo: 140bpm', 0),
  new Song('/olympian.mp3', 'Olympian', 'An energetic, vibrant track featuring positive electric guitar licks and modern drums creates useful sports theme. Tempo: 130bpm', 1),
  new Song('/transmission.mp3', 'Transmission', 'Energetic electronic melody featuring modern drums, snaking bass and explosive electric guitar. Tempo: 120bpm', 2)
]

ReactDOM.render((
  <Router history={browserHistory}>
    <Route songs={songs} path="/" component={App}>
      <IndexRoute component={SongsList} />
      <Route path="songs" component={SongsList} />
      <Route path="songs/:id" component={SongDetails} />
    </Route>
  </Router>
),document.getElementById('root'));
