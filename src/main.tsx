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

/*
"@reduxjs/toolkit": "^1.9.5",
    "@types/node": "^20.2.5",
    "@types/react": "^18.2.7",
    "@types/react-dom": "^18.2.4",
    "@types/react-redux": "^7.1.25",
    "@types/react-router-dom": "^5.3.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.7",
    "react-router": "6.11.2",
    "react-router-dom": "^6.11.2",
    "react-scripts": "^5.0.1",
    "redux-first-history": "^5.1.1",
    "redux-saga": "^1.2.3",
    "sass": "^1.63.4",
    "styled-components": "^6.0.0-rc.3",
    "typescript": "^4.9.5"
*/