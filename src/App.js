import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "car Insurance",
      amount: 94.12,
      date: new Date(2020, 7, 12),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 10),
    }
  ];

  return (
    <div className="App">
      
       <Expenses items={expenses}></Expenses>
    </div>
  );

}

export default App;
