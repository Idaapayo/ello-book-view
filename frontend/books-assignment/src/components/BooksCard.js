import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    withStyles,
} from "@mui/material"

export default function BooksCard({
    imageSrc,
    author,
    title,
    cardHeight = 140,
}) {
    console.log(imageSrc)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={title}
                height={cardHeight}
                image={require(`../${imageSrc}`)}
            />
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="p">{`By: ${author}`}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {}}>Remove</Button>
            </CardActions>
        </Card>
    )
}
