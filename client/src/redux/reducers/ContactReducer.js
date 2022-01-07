import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes"


const initalState={
    contacts:[],
    contact:{},
    edit: false     
}


const  ContactReducer=(state=initalState, action)=>{

    switch(action.type){
        case GET_CONTACTS: return {...state, contacts: action.payload.contacts}

        case GET_CONTACT: return {...state, contact: action.payload.contacts}

        case TOGGLE_TRUE: return {...state, edit: true }
        case TOGGLE_FALSE: return {...state, edit: false }

        default:
            return  state
    }
}

export default ContactReducer