// "use client"
import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';

export async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    const repo = await res.json()
    return repo
}

async function Products() {
    const data = await getData()
    const products = data.products
    return (
  
        <div className="container">
            <div className='row'>
                {
                    products.map(product => (
                        
                        <div className='col-lg-4 col-md-6 col-sm-12' key={product.id} >

                            <div className={styles.widthbox}>
                                <img src={product.thumbnail} className={styles.widthimge} alt="..." />
                                <div className="card-body my-4">
                                    <h6 className="card-title">{product.title}</h6>
                                    <p className={styles.p}>${product.price}</p>
                                </div>
                                <Link href={`/products/${product.id}`} className="btn btn-primary">show details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}

export default Products;
