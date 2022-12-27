import { ThemeProvider } from "styled-components"
import UserForm from "./pages/UserForm"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <UserForm />
    </ThemeProvider>
  )
}

export default App
