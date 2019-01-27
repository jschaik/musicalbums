import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';

class AddAlbum extends Component {
    state = {
        title: '',
        artist: '',
        year: '',
        tracks: '',
        errors: {}
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const {title, artist, year, tracks} = this.state;

        //Check For Errors
        if (title === '') {
            this.setState({errors: {Title: 'Title is required'}});
            return;
        }

        if (artist === '') {
            this.setState({errors: {artist: 'Artist is required'}});
            return;
        }

        if (year === '') {
            this.setState({errors: {year: 'Year is required'}});
            return;
        }
        if (tracks === '') {
            this.setState({errors: {tracks: 'Tracks is required'}});
            return;
        }

        const newAlbum = {
            title: this.state.title,
            artist: this.state.artist,
            year: this.state.year,
            tracks: this.state.tracks
        };

       await axios.post('https://musicapi2018-2019.herokuapp.com/api/albums', newAlbum)
            .then(res => {
                console.log(newAlbum);
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

        this.props.history.push('/');// after submit go to home
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {title, artist, year, tracks, errors} = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h3 style={{ color: 'red', textAlign: 'center'}}>Add Album</h3>
                </div>
                <div className="card-header">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <TextInputGroup label="Title" name="title" placeholder="Enter title" value={title} onChange={this.onChange} error={errors.title}/>
                        <TextInputGroup label="Artist" name="artist" placeholder="Enter artist" value={artist} onChange={this.onChange} error={errors.artist}/>
                        <TextInputGroup label="Year" name="year" placeholder="Enter year" value={year} onChange={this.onChange} error={errors.year}/>
                        <TextInputGroup label="Tracks" name="tracks" placeholder="Enter tracks" value={tracks} onChange={this.onChange} error={errors.tracks}/>
                        <input type="submit" value="Add Album" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddAlbum;