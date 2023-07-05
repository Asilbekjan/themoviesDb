import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Movie from './pages/movie page/movie';
import Header from "./pages/header_page/header";
import MovieinfoComponent from './components/movieinfo/MovieinfoComponent';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TwShow from './pages/twshowpage/tvshow';
import People from './pages/people_page/people';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/' element={<Header/>} />
                <Route path='/movie/:title' element={<Movie/>}/>
                <Route path='/tv/:title' element={<TwShow/>}/>
                <Route path='/person' element={<People/>}/>
                <Route path='/movie-info/:id' element={<MovieinfoComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

