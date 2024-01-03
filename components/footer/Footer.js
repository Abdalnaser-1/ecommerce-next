import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
    
        <div className={styles.container}> 
        <h1>Footer all resvesd @  2023 her</h1>
        <div className={styles.sochel}>
            <Image
              src ="/imges/face.png"
              width={20}
              height={20}
              className={styles.icon}
              alt ="aaaaaaaaaaa"
            />
            <Image
              src ="/imges/twit.png"
              width={20}
              height={20}
              className={styles.icon}
              alt ="aaaaaaaaaaa"
            />
              <Image
              src ="/imges/tele.jpg"
              width={20}
              height={20}
              className={styles.icon}
              alt ="aaaaaaaaaaa"
            />
            
        
      
        </div>
        </div>
  
  
      </>
     
     
   
     
    
     
    )
  }
  