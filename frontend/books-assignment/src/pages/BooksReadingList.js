import { Box, Grid, Typography } from "@mui/material"
import BookReadingListCard from "../components/BookReadingListCard"

export default function BooksReadingList({ readingList, setReadingList }) {
    return (
        <Box
            py={5}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid
                container
                spacing={2}
                rowSpacing={5}
                sx={{
                    marginX: "auto",
                }}
            >
                {readingList?.length > 0 ? (
                    readingList?.map((book) => (
                        <Grid item xs={12} md={6} lg={4} key={book?.title}>
                            <BookReadingListCard
                                book={book}
                                setReadingList={setReadingList}
                            />
                        </Grid>
                    ))
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            paddingY: "20px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="primaryColors.steelBlue"
                        >
                            Please search for your favorite book and add them to
                            the reading list
                        </Typography>
                    </Box>
                )}
            </Grid>
        </Box>
    )
}
