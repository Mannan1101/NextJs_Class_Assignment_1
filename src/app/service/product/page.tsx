import React from 'react'
import Link from 'next/link';

const productpage = () => {
    return (
        <div>
            <h1>Welcome to my product page</h1>
            <ul>
                <Link href="/service">service</Link>
            </ul>
        </div>
    )
}

export default productpage;