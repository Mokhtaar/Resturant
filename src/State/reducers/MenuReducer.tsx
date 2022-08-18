import React from 'react'
import { ItemTypes } from '../../Types'



const menuReducer = (state = [], action: any) =>
{

    switch (action.type)
    {
        case "MENU":
        return action.payload
        default: return state
    }
}

export default menuReducer