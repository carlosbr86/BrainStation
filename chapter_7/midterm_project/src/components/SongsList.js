import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
        return (
            <div>
                {this.props.songList.map((song,index)=>{
                    return <div key={index} className="linkSong" >
                        <span className="glyphicon glyphicon-play" onClick={()=>{this.props.playThisSong(index)}} aria-hidden="true"></span>
                        <Link to={"/songs/"+index}> {index} - {song.title} </Link>
                    </div>
                })}
            </div>
        )
    }
}

export default SongsList;