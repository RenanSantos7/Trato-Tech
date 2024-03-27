import {createBrowserRouter} from 'react-router-dom'
import Base from './pages/Base'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Base />
  }
])

export default router