/* eslint-disable react/prop-types */

const ExpenseList = ({ expense, onDelete }) => {
  expense.map((expense) => console.log(expense.amount));

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl text-gray-300">
              <th>Category</th>
              <th>Description</th>
              <th>Amount ($)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expense.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>
                  <button
                    className="btn btn-outline btn-secondary"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-xl text-lime-200">
              <td></td>
              <td>Total</td>
              <td>
                ${""}
                {expense.reduce((previous, currentExpense) => {
                  return previous + parseInt(currentExpense.amount);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
