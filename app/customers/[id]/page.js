

const getCustomerId = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/customers/${id}`, {
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


const CustomerDetails = async ({params}) => {
    const { id } = params;
    const { customer } = await getCustomerId(id);
    const { company, firstname, lastname, addressLineOne, addressLineTwo, city ,  state, zip,  socialSecurity, price} = customer;
   


   
    return (
        <div className="flex flex-col gap-8 pl-[6rem] py-11">
            <div>
                <h1 className="text-[3rem] text-green-900">Company: {company} </h1>
            </div>
            <div className="flex flex-col gap-9 text-lg ">
            <h1>Point of Contact: {firstname} {lastname} </h1>
            <h1>Address: {addressLineOne} {addressLineTwo}</h1>
            <h1>City: {city}</h1>
            <h1>State: {state}</h1>
            <h1>ZipCode: {zip}</h1>

            <h1>Social Security: {socialSecurity}</h1>
            <h1>Salary: {price}</h1>

            </div>


        </div>
    );
};

export default CustomerDetails;
