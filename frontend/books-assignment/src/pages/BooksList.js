import BooksReadingList from "./BooksReadingList"
import { Box, CircularProgress, Typography } from "@mui/material"
import SearchBar from "../components/SearchBar"
import useGetBooks from "../hooks/useGetBooks"
import { useMemo } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import ErrorPage from "../components/ErrorPage"

export default function BooksList() {
    const result = useGetBooks()

    // Store in localStorage to avoid resetting state on re-render
    const [readingList, setReadingList] = useLocalStorage("readingList", [])

    const { data, fetching, error } = result

    const books = useMemo(() => data?.books, [data?.books])
    return (
        <Box py={10}>
            {fetching === true && <CircularProgress />}
            {error ? (
                <ErrorPage />
            ) : (
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Box py={5} sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h3"
                                color="primaryColors.steelBlue"
                            >
                                Add your favourite books to your reading list
                            </Typography>
                        </Box>
                        <SearchBar
                            books={books}
                            readingList={readingList}
                            setReadingList={setReadingList}
                        />
                        <BooksReadingList
                            books={books}
                            readingList={readingList}
                            setReadingList={setReadingList}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    )
}
