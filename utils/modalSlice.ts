import { createSlice } from "@reduxjs/toolkit";

interface modal{
    isModalOpen:boolean
}
const initialState:modal = {
    isModalOpen:false
}

 export const ModalSlice=createSlice({
    name:"modal",
    initialState,
    reducers:{
        openModal:(state)=>{
            state.isModalOpen=true
        },
        closeModal:(state)=>{
            state.isModalOpen=false
        }
    }
})

export default ModalSlice.reducer

export const {openModal,closeModal} = ModalSlice.actions 