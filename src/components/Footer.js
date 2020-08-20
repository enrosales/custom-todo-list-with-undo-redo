import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterLink from './FilterLink'

export default function Footer({ onClick }) {
    return (
        <div className="task">
            <FilterLink >
                { VisibilityFilters.SHOW_ALL }
            </FilterLink>
            <FilterLink >
            { VisibilityFilters.SHOW_COMPLETED }
            </FilterLink>
            <FilterLink >
            { VisibilityFilters.SHOW_INCOMPLETE }
            </FilterLink>
        </div>
    )
}
