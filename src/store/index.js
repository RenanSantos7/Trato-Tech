import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './reducers/categorias'
import produtosSlice from './reducers/produtos'
import carrinhoSlice from './reducers/carrinho'

const store = configureStore({
    reducer: {
        categorias: categoriasSlice.reducer,
        produtos: produtosSlice.reducer,
        carrinho: carrinhoSlice.reducer
    }
})

export default store