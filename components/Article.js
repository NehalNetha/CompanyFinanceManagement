import Link from "next/link";

export default function Article() {
  return (
    <div className=''>

        <div className="flex flex-row justify-evenly">

            <div className="flex flex-col gap-8">
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white' href={"/viewEmployees"}>
                        View Employees
                    </Link>
                </div>
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/addEmployees"}>
                        Add Employees
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white' href={"/viewCustomers"}>
                        View Customers
                    </Link>
                </div>
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/addCustomers"}>
                        Add Customers
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white' href={"/viewVendors"}>
                        View Vendors
                    </Link>
                </div>
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/addVendors"}>
                         Add Vendors
                    </Link>
                </div>
            </div>

        </div>

        <div className="flex flex-row gap-3 justify-evenly mt-11">

            <div>
                <div className="py-9">
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/payEmployee"}>
                        Pay Employees
                    </Link>
                </div>
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewPayrolls"}>
                        View Payroll Events
                    </Link>
                </div>
            </div>


            <div>
                <div className="mt-11 ">
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/createInvoice"}>
                        Create Invoice
                    </Link>
                </div>
                <div className="mt-11 ">
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewInvoices"}>
                        View Invoices
                    </Link>
                </div>
            </div>

            <div>
                <div className="mt-11 ">
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/createPO"}>
                        Create PO
                    </Link>
                </div>
                <div className="mt-11 ">
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewPO"}>
                        View PO History
                    </Link>
                </div>
            </div>
           
               
        </div>

        
        <div className="flex flex-row gap-3 justify-center mt-[6rem]">
            <div className="flex flex-col gap-11">
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewExpenseAccounts"}>
                            View Expenses
                    </Link>
                </div> 
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewPaidExpenses"}>
                            View Paid Expenses
                    </Link>
                </div> 
            </div>

            <div className="flex flex-col gap-11">
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewInventory"}>
                            Inventory
                    </Link>
                </div> 
               
            </div>

        </div>

        <div className="flex flex-row gap-11 justify-around mt-[6rem]">
            <div className="flex flex-row gap-11 justify-evenly">
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white mr-11   ' href={"/incomeStatement"}>
                            Income Statement
                    </Link>
                </div> 
                <div>
                    <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ml-11' href={"/balanceSheet"}>
                            Balance Sheet
                    </Link>
                </div> 
            </div>

        </div>


  
       
       
    </div>

  )
}




{/* <div className="py-9">

<div>

</div>
</div>
<div className="flex flex-col">
<div className="py-9">
<Link className='px-6 py-4 rounded-lg bg-blue-500 text-white' href={"/viewCustomers"}>
    View Customers
</Link>

</div>
<div>
<Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/addCustomers"}>
    Add Customers
</Link>
</div>
</div>
<div className="flex flex-col">
<div className="py-9">
<Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/addVendors"}>
    Add Vendor
</Link>
</div>
<div>
<Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewVendors"}>
    View Vendors
</Link>
</div>
</div>
</div>
<div>

<div className="flex flex-col">
<div className="py-9">
<Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/payEmployee"}>
    Pay Employees
</Link>
</div>
<div>
<Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewPayrolls"}>
    View Payroll Events
</Link>
</div>
</div>
</div> */}

{/* <div className="mt-11 ml-[14rem]">
                <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/viewExpenseAccounts"}>
                        View Expenses
                </Link>
        </div>
        </div>  
            <Link className='px-6 py-4 rounded-lg bg-blue-500 text-white ' href={"/incomeStatement"}>
                        Income statement
            </Link>
        </div>   */}