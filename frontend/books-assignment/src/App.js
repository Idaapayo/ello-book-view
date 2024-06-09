import { Container, createTheme, ThemeProvider } from "@mui/material"
import { cacheExchange, createClient, fetchExchange, Provider } from "urql"
import BooksList from "./pages/BooksList"

const { palette } = createTheme()
const { augmentColor } = palette
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } })
const theme = createTheme({
    typography: {
        fontFamily: "Mulish",
    },
    shape: {
        borderRadius: 16,
    },
    palette: {
        primaryColors: {
            steelBlue: "#335C6E",
            turquoise: "#5ACCCC",
            yellow: "#FABD33",
        },
        secondaryColors: {
            turquoiseLight: "#CFFAFF",
            orangeRed: "#F76364",
            teal: "#4AA088",
            yellowDark: "#FAAD00",
            orangePastel: "#FFF6DC",
        },
        buttonSteelBlue: createColor("#335C6E"),
        buttonOrangeRed: createColor("#F76364"),
        buttonTurquoise: createColor("#5ACCCC"),
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
