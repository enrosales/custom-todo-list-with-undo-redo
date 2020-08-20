import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function Undo() {
    const { stepNumber, undoState } = useContext(GlobalContext)
    return (
        <div>
            <button
            disabled={stepNumber === 0 ? true : false}
            onClick={()=> undoState()}
            >Undo</button>
        </div>
    )
}
