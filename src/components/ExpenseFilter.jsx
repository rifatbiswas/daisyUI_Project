/* eslint-disable react/prop-types */
 const ExpenseFilter = () => {
   const categories = ["Utility", "Gosaries"];

   return (
     <>
       <select className="w-full max-w-xs my-4 select select-bordered" onChange={(e) => oneSelectcategory (e.target.value)}>
        <option value={""}>Show All</option>
        {categories.map((category) => {
           return (
             <option key={category} value={category}>
              {category}
            </option>
           );
        })}
     </select>
    </>
   );
 };

 export default ExpenseFilter;




