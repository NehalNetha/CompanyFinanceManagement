import CreatePOClient from "@/components/CreatePoClient"
import { get } from "mongoose"



const getVendorbyID = async (id) => {
  try{
      const res = await fetch(`http://localhost:3000/api/createPO/${id}`, {
          cache: "no-store"
      })

      if(!res.ok){
          throw new Error("failed to fetch the vendor")
      }
      return res.json()
  }catch(error){
      console.log("failed to fetch the vendor", error)
  }
}






const createInvoice = async ({params}) => {


    const { id } = params;
    const { topic } = await getVendorbyID(id);
    const { company} = topic;


   
    return (
        <div className="flex flex-col gap-8 pl-[6rem] py-11">
          <h1 className="text-3xl font-semibold text-green-900">Create PO for : {company}</h1>
          <CreatePOClient id={id} vendor ={company}/>
        </div>
    );
};

export default createInvoice;
