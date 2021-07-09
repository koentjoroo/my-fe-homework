const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Jane", age: 20 }
];

const renderTableRow = (table, items) => {
  items.forEach(({ name, age }) => {
    const newRow = `<td>${name}</td><td>${age}</td>`;
    table.insertRow().innerHTML = newRow;
  });
};

// Function to calculate average ages
const calcAvgAge = (ages) => {
  let total = ages.reduce((acc, age) => acc + age);
  return total / ages.length;
};

// Function to handle calculate average button
const handleCalcAvg = () => {
  const ages = students.map((student) => student.age);
  const avgAge = calcAvgAge(ages);
  const text = `Average students age is ${avgAge}`;
  document.querySelector("span#avg-age-result").innerText = text;
};

// Add event listener to the button when it's clicked
document.querySelector("button#calc-avg-age").addEventListener("click", handleCalcAvg);

// Call the renderTableRow() function
renderTableRow(document.querySelector("table#students"), students);
