import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function Redo() {
    const { stepNumber, redoState, redoLength } = useContext(GlobalContext)
    return (
        <div>
            <button
            disabled={stepNumber === redoLength - 1 ? true : false}
            onClick={()=> redoState()}
            >Redo </button>
        </div>
    )
}
