import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import Link from "next/link"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-4 small:py-24">
      <div className="flex flex-col items-start mb-8">
        <Text className="txt-xlarge font-bold mb-4">{collection.title}</Text>

      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-24 md:gap-y-12">
        {products.map((product) => (
          <li key={product.id} className="flex justify-center">
            <ProductPreview
              productPreview={product}
              region={region}
              isFeatured
            />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col items-center mb-8">
        <Link
          href={`/collections/${collection.handle}`}
          className=" mt-3 bg-[#f7941d] text-white px-6 py-3 rounded-sm hover:bg-[#e6831d] transition duration-300 ease-in-out"
        >
          View all Products
        </Link>
      </div>
    </div>
  )
}
