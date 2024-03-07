"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function AddTopics() {

  const [company, setCompany] = useState("")
  const [equipment, setEquipment] = useState("")
  const [price, setPrice] = useState("")
  const [addressLine, setAddressLine] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState(0)

  const router = useRouter();


  const handleSubmit = async(e) => {
     e.preventDefault();

     if(!company || !equipment || !price || !addressLine || !city || !state || !zip ) {
       alert("fill out all the required fields")
     }

     try{
        const res = await fetch("http://localhost:3000/api/vendors", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({company, equipment, price, addressLine, city, state, zip})
        })

        if(res.ok){
          router.push("/viewVendors")
        }else{
          console.log("error adding an vendor")
        }
     }catch(error){
      console.log(error);

     }
      
  }
 



  return (
    <div className='bg-cream h-[100vh]'>
      <h1 className='text-green-900 text-[4rem] pl-[5rem] py-5'> Add Vendor</h1>
        <form className='flex flex-col gap-5 pl-[5rem] pt-4' onSubmit={handleSubmit} >
            <input type='text'
                   placeholder='Company Name' 
                   className='px-8 py-4 w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                   maxlength="40"
                   onChange={(e) => setCompany(e.target.value)}
                   />
            <input type='text' 
                   placeholder='Equipment/Machinery'
                   className='px-8 py-4  w-[400px]  border-solid border-2  border-gray-500 rounded-3xl ' 
                   maxlength="20"
                   onChange={(e) => setEquipment(e.target.value)}

                   />
            <input type="text"
                placeholder='Price' 
                className='px-8 py-4  w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                maxlength="20"
                onChange={(e) => setPrice(e.target.value)}

                />

            <input type='text'
                   placeholder='Address Line' 
                   className='px-8 py-4  w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                   maxlength="70"
                   onChange={(e) => setAddressLine(e.target.value)}

                   />
                <input type='text'
                    placeholder='city' 
                    className='px-8 py-4  w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                    maxlength="70"
                    onChange={(e) => setCity(e.target.value)}

                />
           
          

            <div className='flex flex-row gap-5 '>
              <input placeholder='State'
                     className='px-8 py-4 w-[400px] border-solid border-2  rounded-3xl  border-gray-500'  
                     maxlength="20"
                     onChange={(e) => setState(e.target.value)}

                     />

              <input type='number' 
                     placeholder='Zip code' 
                     className='px-8 py-4 w-[400px] border-solid border-2   rounded-3xl  border-gray-500'
                     onChange={(e) => setZip(e.target.value)}

                     />

            </div>
             
              <button type='submit' className='bg-blue-500 px-9 py-4 rounded-lg w-[200px] ml-[9rem]'>
                  Add Vendor
              </button>
        </form>
    </div>
  )
}
