import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  constructor(){
    super();
      this.state= {
        musicIndex: 0,
        playing: false
    }
    this.skipMusic=this.skipMusic.bind(this);
    this.playPauseMusic=this.playPauseMusic.bind(this);
    this.playThisSong=this.playThisSong.bind(this);
  }


  skipMusic(add,audioRef) {
    this.setState({
      musicIndex:  this.state.musicIndex + add,
    })
  }

  playPauseMusic(){ 
    if (this.state.playing){
      this.refs.audioRef.pause();
    } else {
      this.refs.audioRef.play();
    }
    this.setState({
      playing: !this.state.playing
    })
  }

  playThisSong(index){
    this.setState({
        musicIndex: Number(index),
        playing: true
    })
  }
	componentDidUpdate(prevProps,prevState) {
        if(prevState.playing===true && prevState.musicIndex!==this.state.musicIndex){
          this.refs.audioRef.play();
        }
        else if(this.state.playing===true){
          this.refs.audioRef.play();
        }
  }

  render() {
    const songs = this.props.route.songs;


    return (
      <div className="App">
        <div className="link">
          <Link   to="/songs"> BrainStation Songs </Link>
        </div>

        <div className="otherComponent">
          {React.cloneElement(this.props.children, { songList: songs , playThisSong: this.playThisSong, playing: this.state.musicIndex })}
        </div>

        <div className="musicNameDisplay">
          <marquee behavior="scroll" direction="left">{songs[this.state.musicIndex].title}</marquee>
          <p > </p>
        </div>

        <div className="buttonsBar">
          <audio ref="audioRef" src={songs[this.state.musicIndex].source} type="audio/mpeg" > </audio>
          {/*############### BUTTONS ###############*/}
          <div className="buttons">
            <button disabled={this.state.musicIndex===0? true: false} type="button" className="btn btn-default btn-lg play"  onClick={()=>{this.skipMusic(-1)}} >
              <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
            </button>

            <button type="button" className="btn btn-default btn-lg play" onClick={this.playPauseMusic}>
              <span className={this.state.playing===false? "glyphicon glyphicon-play": "glyphicon glyphicon-pause"}  aria-hidden="true"></span>
            </button>

            <button disabled={this.state.musicIndex===(songs.length-1)? true: false} type="button" className="btn btn-default btn-lg play" onClick={()=>{this.skipMusic(+1)}}>
              <span className="glyphicon glyphicon-step-forward "  aria-hidden="true"></span> 
            </button>
            </div>
            {/*############### BUTTONS ###############*/}            
        </div>
      </div>
    );
  }
}

export default App;
