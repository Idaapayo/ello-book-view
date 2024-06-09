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
        setFilteredBooks(results.map((result) => result.original))
    }, [results])

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 10,
                textAlign: "center",
                width: "80%",
                marginX: "auto",
            }}
        >
            <Box>
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
                    sx={{
                        width: "100%",
                        // flexGrow: 1,
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderWidth: "2px",
                                borderColor: "#335C6E",
                            },
                            "&:hover fieldset": {
                                borderColor: "#5ACCCC",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#5ACCCC",
                            },
                        },
                    }}
                />
            </Box>
            {searchTerm && (
                <Box
                    sx={{
                        overflowY: "auto",
                        position: "absolute",
                        maxHeight: "300px",
                        backgroundColor: "white",
                        width: "100%",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            <Box p={2}>
                                <BookSearchListCard
                                    book={book}
                                    setReadingList={setReadingList}
                                />
                            </Box>
                        ))
                    ) : (
                        <Box p={2}>
                            <Typography
                                variant="h6"
                                color="primaryColors.steelBlue"
                            >
                                Oops! This book was not found
                            </Typography>
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    )
}
