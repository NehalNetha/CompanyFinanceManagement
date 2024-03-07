
import Link from "next/link";

const getCustomers = async () => {
    try{
        const res = await  fetch("http://localhost:3000/api/customers", {
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
    const{ customers} = await getCustomers()

    return (

        <>

            <h1 className="text-2xl text-green-900 px-11 m-5">Customers</h1>
            <div className="border-2 border- to-black">

            {customers.map((em) => (
                 <div key={em._id} className='py-4 px-11 flex flex-col '>
                    <Link href={`/createInvoice/${em._id}`} className=" px-5 py-4 bg-blue-500 text-white w-[11rem] rounded-lg">
                         {em.company} 
                    </Link>
                 </div>
            ))}
            </div>
           
        </>
    )
}
