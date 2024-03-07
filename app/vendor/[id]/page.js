

const getVendorById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/vendors/${id}`, {
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


const EmployeeDetails = async ({params}) => {
    const { id } = params;
    const { topic } = await getVendorById(id);
    const { company, equipment, price, addressLine, city, state, zip} = topic;
   


   
    return (
        <div className="flex flex-col gap-8 pl-[6rem] py-11">
            <div>
                <h1 className="text-[3rem] text-green-900">Company: {company}</h1>
            </div>
            <div className="flex flex-col gap-9 text-lg ">
            <h1>Equipment: {equipment}</h1>

            <h1>Price: {price}</h1>

            <h1>Address: {addressLine} {}</h1>
            <h1>City: {city}</h1>
            <h1>State: {state}</h1>
            <h1>ZipCode: {zip}</h1>

            </div>


        </div>
    );
};

export default EmployeeDetails;
