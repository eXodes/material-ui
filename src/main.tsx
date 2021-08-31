import { StrictMode } from 'react'
import { render } from 'react-dom'
import '@/index.css'
import App from '@/App'
import { CssBaseline } from "@material-ui/core"

render(
  <StrictMode>
    <CssBaseline>
      <App />      
    </CssBaseline>
  </StrictMode>,
  document.getElementById('root')
)
