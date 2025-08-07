import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <nav>
            <ul className="navigation clearfix">
                <li><Link href="/"> Home </Link></li>     

                <li><Link href="/about">About Us</Link></li>

                <li><Link href="/services">Services</Link></li>

                <li><Link href="/contact"> Contact </Link></li>     
            </ul>
        </nav>
    )
}
