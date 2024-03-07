"use client"
import { useRouter } from 'next/navigation'
import {useState} from "react"


const PayEmployeeClient = (props) => 
{

    const [disbursment, setDisbursment] = useState(0)
    const [withholding, setWithholdings] = useState(0)
    const router = useRouter();

    const firstname = props.firstname
    const lastname = props.lastname

    const handleSubmit = async(e) => {
        e.preventDefault();
   
        if(!disbursment || !withholding) {
          alert("fill out all the required fields")
        }
   
        try{
           const res = await fetch(`http://localhost:3000/api/payEmployee`, {
             method: "POST",
             headers: {
               "Content-type": "application/json",
             },
             body: JSON.stringify({firstname, lastname, disbursment, withholding})
           })
   
           if(res.ok){
             router.push("/")
           }else{
             console.log("error paying the employee")
           }
        }catch(error){
         console.log(error);
   
        }
         
     }


  return (
    <div>
        <form className="flex flex-col gap-8 pt-11" onSubmit={handleSubmit}>
            
            <input type='number'
                     placeholder='Salary' 
                     className='px-8 py-4 w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => setDisbursment(e.target.value)}
                     />
              <input type='number' 
                     placeholder='Withholding'
                     className='px-8 py-4  w-[400px]  border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => setWithholdings(e.target.value)}
  
                     />
  
                 <button type='submit' className='bg-blue-500 px-9 py-4 mt-7 rounded-lg w-[200px] ml-[6rem] text-white'>
                        Pay
                </button>
            </form>
            
  
    </div>
  )
}

export default PayEmployeeClient