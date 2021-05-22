import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogDetails from './components/BlogDetails';
import Create from './pages/Create';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>

            <Route path="/create">
                <Create/>
            </Route>

            <Route path="/blogs/:id">
                <BlogDetails/>
            </Route>

            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;