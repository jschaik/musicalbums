import React, {Component} from 'react';
import Album from './Album';
import axios from "axios";

class Albums extends Component {

    state = {
        albums: [],
    };

     refreshPage = async () => {
        const res =  await axios.get('https://musicapi2018-2019.herokuapp.com/api/albums');
        this.setState({albums: res.data.items});
    };

    async componentDidMount() {
        const res = await axios.get('https://musicapi2018-2019.herokuapp.com/api/albums');
        this.setState({albums: res.data.items});
    }

    render() {
        const albums = this.state.albums;
        return (
            <React.Fragment>
                <h2 className="display-4 mb-2 albumTitle" style={{textAlign: 'center'}}>
                    <span>Music albums</span>
                </h2>
                {albums.map(album => (
                    <Album key={album._id} album={album} refreshPage = {this.refreshPage}/>
                ))}
            </React.Fragment>
        )
    }
}


export default Albums;