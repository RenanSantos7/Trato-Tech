import {createBrowserRouter} from 'react-router-dom'
import Base from './pages/Base'
import Home from './pages/Home/Home'
import Erro404 from './pages/Erro404/Erro404'
import PagCategoria from './pages/PagCategoria/PagCategoria'
import PagProduto from './pages/PagProduto/PagProduto'

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
        path: '/categoria/:nomeCategoria',
        element: <PagCategoria />
      },
      {
        path: '/produto/:id',
        element: <PagProduto />
      },
      {
        path: '*',
        element: <Erro404 />
      },
    ]  
  }
])

export default router