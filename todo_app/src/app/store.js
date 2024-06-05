import { configureStore } from "@reduxjs/toolkit";

import taskSlice from '../features/todoSlice'


const store = configureStore({
    reducer: {
        tasks: taskSlice
    }
})

export default store