import { Grid, Typography } from "@mui/material"
import BookReadingListCard from "../components/BookReadingListCard"

export default function BooksReadingList({
    books,
    readingList,
    setReadingList,
}) {
    return (
        <div className="">
            <Typography variant="h3" m={5}>
                Reading list
            </Typography>
            <Grid container spacing={2} rowSpacing={5}>
                {readingList?.length > 0 &&
                    readingList?.map((book) => (
                        <Grid item xs={12} md={6} lg={4} key={book?.title}>
                            <BookReadingListCard
                                // imageSrc={book.coverPhotoURL}
                                // title={book.title}
                                // author={book.author}
                                book={book}
                                setReadingList={setReadingList}
                            />
                        </Grid>
                    ))}
            </Grid>
            {readingList.length === 0 && (
                <Typography variant="h6" color="primaryColors.steelBlue">
                    Please search for your favorite book and add them to the
                    reading list
                </Typography>
            )}
        </div>
    )
}
