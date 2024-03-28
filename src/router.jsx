import {createBrowserRouter} from 'react-router-dom'
import Base from './pages/Base'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]  
  }
])

export default router