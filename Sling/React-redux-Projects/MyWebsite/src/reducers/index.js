import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from '../features/home/homeSlice';

export default configureStore({
    reducer: homePageSlice,
})