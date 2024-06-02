// Define the Streams type as an enumeration of possible income streams
enum Streams {
  Salary = 'Salary',
  Investment = 'Investment',
  RealEstate = 'RealEstate',
  Business = 'Business'
}

// Use the Streams enum to type the Incomes Record
type Incomes = Record<Streams, number>;

// Example usage of the Incomes type
const monthlyIncomes: Incomes = {
  [Streams.Salary]: 5000,
  [Streams.Investment]: 2000,
  [Streams.RealEstate]: 1500,
  [Streams.Business]: 3000
};

// Function to calculate total income
function calculateTotalIncome(incomes: Incomes): number {
  return Object.values(incomes).reduce((total, income) => total + income, 0);
}

// Calculate and log the total monthly income
const totalMonthlyIncome = calculateTotalIncome(monthlyIncomes);
console.log(`Total Monthly Income: $${totalMonthlyIncome}`);
