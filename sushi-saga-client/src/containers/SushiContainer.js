import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
          {props.sushiData.slice(props.index, props.index + 4).map(sushi => <Sushi sushiEaten={props.sushiEaten} eatASushi={props.eatASushi} key={sushi.id} sushi={sushi}/>) } 
        <MoreButton  index={props.index}  gimmeFourMore={props.gimmeFourMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer