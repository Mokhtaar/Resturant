import React from 'react'
import { Image } from 'react-bootstrap'
import pizza from '../Assets/pizza.png'

type Props = {}

const Images = (props: Props) => {
  return (
  <div className="BGcolor d-flex align-items-center justify-content-center" >
      <h1 className="tleft text-left fw-bold" style={{color: "white"}}>Enjoy your <br/> delicious <span style={{color: "#ff9200"}}>food</span></h1>
    <Image src={pizza}  height={250}/>
</div>
  )
}

export default Images