import React from 'react'

const Burgers = () => {
  const burgerData =[
    {id:1, name: 'Beef Burger', price: 599, image: '/br1.jpg'},
    {id:2, name: 'Chicken Burger', price: 700, image: '/br2.jpg'},
    {id:3, name: 'Prawn Burger', price: 450, image: '/br3.jpg'},
    {id:4, name: 'Spicy Burger', price: 399, image: '/br4.jpg'},

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

export default Burgers
