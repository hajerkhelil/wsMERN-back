
import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE } from "../types/ContactTypes"
import axios from 'axios'
import { TOGGLE_TRUE } from './../types/ContactTypes';
import { Navigate } from 'react-router-dom';


export const  getcontacts=()=> async (dispatch)=>{

    try {
        // hkit maa l back 
        const res= await axios.get('/contacts')
        // ahki maa reducer
        dispatch({type:GET_CONTACTS , payload: res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}


export const addcontact=(newContact, navigate )=> async (dispatch)=>{

    try {
        const res= await axios.post('/contacts', newContact)
        dispatch(getcontacts())
        navigate('/contacts')
    } catch (error) {
        console.log(error)
    }
}

export const deletecontact = (id) => async (dispatch)=>{

    try {
        const res= await axios.delete(`/contacts/${id}`)
        dispatch(getcontacts())
    } catch (error) {
        console.log(error)

    }
}

export const getcontact=(id)=>async(dispatch)=>{

    try {
        const res=await  axios.get(`/contacts/${id}`)
        dispatch({type: GET_CONTACT, payload: res.data})
    } catch (error) {
        console.log(error)
    }
}


export const  toggletrue=()=>{

    return {type: TOGGLE_TRUE}
}

export const  togglefalse=()=>{

    return {type: TOGGLE_FALSE}
}

export const editcontact=(id, updateinfo, Navigate)=> async (dispatch)=>{

    try {
        const res= await axios.put(`/contact/${id}`, updatedinfo)
        dispatch(getcontacts())
        Navigate('/contacts')
    } catch (error) {
        console.log(error)
    }
}
