import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

const rootDivElement = document.getElementById('root') as HTMLDivElement
const app = createRoot(rootDivElement)

app.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)
