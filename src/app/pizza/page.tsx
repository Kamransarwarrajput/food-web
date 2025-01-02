import React from 'react'

const Pizza = () => {
  const burgerData =[
    {id:1, name: 'Sizzling Pizza', price: 599, image: '/p1.jpg'},
    {id:2, name: 'Hot Pizza', price: 700, image: '/p2.jpg'},
    {id:3, name: 'Cheesy Pizza', price: 450, image: '/p3.jpg'},
    {id:4, name: 'Spicy Pizza', price: 399, image: '/p4.jpg'},

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

export default Pizza
