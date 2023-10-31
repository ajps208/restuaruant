import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
// api call -createAsyncThunk
export const fetchRestuarant=createAsyncThunk('restuarantSlice/fetchRestuarant',()=>{
    // /api call
   return axios.get('/restaurants.json').then((response)=>response.data.restaurants)
})
const restuarantSlice = createSlice({
    name:"restuarantSlice",
    initialState:{
        loading:false,
        allResturants:[],
        allResturantsContainer:[],
        error:''
    },
    reducers:{
        searchRestuarant:(state,action)=>{
            state.allResturants=state.allResturantsContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestuarant.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestuarant.fulfilled,(state,action)=>{
            state.loading=false
            state.allResturants=action.payload
            state.allResturantsContainer=action.payload
            state.error=""
        })



        builder.addCase(fetchRestuarant.rejected,(state,action)=>{
            state.loading=false
            state.allResturants=[]
            state.error=action.error.message
        })

    }
})
// restuarantSlice.js
export const {searchRestuarant}=restuarantSlice.actions
export default restuarantSlice.reducer;

