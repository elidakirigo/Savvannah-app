import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
	reducer: {
		// cart: CartSlice,
		// products: productSlice,
	},
})

export default store
