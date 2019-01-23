import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import Albums from './components/albums/Albums';
import AddAlbum from './components/albums/addAlbum';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Music Albums"/>
                        <div className="container">
                           <Switch>
                               <Route exact path="/" component={Albums}/>
                               <Route exact path="/album/add" component={AddAlbum}/>
                               <Route component={NotFound}/>

                           </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
