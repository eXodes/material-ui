import { StrictMode } from 'react'
import { render } from 'react-dom'
import '@/index.css'
import App from '@/App'
import { CssBaseline } from "@material-ui/core"

if (process.env.NODE_ENV !== "production") {
  import("@axe-core/react").then((axe) => axe.default(import("react"), import("react-dom"), 1000));
}

render(
  <StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </StrictMode>,
  document.getElementById('root')
)
