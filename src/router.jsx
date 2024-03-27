import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />
  },
  {
      path: "/login",
      element: <Login />
  },
  {
      path: "/register",
      element: <Cadastro />
  },
  {
      path: "/forgotpassword",
      element: <RecoverPassword />
  },
  {
      path: "/produtos",
      children: [
          {
              path: '/produtos',
              element: <PaginaProdutos />,
          },
          {
              path: '/produtos/:id',
              element: <ProdutoIndividual />
          }
      ],
  }
])

export default router