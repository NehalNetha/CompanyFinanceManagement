

import Link from "next/link";

const getVendors = async () => {
    try{
        const res = await  fetch("http://localhost:3000/api/vendors", {
            cache: "no-store"
        })
        if(!res.ok){
            throw new Error("failed to fetch tops")
        }
        return res.json()
    }catch(error){
        console.log("error loading topics: ", error)
    }
}

export default async function page() {
    const{ vendors} = await getVendors()

    return (

        <>
            <h1 className="text-2xl text-green-900 px-11 m-5">Vendors</h1>
            <div className="border-2 border- to-black">
                {vendors.map((ven) => (
                    <div key={ven._id} className='py-4 px-11 flex flex-col gap-2'>
                        <Link href={`/createPO/${ven._id}`} className="px-5 py-4 bg-blue-500 text-white w-[15rem] rounded-lg hover:-translate-y-2 transition duration-300">
                            {ven.company} 
                        </Link>
                    </div>

                ))}
            </div>
           
        </>
    )
}
