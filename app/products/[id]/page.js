import Link from "next/link"
export async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const repo = await res.json()
    return repo
}




export default async function Details({ params }) {
    const product = await getData(params.id)
    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-6 m-auto text-center' >
                    <p>Details product {product.title}</p>
                    <div className="card my-4 widthimge col-lg-12 " >
                        <img src={product.thumbnail} className="" alt="..." />
                        <div className="card-body">
                            <span className="card-title">name : {product.title}</span>
                            <p className="card-text"> Des: {product.description}</p>
                            <p className="card-text"> price : ${product.price}</p>
                            <p className="">rating : {product.rating}</p>
                            <Link href={`/products/${product.id}`} className="btn btn-danger">add Cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    {
                        product.images.map(img => (
                            <div className="card my-4  col-md-6 col-sm-12 widthimge  " >
                                <img src={img} className="w-100%" alt="..." />

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>



    )




}