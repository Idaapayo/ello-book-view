import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

export default function BookSearchListCard({ book, setReadingList }) {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

    const { author, title, coverPhotoURL = "assets/image1.webp" } = book || {}

    // Add books to reading list
    const addBookToReadingList = (book) => {
        setReadingList((prev) => {
            return [...prev, book]
        })
    }
    return (
        <Card
            sx={{
                display: "flex",
                alignItems: isSmallScreen ? "flex-start" : "center",
                height: isSmallScreen ? "auto" : "200px",
                flexDirection: isSmallScreen ? "column" : "row",
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    width: isSmallScreen ? "100%" : 150,
                    borderRadius: "16px",
                }}
                image={require(`../${coverPhotoURL}`)}
                aith={title}
            />
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <CardContent>
                    <Box
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="primaryColors.steelBlue"
                        >
                            {title}
                        </Typography>
                        <Box pt={2}>
                            <Typography
                                variant="p"
                                color="primaryColors.steelBlue"
                            >{`By: ${author}`}</Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => {
                            addBookToReadingList(book)
                        }}
                        variant="contained"
                        color="buttonTurquoise"
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}
