"use client"
import { useState } from "react"  
import { useRouter } from 'next/navigation'


const updateInventory = async (part, quantity) =>{
  try{
      const res = await fetch("http://localhost:3000/api/inventory", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ part, quantity }),
      });

      if(!res.ok){
        console.log("Error updating inventory")
        return false
      }
      return true

  }catch(error){
    console.log(error)
    return false
  }
}


const CreatePOClient = (props) => {
    const [part, setPart] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price_per_part, SetPricePerPart] = useState(0.0)
    const [total, setTotal] = useState(0)


    const vendor = props.vendor
    const router = useRouter();

    

    const handleSubmit = async(e) => {
        e.preventDefault();
   
        if(!part || !quantity || !price_per_part || !total) {
          alert("fill out all the required fields")
        }
   
        try{
           const res = await fetch(`http://localhost:3000/api/createPO`, {
             method: "POST",
             headers: {
               "Content-type": "application/json",
             },
             body: JSON.stringify({vendor, part, quantity, price_per_part, total})
           })

           if (!res.ok){
            console.log("Error creating an invoice");
            return;
           }
           
           let h;

           switch(part.toLowerCase()){
            case "wood":
              h = await updateInventory("wood", quantity);
              break;

            case "strings":
              h = await updateInventory("strings", quantity);
              break;

            case "holders":
              h = await updateInventory("holders", quantity);
              break;

            case "capo":
              h = await updateInventory("capo", quantity);
              break;

            case "bags":
              h = await updateInventory("bags", quantity);
              break;

            case "picks":
              h = await updateInventory("picks", quantity);
              break;

            case "metal":
              h = await updateInventory("metal", quantity);
              break;

            case "tuners":
              h = await updateInventory("tuners", quantity);
              break;
            default:
              console.log("Invalid part");
              break;

           }

           
           if(h){
             console.log("Inventory updated successfully");
             router.push("/viewPO");
           }else{
             console.log("Error updating inventory");
           }
   
           
        }catch(error){
         console.log(error);
   
        }
     }

    return (
    <div>
        <form className="flex flex-col gap-8 pt-11" onSubmit={handleSubmit}>
            <input type='text'
                     placeholder='Equipment' 
                     className='px-8 py-4 w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => setPart(e.target.value)}
                     />
            <input type='number'
                     placeholder='Quantity' 
                     className='px-8 py-4 w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => setQuantity(e.target.value)}
                     />
            <input type='number'  step="any"
                     placeholder='Price Per Unit'
                     className='px-8 py-4  w-[400px]  border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => SetPricePerPart(e.target.value)}
  
            />
             <input type='number'  step="any"
                     placeholder='Total'
                     className='px-8 py-4  w-[400px]  border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => setTotal(e.target.value)}
  
             />
  
                 <button type='submit' className='bg-blue-500 px-9 py-4 mt-7 rounded-lg w-[200px] ml-[6rem] text-white'>
                        Create PO
                </button>
            </form>
            
  
    </div>

    )


}

export default CreatePOClient;