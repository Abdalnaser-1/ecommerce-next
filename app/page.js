import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/imges/hero.svg'



export default function Home() {
  return (
     <>
    
      <div className={styles.container}> 
        <div className={styles.col}>
          <h1 >Wellcom <span className={styles.colortext}>Ecommerce</span></h1>
          <div className={styles.des}>
            <h3>all needs shopinng find in Ecommerce</h3>
            <p> متعه الستوق عبر موقعنا وكل فروعنا</p>
            <button className="btn btn-danger w-50">معرفة المزيد</button>
          </div>

        </div>
        <div className={styles.col}>
          <Image className={styles.img}
            src ={Hero} alt='hero svg'
          
          />
        </div>
   
      </div>
    </>
 
  )
}
