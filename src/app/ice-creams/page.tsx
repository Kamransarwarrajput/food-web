import React from 'react'

const Ice = () => {
  const burgerData =[
    {id:1, name: 'Delightful', price: 599, image: '/ice-1.jpg'},
    {id:2, name: 'Raseberry', price: 700, image: '/ice-2.jpg'},
    {id:3, name: 'Oreo Vanila', price: 450, image: '/ice-3.jpg'},
    {id:4, name: 'Choclate Crunch', price: 399, image: '/ice-4.jpg'},

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

export default Ice
