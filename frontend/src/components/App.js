import React from "react";
import NewPost from "./NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
import Post from "./Post";
import './App.css';

import Home from "./Home";


/** Blog Application and native routes */

function App() {
    return (
        <div className="App container">
            <header className="App-header jumbotron mt-2">
                <h1 className="App-title display-4">Blogger</h1>
                <p className="lead">Share your thoughts and learn from Others</p>
                <nav>
                    <NavLink exact to="/">Blog</NavLink>
                    <NavLink exact to="/new">Add Post</NavLink>
                </nav>
            </header>

            <Switch>
                <Route exact path="/new">
                    <NewPost />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/:postId">
                    <Post />
                </Route>
            </Switch>
        </div>
    );
}

export default App;