import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.gimmeFourMore()}>
            More sushi!
          </button>
}

export default MoreButton