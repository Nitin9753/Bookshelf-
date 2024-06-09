import axios from 'axios';
import React, { useState } from 'react'
import Card from '../components/Card';
import './searchPage.css'
import { useNavigate } from 'react-router-dom';
const SearchPage = () => {
        //creating state variable for form response
        const [query, setQuery] = useState();
        const [bookEntries, setBookEnteries] = useState();
        const navigate = useNavigate();
        // console.log(query);
        const [spinnerValue, setSpinnerValue] = useState(false);

        const getBooks = async(book) => {
            setSpinnerValue(true);
            const res = await axios.get('https://openlibrary.org/search.json', {
                params: {
                    q: book,
                    limit: 10,
                    page: 1,
                }
            });
            // console.log(res.data.docs);
            setSpinnerValue(false);
            const books = res.data.docs;
            setBookEnteries(books.map(({ _version_, title, edition_count }) => {

                    // console.log( _version_, title,edition_count);
                    return { _version_, title, edition_count };
                }))
                // console.log(result);
        }
        const handelChange = (e) => {
            setQuery(e.target.value);
        }
        const handelSubmit = (e) => {
            // console.log("req.sent");
            e.preventDefault();
            getBooks(query);
        }
        const handelClick = () => {
            navigate('/');
        }
        return ( <
            >
            <
            div className = 'form' >
            <
            form onSubmit = { handelSubmit } >
            <
            input id = 'bookid'
            className = 'bookName'
            placeholder = 'Enter the book name'
            onChange = { handelChange }
            /> <
            button type = 'submit' > Search < /button> <
            /form> <
            button className = 'bookshelf-btn'
            onClick = { handelClick } > BookShelf < /button> <
            /div>

            <
            div className = 'books' > {
                spinnerValue ? ( <
                    div className = "loader" > < /div>
                ) : (
                        bookEntries && bookEntries.map((book) => {
                            return ( < Card key = { book._version_ }
                                id = { book._version_ }
                                title = { book.title }
                                edition_count = { book.edition_count } > < /Card>);
                            }))
                    } <
                    /div> <
                    />

            )
        }

        export default SearchPage