import React, { useEffect, useMemo, useState } from "react"
import { Box, TextField, InputAdornment, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import * as fuzzy from "fuzzy"
import BookSearchListCard from "./BookSearchListCard"

export default function SearchBar({ books, readingList, setReadingList }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredBooks, setFilteredBooks] = useState([])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    // Extract titles from reading list
    const readingListTitles = useMemo(
        () => readingList.map((book) => book.title),
        [readingList]
    )

    // Filter out books that are already in the reading list
    const booksToAdd = useMemo(
        () => books?.filter((book) => !readingListTitles.includes(book.title)),
        [books, readingListTitles]
    )

    // Set options to search by book title or author
    const options = useMemo(
        () => ({
            pre: "",
            post: "",
            extract: (book) => `${book.title} ${book.author}`,
        }),
        []
    )

    // Do the search
    const results = useMemo(
        () => fuzzy.filter(searchTerm, booksToAdd, options),
        [booksToAdd, options, searchTerm]
    )

    useEffect(() => {
        // Limit the search results to 10 to prevent a super long search list
        setFilteredBooks(results.map((result) => result.original).slice(0, 10))
    }, [results])

    // Add books to reading list
    const addBookToReadingList = (book) => {
        setReadingList((prev) => {
            console.log("the prev", prev)
            return [...prev, book]
        })
    }

    return (
        <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TextField
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ flexGrow: 1 }}
                />
            </Box>
            <Box py={5} px={5}>
                {filteredBooks.length > 0 &&
                    searchTerm &&
                    filteredBooks.map((book) => (
                        <BookSearchListCard
                            book={book}
                            setReadingList={setReadingList}
                        />
                    ))}
                {filteredBooks.length === 0 && searchTerm && (
                    <Typography variant="h6" color="primaryColors.steelBlue">
                        Oops! This book was not found
                    </Typography>
                )}
            </Box>
        </Box>
    )
}
