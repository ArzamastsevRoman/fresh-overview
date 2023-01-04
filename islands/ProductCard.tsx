import { useState } from 'preact/hooks';
import { IProduct } from "../utils/types.ts";

interface ProductCardProps {
    product: IProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    const [details, setDetails] = useState(false)
    const toggle = () => setDetails(prev => !prev)

    return <div class='border rounded px-4 py-2 mb-2 flex flex-col justify-center items-center'>
        <img src={product.image} alt={product.title} class="w-1/6" />
        <h2 class="font-bold text-lg">{product.title}</h2>
        <p>${product.price}</p>
        <a href={`/product/${product.id}`}>Open</a>

        <button onClick={toggle}>toggle description</button>
        {details && <p>{product.description}</p>}
    </div>
}