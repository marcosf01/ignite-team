import { Groups } from "./src/screens/Groups"
import { NewGroup } from "./src/screens/NewGroup"
import theme from "./src/theme"
import { ThemeProvider } from "styled-components/native"


export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <NewGroup />
    </ThemeProvider>
    
  )
}