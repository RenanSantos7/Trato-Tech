import { createSlice } from '@reduxjs/toolkit'
import orgCategorias from '../mock/categorias'

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState: orgCategorias
})

export default categoriasSlice