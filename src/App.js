import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './page/SearchPage';
import BookShelf from './page/BookShelf';

function App() {
    return ( <
        Routes >
        <
        Route path = '/search'
        element = { < SearchPage / > }
        /> <
        Route path = '/'
        element = { < BookShelf / > }
        /> <
        /Routes>
    );
}

export default App;