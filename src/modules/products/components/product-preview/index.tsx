import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import Image from "next/image"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      style={{width: "100%"}}
      className="group block bg-white  shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 max-h-[300px]"
    >
      <div data-testid="product-wrapper" className="flex flex-col h-full">
        <img
          src={productPreview.thumbnail ?? ""}
          alt={`Image of ${productPreview.title}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <Text className="text-ui-fg-subtle text-lg font-medium mb-2" data-testid="product-title">
            {productPreview.title}
          </Text>
          <div className="flex justify-between items-center mt-3">
            {cheapestPrice && (
              <div className="text-ui-fg-subtle text-sm">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>


  )
}
