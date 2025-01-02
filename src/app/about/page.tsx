"use client"
import React from "react";
import Link from "next/link";
import{useRouter} from "next/navigation"

const About = () => {
  const router = useRouter();
  return (
    <div>
      <section
        className="about"
        style={{ backgroundImage: "url(about-3.jpg)" }}
      >
        <div className="about-content">
          <h1 className="fade-in1">About Us</h1>
          <p>
            Welcome to Foodie Fiesta , your ultimate destination for
            mouthwatering flavors and irresistible cravings! We specialize in
            serving a diverse menu packed with delicious options to satisfy
            every palate. Whether you're in the mood for cheesy, oven-fresh
            pizzas, juicy and flavorful burgers, crispy broasts with a perfect
            crunch, creamy and indulgent ice creams, or refreshing, healthy
            salads, we’ve got you covered. Our mission is to deliver quality
            food made with the freshest ingredients, ensuring every bite is a
            delightful experience. Dine in, take away, or enjoy our speedy
            delivery service straight to your doorstep. At Foodie Fiesta ,
            there's something for everyone – because great food brings people
            together!
          </p>
          <button className="navigate-btn" onClick={()=>router.push("/contact")}>Contact us</button>
        </div>
      </section>
    </div>
  );
};

export default About;
