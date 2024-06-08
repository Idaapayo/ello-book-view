import { Box, Typography } from "@mui/material"
import SearchBar from "../components/SearchBar"

export default function BooksSearchList({ books }) {
    return (
        <Box>
            <SearchBar books={books} />
        </Box>
    )
}
