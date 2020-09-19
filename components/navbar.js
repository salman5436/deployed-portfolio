import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'


export default function Navbar() {
    // useEffect(() => {
    //     document.getElementById("home").style.color="hotpink"
    // }, [])
    
    return (
        <div>
            <Head>
                <title>Salman: Portfolio</title>
            </Head>
            <navbar className="navbar">
                <ul>
                    <li>
                        <Link href="/">
                            <a id="home">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </li>
                </ul>

            </navbar>
        </div>
    )
}