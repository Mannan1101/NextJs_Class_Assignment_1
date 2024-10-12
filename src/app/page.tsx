
import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <ul className="flex items-center justify-center content-center">
        <Link href="/home">Home     </Link>
        <Link href="/aboutUs">AboutUs     </Link>
        <Link href="/contact">Contact     </Link>
        <Link href="/product">Product     </Link>

      </ul>
    </div>
  )

}
