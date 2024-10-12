import Link from 'next/link';
import React from 'react'

const product = () => {
    return (
        <div>
            <h1>Gentrative AI Services</h1>

            <ul>
                <h3 style={{ backgroundColor: "green" }}><Link href="/product/servise">Click here for servise page</Link></h3>
            </ul>
        </div>
    )
}

export default product;
