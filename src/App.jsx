import React, { Component } from 'react';
import Nav from './Nav'
import Contact from './Contact'
import About from './About'
import Product from './Product'
import Home from './Home'
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <Nav />
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/product' component={Product} />
                    <Route path='/contact' component={Contact} />
                </BrowserRouter>         
            </div>
         );
    }
}
 
export default App;