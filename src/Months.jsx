const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthList() {
  return (
    <>
      <h1>Updated month list</h1>
      {months.map((month, index) => (
        <li key={index}>{month}</li>
      ))}
    </>
  );
}
