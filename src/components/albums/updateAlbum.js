import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';

class UpdateAlbum extends Component {
    state = {
        title: '',
        artist: '',
        year: '',
        tracks: ''
    };

    onUpdate = async (e) => {
        e.preventDefault();

        const updateAlbum = {
            title: this.state.title,
            artist: this.state.artist,
            year: this.state.year,
            tracks: this.state.tracks
        };
        await axios.put('https://musicapi2018-2019.herokuapp.com/api/albums', updateAlbum)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        //Clear form after submit
        this.setState({
            title: '',
            artist: '',
            year: '',
            tracks: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {title, artist, year, tracks} = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h3 style={{ color: 'red', textAlign: 'center'}}>Update Album</h3>
                </div>
                <div className="card-header">
                    <form onSubmit={this.onUpdate.bind(this)}>
                        <TextInputGroup label="Title" name="title" placeholder="Enter title" value={title} onChange={this.onChange}/>
                        <TextInputGroup label="Artist" name="artist" placeholder="Enter artist" value={artist} onChange={this.onChange}/>
                        <TextInputGroup label="Year" name="year" placeholder="Enter year" value={year} onChange={this.onChange}/>
                        <TextInputGroup label="Tracks" name="tracks" placeholder="Enter tracks" value={tracks} onChange={this.onChange}/>
                        <input type="submit" value="Update album" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateAlbum;