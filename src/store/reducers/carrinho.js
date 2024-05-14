import { createSlice } from '@reduxjs/toolkit'

const carrinhoSlice = createSlice({
	name: 'carrinho',
	initialState: [],
	reducers: {
		mudarCarrinho: (state, { payload }) => {
			const existeItem = state.some(item => item.id === payload)
			if (!existeItem) {
				return [...state, { id: payload, qtd: 1 }]
			}
			return state.filter(item => item.id !== payload)
		},
	},
})

export const { mudarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice
