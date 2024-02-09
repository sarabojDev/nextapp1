import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div>
            <ul className='flex  gap-2 w-full  '>
                <li>
                    <Link href={"/"} >Homefff</Link>
                    
                </li>
                <li>
                <Link href={"/youtube"} >Yuot</Link>
                </li>
                <li>
                <Link href={"/users"} >User</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar