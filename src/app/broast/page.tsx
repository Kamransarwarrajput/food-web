import React from 'react'
import Link from "next/link";


const Broast = () => {

  const burgerData =[
    {id:1, name: 'Black Pepper Broast', price: 599, image: '/b1.jpg'},
    {id:2, name: 'Crispy Broast', price: 700, image: '/b2.jpg'},
    {id:3, name: 'Thender Broast', price: 450, image: '/b3.jpg'},
    {id:4, name: 'Spicy Broast', price: 399, image: '/b4.jpg'},

  ]
  return (
    <div>
      <div className='common'>
        {burgerData.map((special) =>(
          <div key={special.id} className="com-card">
            <img src={special.image} alt={special.name} />
            <h3>{special.name}</h3>
            <div className="price">Rs{special.price}</div>
            <button>Order now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Broast
