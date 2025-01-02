"use client"
import React from "react";
import Link from "next/link";
import{useRouter} from "next/navigation"
const HomeContent = () => {
  const router = useRouter();
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: "url(bg-image.jpg)" }}
      >
        <div className="response-div">
          <h1 className="fade-in">Delicious Food</h1>
          <p>Fuel Your Soul with Every Bite!</p>
          <button className="navigate-btn" onClick={()=>router.push("/burgers")}>Order now</button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
