import Link from "next/link";
import React from "react";


export default function Home (){
  return(
    <div>
      <header>
        CPRG 306: Web Development 2 - Assignments
      </header>
      <p><Link href = "http://localhost:3000/week-2">Week 2 Assignment</Link></p>
      <p><Link href = "http://localhost:3000/week-3">Week 3 Assignment</Link></p>
    </div>
  );


}
