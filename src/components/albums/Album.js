import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Album extends Component {
    state = {
        showAlbumInfo: false,
        albums: []
    };

    async onDeleteClick(_id) {
        const res = await axios.delete(`https://musicapi2018-2019.herokuapp.com/api/albums/${_id}`);
        this.setState({albums: res.data.items});

    };

    render() {
        const {_id, title, artist, year, tracks} = this.props.album;
        const {showAlbumInfo} = this.state;

        return (

            <div className="card card-body mb-3">
                <h4>{title}
                    <i onClick={() => this.setState({showAlbumInfo: !this.state.showAlbumInfo})}
                       className="fas fa-angle-down" style={{cursor: 'pointer', color: 'black', marginLeft: '10px'}}
                    />
                    <i onClick={() => this.onDeleteClick(_id)}
                       className="fas fa-trash-alt" style={{cursor: 'pointer', float: 'right', color: 'red'}}
                    />
                    <i
                        className="fas fa-pen" style={{cursor: 'pointer', float: 'right', color: 'orange', marginRight: '20px'}}
                    />
                </h4>
                {showAlbumInfo ? (<ul className="list-group">
                    <li className="list-group-item">Artist: {artist}</li>
                    <li className="list-group-item">Year: {year}</li>
                    <li className="list-group-item">Tracks: {tracks}</li>
                </ul>) : null}
            </div>
        )
    }
}

Album
    .propTypes = {
    album: PropTypes.object.isRequired
};

export default Album;
