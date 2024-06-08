import { useQuery } from "urql"
import { Grid, Typography } from "@mui/material"
import BooksCard from "../components/BooksCard"

export default function BooksList() {
    const BOOKS_QUERY = `
  {
    books 
    {
    author
    coverPhotoURL
    readingLevel
    title
    }
  }
`
    const [result] = useQuery({
        query: BOOKS_QUERY,
    })
    const { data, fetching, error } = result
    console.log("the query", data)

    return (
        <div className="">
            <Typography variant="h3" m={5}>
                Reading list
            </Typography>
            <Grid container spacing={2} rowSpacing={5}>
                {data?.books &&
                    data?.books.length > 0 &&
                    data.books.map((book) => (
                        <Grid item xs={12} md={6} lg={4} key={book.title}>
                            <BooksCard
                                imageSrc={book.coverPhotoURL}
                                title={book.title}
                                author={book.author}
                            />
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}
