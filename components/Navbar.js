import Link from "next/link";
import styles from './navbar.module.css'
export default function Navbar() {
    return (
     
     
     <div className={styles.container}>
       <div><Link href="/"> Ecommerce </Link></div>
     <ul className={styles.ul}>
        <Link href="/">home </Link>
        <Link href="/products">Products</Link>
        <Link href="/about">about </Link>
        <Link href="/contact">contact </Link>
     </ul>
     </div>
     
  
    
     
    )
  }
  