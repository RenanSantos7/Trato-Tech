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
		mudarQuantidade: (state, { payload }) => {
			const { id, qtd } = payload
			const itemIndex = state.findIndex(item => item.id === id)
			if (itemIndex !== -1) {
				state[itemIndex].qtd = qtd
			}
		},
	},
})

export const { mudarCarrinho, mudarQuantidade } = carrinhoSlice.actions

export default carrinhoSlice
