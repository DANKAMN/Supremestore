import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function CartProduct({ product}) {
    const { setItemQuantity,removeItem } = useShoppingCart()
    return (
        <div className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4 bg-white">
            <Link href={`/products/${product.id}`} className="flex items-center space-x-4 group">
                <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                    <Image 
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{objectFit: 'contain'}}
                    />
                </div>
                <p className="font-semibold text-xl group-hover:underline">
                    {product.name}
                </p>
            </Link>

            <div className="flex items-center">
                <div className="flex items-center space-x-3">
                    <button onClick={() => setItemQuantity(product.id, product.quantity -1)} disabled={product.quantity <= 1 }  className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500">
                        <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
                    </button>
                    <p className="font-semibold text-xl">{product.quantity}</p>
                    <button onClick={() => setItemQuantity(product.id, product.quantity +1)}  className="p-1 rounded-md hover:bg-green-100 hover:text-green-500">
                        <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
                    </button>
                </div>

                <p className="font-semibold text-xl ml-16 ">
                    <XMarkIcon className="hidden w-4 h-4 text-gray-500 sm:inline-block mr-4 mb-1" />
                    {product.formattedPrice}
                </p>

                <button onClick={() => removeItem(product.id)} className="ml-4 hover:text-red-500">
                    <XCircleIcon className="w-6 h-6 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity" />
                </button>
            </div>
        </div>
    )
}