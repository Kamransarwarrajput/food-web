import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className='logo'>
      <img src="logo5.png" alt="image" />

      </div>

    {/* <h1 className="logo"> Foodie Fiesta
    </h1> */}
    <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/burgers">Burgers</Link>
        <Link href="/pizza">Pizza</Link>
        <Link href="/broast">Broast</Link>
        <Link href="/salad">Salad</Link>
        <Link href="/ice-creams">Ice creams</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact us</Link>


    </nav>
</header>

  )
}

export default Header
