import { createSlice } from "@reduxjs/toolkit";

interface sidebar{
    isOpen:boolean
}
const initialState:sidebar = {
    isOpen:false
}

 export const SidebarSlice=createSlice({
    name:"modal",
    initialState,
    reducers:{
        openSidebar:(state)=>{
            state.isOpen=true
        },
        closeSidebar:(state)=>{
            state.isOpen=false
        }
    }
})

export default SidebarSlice.reducer

export const {openSidebar,closeSidebar} = SidebarSlice.actions 