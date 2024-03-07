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





const CreateInvoiceCleint = (props) => {
    const [quantity, setQuantity] = useState(0)
    const [price_per_unit, SetPricePerUnit] = useState(0.0)
    const [total, setTotal] = useState(0)


    const customer = props.company
    const router = useRouter();

    

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!quantity || !price_per_unit || !total) {
        alert("Fill out all the required fields");
        return;
      }
    
      try {
        // Create Invoice
        const invoiceRes = await fetch(`http://localhost:3000/api/createInvoice`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ customer, quantity, price_per_unit, total }),
        });
    
        if (!invoiceRes.ok) {
          console.log("Error creating an invoice");
          return;
        }
    
        // Update Inventory
        const succInventory = await updateInventory("wood", -(quantity));
        const stringsInventory = await updateInventory("strings", -quantity)
        const holdersInventory = await updateInventory("holders", -quantity)
        const capo = await updateInventory("capo", -quantity)
        const bags = await updateInventory("bags", -quantity)
        const picks = await updateInventory("picks", -(quantity))
        const metal = await updateInventory("metal", -(quantity))
        const tuners = await updateInventory("tuners", -quantity)
        
        if(succInventory || stringsInventory || holdersInventory || capo || bags || picks || metal || tuners){
          console.log("Inventory updated successfully");
          router.push("/viewInvoices");

        }else{
          console.log("Error updating inventory");
        }
    
        // Redirect to viewInvoices page
      } catch (error) {
        console.log(error);
      }
    };

    return (
    <div>
        <form className="flex flex-col gap-8 pt-11" onSubmit={handleSubmit}>
            
            <input type='number'
                     placeholder='Quantity' 
                     className='px-8 py-4 w-[400px] border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => setQuantity(e.target.value)}
                     />
            <input type='number'  step="any"
                     placeholder='Price Per Unit'
                     className='px-8 py-4  w-[400px]  border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => SetPricePerUnit(e.target.value)}
  
            />
             <input type='number'  step="any"
                     placeholder='Total'
                     className='px-8 py-4  w-[400px]  border-solid border-2  border-gray-500 rounded-3xl ' 
                     onChange={(e) => setTotal(e.target.value)}
  
             />
  
                 <button type='submit' className='bg-blue-500 px-9 py-4 mt-7 rounded-lg w-[200px] ml-[6rem] text-white'>
                        Create Invoice
                </button>
            </form>
            
  
    </div>

    )


}

export default CreateInvoiceCleint;


