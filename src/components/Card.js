import React, { useState } from 'react'
import './card.css'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
const Card = ({ id, title, edition_count }) => {
    const [addBook, setAddBook] = useState(true);
    const handelAddBook = (e) => {
        console.log(id);
        const book = { name: title, edition: edition_count }
        localStorage.setItem(id, JSON.stringify(book));
        setAddBook(false);
    }
    return ( <
        Box sx = {
            { flexGrow: 1 } } >
        <
        Grid container spacing = {
            { xs: 2, md: 3 } }
        columns = {
            { xs: 4, sm: 8, md: 12 } } >

        <
        Grid xs = { 12 }
        sm = { 4 }
        md = { 4 } >
        <
        div className = 'card'
        key = { id }
        style = {
            { width: "250px", height: "250px" } } >
        <
        div className = 'title' > < span style = {
            { fontWeight: 'bold' } } > Book Title: < /span> {title}</div >
        <
        div className = 'edition' > < span style = {
            { fontWeight: 'bold' } } > Edition Count: < /span> {edition_count}</div > {
            localStorage.getItem(id) ? ('') : ( <
                button className = 'btn'
                onClick = { handelAddBook }
                disabled = {!addBook } > { addBook ? "Add to Bookshelf" : "Done" } < /button>
            )
        } <
        /div> <
        /Grid>

        <
        /Grid> <
        /Box>

    )
}

export default Card