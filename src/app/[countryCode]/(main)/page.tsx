import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import TopBar from "@modules/layout/components/TopBar"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>


      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
          <div className="p-4 md:p-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="md:col-span-2 bg-gray-300 rounded-lg overflow-hidden"
                style={{
                  height: "100%", width: "100%", maxHeight: "420px",
                  backgroundImage: "url(https://mzmarts.com/cdn/shop/files/custom_resized_e689798c-e580-4c56-89ed-7c260c79db12_1400x.jpg?v=1706632124)",
                }}>
              </div>

              <div className="space-y-4 md:col-span-1"  >
                <div className="bg-gray-300 rounded-lg overflow-hidden" style={{ maxHeight: "200px" }}>
                  <img src="https://mzmarts.com/cdn/shop/files/Untitled-705_750x800_crop_center.jpg"
                    style={{ height: "100%", width: "100%" }} alt="Placeholder Top" className="w-full h-auto object-cover" />
                </div>
                <div className="bg-gray-300 rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/300" style={{ height: "200px" }} alt="Placeholder Bottom" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  )
}
