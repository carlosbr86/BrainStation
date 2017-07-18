import React, {Component} from 'react';
import {Link} from 'react-router';

class SongDetails extends Component {
    render() {

 
        let specificSong = this.props.songList.filter((song)=>{
            return song.id === Number(this.props.params.id);
        })
        // console.log("This song is:",specificSong)
        return (
            <div >
                <span className="glyphicon glyphicon-play play" onClick={()=>{this.props.playThisSong(specificSong[0].id)}} aria-hidden="true"></span>
                <span className="displayInline"> Title: {specificSong[0].title}</span>
                <p></p>
                <p> Description: {specificSong[0].description}</p>
                <Link className="linkSong" to={"/songs"}> Playlist </Link>
            </div>
        )
    }
}

export default SongDetails;