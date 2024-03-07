import PayEmployeeClient from "@/components/PayEmployeeClient"




const getEmployeeById = async (id) => {
  try{
      const res = await fetch(`http://localhost:3000/api/payEmployee/${id}`, {
          cache: "no-store"
      })

      if(!res.ok){
          throw new Error("failed to fetch the employee")
      }
      return res.json()
  }catch(error){
      console.log("failed to fetch the employee", error)
  }
}


const addPayEmployee = async ({params}) => {


    const { id } = params;
    const { topic } = await getEmployeeById(id);
    const { firstname, lastname} = topic;

   
    return (
        <div className="flex flex-col gap-8 pl-[6rem] py-11">
          <h1 className="text-3xl font-semibold text-green-900">Paying: {firstname} {lastname}</h1>
          <PayEmployeeClient id={id} 
                              firstname={firstname}
                              lastname={lastname}
                              />
        </div>
    );
};

export default addPayEmployee;
