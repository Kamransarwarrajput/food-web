import React from 'react'

const Salad = () => {
  const burgerData =[
    {id:1, name: 'Fruit & Veg Salad', price: 599, image: '/s1.jpg'},
    {id:2, name: 'Avacado Salad', price: 700, image: '/s2.jpg'},
    {id:3, name: 'Creamy Chicken Salad', price: 450, image: '/s3.jpg'},
    {id:4, name: 'Cucumber Salad', price: 399, image: '/s4.jpg'},

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

export default Salad
