import {configureStore} from '@reduxjs/toolkit'
import { PersonSlice } from './contactSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { ModalSlice } from './modalSlice'
import { SidebarSlice } from './sideBarSlice'
export const store = configureStore({
    reducer:{
        person:PersonSlice.reducer,
        modal:ModalSlice.reducer,
        sidebar:SidebarSlice.reducer
    }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector