import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

export default function BookSearchListCard({ book, setReadingList }) {
    const { author, title, coverPhotoURL = "assets/image1.webp" } = book || {}

    // Add books to reading list
    const addBookToReadingList = (book) => {
        setReadingList((prev) => {
            console.log("the prev", prev)
            return [...prev, book]
        })
    }
    return (
        <Card sx={{ display: "flex", alignItems: "center", height: "200px" }}>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={require(`../${coverPhotoURL}`)}
                aith={title}
            />
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <CardContent>
                    <Typography variant="h6">{title}</Typography>
                    <Box pt={2}>
                        <Typography
                            variant="p"
                            color="primaryColors.steelBlue"
                        >{`By: ${author}`}</Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => {
                            addBookToReadingList(book)
                        }}
                        variant="contained"
                        color="buttonOrangeRed"
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}
