import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './reducers/categorias'
import produtosSlice from './reducers/produtos'

const store = configureStore({
    reducer: {
        categorias: categoriasSlice.reducer,
        produtos: produtosSlice.reducer
    }
})

export default store