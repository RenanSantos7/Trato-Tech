import {createBrowserRouter} from 'react-router-dom'
import Base from './pages/Base'
import Home from './pages/Home/Home'
import Erro404 from './pages/Erro404/Erro404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '*',
        element: <Erro404 />
      }
    ]  
  }
])

export default router