import {
    Container,
    createTheme,
    ThemeProvider,
    Typography,
} from "@mui/material"
import { cacheExchange, createClient, fetchExchange, Provider } from "urql"
import BooksList from "./pages/BooksList"

const theme = createTheme({
    typography: {
        fontFamily: "Mulish",
    },
    palette: {
        primary: {
            steelBlue: "#335C6E",
            turquoise: "#5ACCCC",
            yellow: "#FABD33",
        },
        secondary: {
            turquoiseLight: "#CFFAFF",
            orangeRed: "#F76364",
            teal: "#4AA088",
            yellowDark: "#",
            light: "#FFB6C1",
        },
    },
})

function App() {
    const client = createClient({
        url: "http://localhost:4000/",
        exchanges: [cacheExchange, fetchExchange],
    })

    return (
        <Provider value={client}>
            <ThemeProvider theme={theme}>
                <Container fixed>
                    <BooksList />
                </Container>
            </ThemeProvider>
        </Provider>
    )
}

export default App
