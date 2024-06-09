import React from 'react'
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
const BookShelf = () => {
        const data = {...localStorage };
        const bookEntries = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...JSON.parse(value)
        }));
        const navigate = useNavigate();
        const handelClick = () => {
            navigate('/search');
        }
        return ( <
            div >
            <
            div className = 'header' >
            BookShelf <
            span > < button className = 'btn-search'
            onClick = { handelClick } > Search < /button></span >
            <
            /div> <
            div className = 'books' >

            {
                bookEntries.map(book => {
                        return ( < Card id = { book.id }
                            title = { book.name }
                            edition_count = { book.edition }
                            /> )
                        })
                } <
                /div> <
                /div>

            )
        }

        export default BookShelf