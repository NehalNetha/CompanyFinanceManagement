

const getEmployeeById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/employees/${id}`, {
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
    const { topic } = await getEmployeeById(id);
    const { firstname, lastname, addressLineOne, addressLineTwo, city ,  state, zip,  socialSecurity,numberOfWithholdings, salary} = topic;
   


   
    return (
        <div className="flex flex-col gap-8 pl-[6rem] py-11">
            <div>
                <h1 className="text-[3rem] text-green-900">Employee: {firstname} {lastname}</h1>
            </div>
            <div className="flex flex-col gap-9 text-lg ">
            <h1>Address: {addressLineOne} {addressLineTwo}</h1>
            <h1>City: {city}</h1>
            <h1>State: {state}</h1>
            <h1>ZipCode: {zip}</h1>

            <h1>Social Security: {socialSecurity}</h1>
            <h1>Number of Withholdings: {numberOfWithholdings}</h1>
            <h1>Salary: {salary}</h1>

            </div>


        </div>
    );
};

export default EmployeeDetails;
