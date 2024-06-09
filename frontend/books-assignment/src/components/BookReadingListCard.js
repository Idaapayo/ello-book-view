import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export default function BookReadingListCard({
    book,
    cardHeight = 140,
    setReadingList,
}) {
    const { author, title, coverPhotoURL = "assets/image1.webp" } = book || {}

    // Remove books from reading list
    const removeBooksFromReadingList = (book) => {
        setReadingList((prev) => {
            return prev.filter((prevBook) => prevBook.title !== book.title)
        })
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={title}
                height={cardHeight}
                image={require(`../${coverPhotoURL}`)}
            />
            <CardContent>
                <Typography variant="h5" color="primaryColors.steelBlue">
                    {title}
                </Typography>
                <Box pt={2}>
                    <Typography
                        variant="bod1"
                        color="primaryColors.steelBlue"
                    >{`By: ${author}`}</Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "right",
                        width: "100%",
                        paddingBottom: "5px",
                    }}
                >
                    <Button
                        onClick={() => {
                            removeBooksFromReadingList(book)
                        }}
                        variant="contained"
                        color="buttonOrangeRed"
                        startIcon={<DeleteIcon />}
                    >
                        Remove
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}
