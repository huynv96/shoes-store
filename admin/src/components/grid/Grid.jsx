import React from 'react'
import PropTypes from 'prop-types'
import './grid.css'
const Grid = props => {
    return (
        <div className={`grid ${props.fuild ? 'wide' : ''}`}>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}
Grid.propTypes = {
    fuild: PropTypes.bool
}
export default Grid
