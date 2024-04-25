import { Region } from "@medusajs/medusa"
import Image from "next/image"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import Link from "next/link"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return collections.map((collection, index) => (
    <>
      <li key={collection.id}>
        <ProductRail collection={collection} region={region} />
      </li>

      {index ===0 && (
        <div className="flex w-full shadow-sm">

          <div className="w-1/2">
            <img
              src="https://mzmarts.com/cdn/shop/files/Health_and_Beauty-_MZ_Marts_700x.webp?v=1709716105"
              alt="Health and Beauty"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text container */}
          <div className="w-1/2 flex flex-col justify-center  items-center p-8">
            <h2 className="text-1md  mb-4">HEALTH & BEAUTY</h2>
            <p className="text-sm mb-4">For The Pearl Glow</p>
            <Link 
             href={`/collections/${collection.handle}`}
            className="px-6 py-2  border border-transparent text-base font-medium rounded-sm text-black  hover:bg-opacity-80">
              SHOP NOW
            </Link>
          </div>
        </div>
      )}

      {index === 1 && (
         <div className="bg-white text-black flex justify-around py-6 " style={{maxHeight:"300px"}}>
         {/* Delivery Information */}
         <div className="flex flex-col items-center">
           <Image height={100} width={100} src="https://babymori.com/cdn/shop/files/QL_IconsL_Christmas_QL_2_copy_15_8bbfc7c3-c6e6-4408-8e2b-0b727fbebeb4.png?crop=center&v=1673527009&width=200" alt="Delivery Icon" className="mb-2" />
           <p className="text-sm uppercase tracking-wider">Delivery Information</p>
         </div>
   
         {/* Hassle Free UK Returns */}
         <div className="flex flex-col items-center">
           <Image height={100} width={100} src="https://babymori.com/cdn/shop/files/HP-Footer_icons-02.png?crop=center&v=1706256202&width=200" alt="Return Icon" className="mb-2" />
           <p className="text-sm uppercase tracking-wider">Hassle Free  Returns</p>
         </div>
   
         {/* International Shipping */}
         <div className="flex flex-col items-center">
           <Image height={100} width={100} src="https://babymori.com/cdn/shop/files/HP-Footer_icons-01.png?crop=center&v=1706256167&width=200" alt="Shipping Icon" className="mb-2" />
           <p className="text-sm uppercase tracking-wider">International Shipping</p>
         </div>
       </div>
      )}

    </>

  ))
}
