import React from 'react'
import Link from "next/link";

const getEmployees = async () => {
    try{
        const res = await  fetch("http://localhost:3000/api/employees", {
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

export default async function PayEmployee() {
    const{ employees} = await getEmployees()

    return (

        <>
            <h1 className="text-2xl text-green-900 px-11 m-5 font-bold">Employees</h1>
            <div className='border-2 border- to-black'>
                {employees.map((em) => (
                        <div key={em._id} className='py-11 px-11 flex flex-col gap-5'>
                        <Link href={`/payEmployee/${em._id}`} className="px-5 py-4 bg-blue-500 text-white w-[15rem] rounded-lg hover:-translate-y-2 transition duration-300">
                                {em.firstname} {em.lastname}
                        </Link>
                        </div>
                ))}
             </div>

        </>
    )
}
