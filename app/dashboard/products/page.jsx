
import Image from 'next/image';
import Link from 'next/link';

import Tooltip from '../components/Tooltip.jsx';


export default function Products(){
	const productData = [
  {
    image: "https://img01.ztat.net/article/spp-media-p1/6257df3866cd4d9399c6e99119cfdba1/98fd1e20635d49969c634c2cb2127b24.jpg",
    name: "Classic Leather Men's Wallet",
    cost: 25,
    price: 60,
    stock: 150,
    brand: "LeatherCraft",
    supplier: "LuxuryGoodsCo",
    status: "active",
  },
  {
    image: "https://img01.ztat.net/article/spp-media-p1/ad72a1399ee44393b473c2d0b591ef68/f17ee1c7d4724f97996ca9983c271ca4.jpg",
    name: "Digital Gaming Mouse RGB",
    cost: 30,
    price: 75,
    stock: 100,
    brand: "TechMaster",
    supplier: "ElectroGadgetsInc",
    status: "active",
  },
  {
    image: "https://img01.ztat.net/article/spp-media-p1/e155667dce624dc5a9f7ddc2fff06d0b/69b9c513aca641609d10156a596dd698.jpg",
    name: "Fitness Tracker Smartwatch",
    cost: 40,
    price: 90,
    stock: 50,
    brand: "FitTech",
    supplier: "SportsGearHub",
    status: "active",
  },
  {
    image: "https://img01.ztat.net/article/spp-media-p1/6d5f0b00fd6440029fdbe345449fe4a7/923e8a2d505c4012b4ffc3dffd9d0522.jpg?imwidth=1800&filter=packshot",
    name: "Black Fashion hand bag",
    cost: 50,
    price: 120,
    stock: 150,
    brand: "FashionCo",
    supplier: "TrendySuppliers",
    status: "active",
  },
  {
    image: "https://img01.ztat.net/article/spp-media-p1/64c47fdd10e643cf9159fe211803f963/e0043f084a5e4d5b8779cea3354d34f3.jpg?imwidth=1800",
    name: "Air Force with blue shoes Unisex",
    cost: 70,
    price: 150,
    stock: 100,
    brand: "FootwearCorp",
    supplier: "ShoeEmporium",
    status: "active",
  },
  {
    image: "https://img01.ztat.net/article/spp-media-p1/9105abd01d093b6da09376e9476f2880/5dff22d4c7444f5e9a1f7bfac4bf0c92.jpg",
    name: "Pig Head Cool white shoes",
    cost: 60,
    price: 130,
    stock: 0,
    brand: "CoolKicks",
    supplier: "StreetStyleGear",
    status: "inactive",
  },

  {
    image: "ImageURL5",
    name: "Wireless Bluetooth Earbuds",
    cost: "$35",
    price: "$80",
    stock: 120,
    brand: "SoundBeats",
    supplier: "AudioTech",
    status: "active",
  },
 
  {
    image: "https://img01.ztat.net/article/spp-media-p1/3a028a72abe148d6ae0c9ffb86b4ae63/a0ceba803d5846a0b5ad454a8a40091d.jpg",
    name: "Fashionable Women's Sunglasses",
    cost: 20,
    price:50,
    stock: 200,
    brand: "StyleHub",
    supplier: "FashionEmpire",
    status: "active",
  },
  {
    image: "https://img01.ztat.net/article/spp-media-p1/137ce44a99c24e3cb62c0efd4432acb2/b62cbf4dbbd243c5883a227e58b1756e.jpg",
    name: "Computer bag",
    cost: 55,
    price:130,
    stock: 30,
    brand: "AdventureGear",
    supplier: "ExploreOutdoors",
    status: "active",
  },
];

	return (
		<> 
			<main className="flex min-h-screen flex-col items-center justify-between ">
				<div className="flex flex-row justify-between w-full">
					 		
					 		<div className="">
					 			<Tooltip content="create a new product">
					 			<button className="flex flex-row items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-2 py-2 text-white font-bold">
					 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
									  <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
									</svg>
									<span className="">
										NEW PRODUCT
									</span>

					 			</button>
					 			</Tooltip>
					 		</div>
					 		
					 		<div hidden class="md:block">
			            <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
			              <span class="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
			                <svg
			                  xmlns="http://ww50w3.org/2000/svg"
			                  class="w-4 fill-current cursor-pointer"
			                  viewBox="0 0 35.997 36.004"

			                >
			                  <path
			                    id="Icon_awesome-search"
			                    data-name="search"
			                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
			                  ></path>
			                </svg>
			              </span>
			              <input
			                type="search"
			                name="leadingIcon"
			                id="leadingIcon"
			                placeholder="Search product by name or key word"
			                class="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
			              />
			            </div>
		         	 </div>

		         	 <div className="flex flex-row gap-2">
		         	 	
		         	 	<div className="text-sm" id="filter">
		         	 		<div className="flex flex-row gap-1 p-2 hover:text-cyan-400 cursor-pointer rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800">
				         	 			<span className="">
				         	 				Filters
				         	 			</span>
				         	 			
				         	 			{/*{}*/}
				         	 			
				         	 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative top-[1px]">
										  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
										</svg>
				         	 		</div>
				         	 	</div>

				         	 	<div className="hover:text-cyan-400 cursor-pointer">
				         	 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative top-2 ">
									  <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
										</svg>
					         	 	</div>     	 	
		         	 </div>
				</div>
				<TableProduct products={productData}/>
			</main>
		</>
		)
}

