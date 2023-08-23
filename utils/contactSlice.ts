import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { Person } from "./types"



interface PersonState{
    persons:Person[]
}

const initialState:PersonState={
    persons:[]
}

export const PersonSlice = createSlice({
    name:"person",
    initialState,
    reducers:{
        addPerson:(state,action:PayloadAction<{firstName:string,lastName:string,status:string}>)=>{
            state.persons.push({
                id:state.persons.length,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                status:action.payload.status
            })
        },
        deletePerson:(state,action:PayloadAction<{id:number}>)=>{
           state.persons=state.persons.filter((person)=>person.id!==action.payload.id)
        },
        updatePersonDetail:(state,action:PayloadAction<Person>)=>{
            const {firstName,id,status,lastName} = action.payload
            const neededPerson = state.persons[id]
            const updatedPerson = {...neededPerson,firstName,id,status,lastName}
            state.persons[id] = updatedPerson
        }
    }
})

export default PersonSlice.reducer

export const {addPerson,deletePerson,updatePersonDetail} = PersonSlice.actions