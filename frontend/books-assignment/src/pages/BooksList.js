import BooksReadingList from "./BooksReadingList"
import { Box } from "@mui/material"
import SearchBar from "../components/SearchBar"
import useGetBooks from "../hooks/useGetBooks"
import { useMemo, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export default function BooksList() {
    const result = useGetBooks()

    const [isInReadingList, setIsInReadingList] = useState(false)
    const [readingList, setReadingList] = useLocalStorage("readingList", [])

    console.log("The reading list", readingList)

    const { data, fetching, error } = result

    const books = useMemo(() => data?.books, [data?.books])
    return (
        <Box pt={10}>
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
    )
}