const TableProduct = ({products}) => {
	const productData = products;
	return (

			<div class="flex flex-col w-full">
			    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
			            <div class="overflow-hidden">
			                <table class="min-w-full">
			                    <thead class="border-b bg-gray-200 dark:bg-gray-700">
			                        <tr className="">
			                            <th scope="col" class="text-md font-bold text-gray-900 p-2 flex flex-row text-center dark:text-white justify-center">
			                            	<span>
			                            		Name
			                            	</span>
			                            	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
											  <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" clipRule="evenodd" />
											</svg>
			                            </th>
			                            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left dark:text-white">Cost</th>
			                            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left dark:text-white">Price</th>
			                            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left dark:text-white">Stock</th>
			                            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left dark:text-white">Brand</th>
			                            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left dark:text-white">Supplier</th>
			                            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left dark:text-white">Status</th>
			                            <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left dark:text-white">Actions</th>
			                        </tr>
			                    </thead>
			                    <tbody className="">
			                    	{
			                    		productData.map((products,idx) => (<ProductTableRow image={products.image} name={products.name} cost={products.cost} price={products.price} stock={products.stock} brand={products.brand} supplier={products.supplier} status={products.status} key={idx}/>)
			                    		)
			                    	}
			                    </tbody>
			                </table>
			            </div>
			        </div>
			    </div>
			</div>
		)
}

const ProductTableRow = ({image,name,cost,price,stock,brand,supplier,status}) => {
	return (
		 	<tr class="border-b cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white flex flex-row overflow-hidden justify-between items-center text-center z-0">
                    	   <div style={{ width: '60px', height: '60px', position: 'relative', overflow: 'hidden' }}  className="z-0">
										      <img
										        src={image}
										        alt="Cropped Image"
										        layout="fill"
										        className="relative bottom-[20px] z-0"
										        objectFit="cover"
										        objectPosition="center"
										      />
										    </div>
										    <p className="font-bold flex justify-left items-left text-left max">
										    	<span>
										    	{name.substring(0, 20) + "..."}
										    	</span>
										    </p> </td>
                    <td class="text-sm text-gray-900 font-bold px-3 py-1 whitespace-nowrap dark:text-white">$ {cost}</td>
                    <td class="text-sm font-bold text-gray-900 px-3 py-1 whitespace-nowrap dark:text-white">$ {price}</td>
                    <td class="text-sm font-bold text-gray-900  px-3 py-1 whitespace-nowrap dark:text-white">{stock}</td>
                    <td class="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap dark:text-white">{brand}</td>
                    <td class="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap dark:text-white">{supplier}</td>
                    <td class="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap dark:text-white">{status}</td>
                    <td class="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap dark:text-white flex flex-wrap justify-center items-center">
                    	 <Link href="#" className="text-indigo-600 hover:text-indigo-900 flex justify-center">
		                    	 <Tooltip content="modify">
												        	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
															  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
															</svg>
														</Tooltip>	

									        </Link>

									        <Link href="#" className="ml-2 text-red-600 hover:text-red-900">
									        	<Tooltip content="delete" >

										        	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
													  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
													</svg>

														</Tooltip>
									        </Link>
									  </td>
            </tr>
		)
}


// https://www.freecodecamp.org/news/how-to-upload-crop-resize-images-in-the-browser-in-nextjs/