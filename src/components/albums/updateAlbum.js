import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';
import {Link} from "react-router-dom";

class UpdateAlbum extends Component {

    state = {
        albums: []
    };

    async componentDidMount() {
        const { match: { params } } = this.props;

        const res = await axios.get(`https://musicapi2018-2019.herokuapp.com/api/albums/${params._id}`);
        this.setState({albums: res.data});

        console.log(res);
    }

    onUpdate = async (e) => {
        e.preventDefault();

        const { match: { params } } = this.props;
        await axios.put(`https://musicapi2018-2019.herokuapp.com/api/albums/${params._id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        //Clear form after submit
        this.setState({
           o
        });

        this.props.history.push('/');
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {title, artist, year, tracks} = this.state;
        const albums = this.state.albums;

        return (
            <div className="card mb-3">
                <div className="card-header" style={{backgroundColor: '#DCDCDC'}}>
                    <h3 style={{ color: '#696969', textAlign: 'center'}}>{albums.title}</h3>
                </div>
                <div className="card-header">
                    <form onSubmit={this.onUpdate.bind(this)}>
                        <TextInputGroup label="Title" name="title" placeholder={albums.title} value={title} onChange={this.onChange}/>
                        <TextInputGroup label="Artist" name="artist" placeholder={albums.artist} value={artist} onChange={this.onChange}/>
                        <TextInputGroup label="Year" name="year" placeholder={albums.year} value={year} onChange={this.onChange}/>
                        <TextInputGroup label="Tracks" name="tracks" placeholder={albums.tracks} value={tracks} onChange={this.onChange}/>
                        <input style={{float: 'right'}} type="submit" value="Update Album" className="btn btn-success"/>
                        <Link to={`/`}><button style={{float: 'right', marginRight: '10px'}} type="button" className="btn btn-danger">Cancel</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateAlbum;