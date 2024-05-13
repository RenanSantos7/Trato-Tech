import { createSlice } from '@reduxjs/toolkit'
import orgProdutos from '../mock/produtos'

const produtosSlice = createSlice({
	name: 'produtos',
	initialState: orgProdutos,
	reducers: {
		mudarFavorito: (state, { payload }) => {
			state = state.map(item => {
				if (item.id === payload) {
					item.favorito = !item.favorito
				}
				return item
			})
		},
	},
})

export const { mudarFavorito } = produtosSlice.actions

export default produtosSlice
