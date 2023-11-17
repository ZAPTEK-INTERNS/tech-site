import { useRouter } from 'next/router';
import { ShopDB } from "../../components/shop/ShopDB";
import Image from 'next/image';
import CartCard from '../../components/shop/CartCard';
import Head from 'next/head';
import { Navbar } from '../../components/links';

const ShopDetails = () => {
  const router = useRouter();
  const shopId = router.query.id;
  const shop = ShopDB.find((shop) => shop.url === shopId);

  if (!shop) {
    return (
      <>
        <Navbar />
        <div>Loading...</div>
      </>
    );
  }

  // Getting three items from the ShopDB
  const numberOfQuotes = 3
  function randomize() {
    const quoteIndices = []
    const indices = Array.from({length: Object.keys(ShopDB).length}, (a,i) => i) // Make array of indices
    for (let i = 0; i < numberOfQuotes; i++){
      let randomNumber = Math.floor(Math.random() * indices.length);
      quoteIndices.push(...indices.splice(randomNumber, 1))
    }
    return quoteIndices.map(index => ShopDB[index])
  }
  //console.log(randomize())

  return (
    <div>
      <Head> <title>{shop.name} - Tech</title> </Head>

      <Navbar />

      <section className="grid w-full grid-cols-6 gap-8 px-4 md:px-[170px] py-16 md:pt-[100px] md:pb-[10px]">
        <div className="col-span-6 space-y-6 md:col-span-3">
          <div className='w-full rounded-xl h-[430px] overflow-hidden'>
            <Image src={shop.image} className='transition-transform duration-200 ease-linear scale-125 cursor-pointer rounded-xl hover:scale-150' />
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className='col-span-3 rounded-xl h-[200px] overflow-hidden'>
              <Image src={shop.allImage[0]} className='transition-transform duration-200 ease-linear scale-105 cursor-pointer rounded-xl hover:scale-125' />
            </div>
            <div className='col-span-3 rounded-xl h-[200px] overflow-hidden'>
              <Image src={shop.allImage[1]} className='transition-transform duration-200 ease-linear scale-105 cursor-pointer rounded-xl hover:scale-150' />
            </div>
          </div>
          <div className='w-full rounded-xl h-[630px] overflow-hidden'>
            <Image src={shop.allImage[2]} className='transition-transform duration-200 ease-linear cursor-pointer rounded-xl hover:scale-125' />
          </div>
        </div>
        <div className="sticky w-full col-span-6 md:col-span-3 h-fit top-8">
            <h2 className="text-4xl font-bold md:text-6xl">{shop.name}</h2>
            <br /><br />
            <div className='space-y-3'>
              <p className='font-semibold'>Price</p>
              <p className='text-2xl font-bold md:text-4xl'>$ {shop.price} USD</p>
            </div>
            <br /><br />
            <div className='space-y-3'>
              <p className='font-semibold'>Item Description</p>
              <p className='opacity-75 '>{shop.description}</p>
            </div>
            <br /><br />
            <div className='flex space-x-10'>
              <div className="w-16 pb-4 border-b-[1px] border-purple-600">
                <input type="number" name="quantity" id="quantity"  min={1} placeholder={1} className='w-full p-1 active:border-none focus:outline-none active:outline-none focus:border-none' />
              </div>
              <button  className='inline-flex items-center py-1 px-4 bg-[#8000ff] rounded-full text-white text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-white hover:text-black space-x-8'>Add to Cart</button>
            </div>
        </div>
      </section>

      <section className='grid w-full grid-cols-6 gap-8 px-4 md:px-[170px] py-16 md:pt-[100px] md:pb-[10px]'>
        <div className="col-span-6 space-y-6 md:col-span-3">
          <h2 className="text-2xl font-bold md:text-4xl">Key Features</h2>
          <br />
          <ul className='list-disc'>
           {shop.keyFeatures.map((shp) => (
             <li className="font-semibold text-[#1a0533]/60 my-2">
              <span className="text-bold">{shp}</span>
             </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 space-y-6 md:col-span-3">
          <div className='h-[600px] overflow-hidden rounded-xl'>
            <Image src={shop.allImage[3]} className='transition-transform duration-200 ease-linear scale-125 cursor-pointer rounded-xl hover:scale-150' />
          </div>  
        </div>
      </section>
      
      <section>
        <h2 className="text-4xl font-bold md:text-6xl px-4 md:px-[170px] mt-20">Related Products</h2>
        <div className='md:grid grid-cols-3 space-y-12 md:space-y-12 md:space-x-10 pt-16 md:pt-[100px] px-4 md:px-[170px] mb-20'>
          {
            randomize().map((inobj, key) => (
              <CartCard
                CartKey={key}
                CartImg={inobj.image}
                ShopLink={inobj.url}
                CategoryLink={inobj.tag}
                CartTag={inobj.tag}
                CartTitle={inobj.name}
                CartPrice={inobj.price}
              />    
            ))
          }
        </div>
      </section>

    </div>
  )
}

export default ShopDetails




