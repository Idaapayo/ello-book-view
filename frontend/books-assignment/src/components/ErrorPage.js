import { Box, Typography } from "@mui/material"

export default function ErrorPage() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <Typography variant="h1" color="secondaryColors.orangeRed">
                OOPS!
            </Typography>
            <Typography variant="h4" color="primaryColors.steelBlue">
                Something went wrong
            </Typography>
        </Box>
    )
}
