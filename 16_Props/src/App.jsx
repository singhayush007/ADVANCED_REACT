import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import DefaultProps from "./components/DefaultProps";
import Layout from "./components/Layout";
function App() {
  const person = {
    name: "Alex",
    age: 21,
  };

  const fruits = ["Banana", "Apple", "Orange", "Blueberry", "Watermelon"];

  function action() {
    console.log("While clicking a button , i perfrom an action");
  }


  const obj = {
    name: "John",
    age: 22,
  }
  return (
    <div className="layout">
      <Card
        definition={
          "Pops is a property which is share from child compoennt(App.jsx} to parent component{Card.jsx}"
        }
      />
      <Card definition={"I am in an Object form"} />
      <Card definition={"I am an immutable , read only"} />
      <Card
        name={"Ayush Singh"}
        age={22}
        content={<p>I am a Software Enginner</p>}
      />
      <Card data={person} isStudent={true} />
      <Card array={fruits} />
      <Button handleClick={action} />
      <Layout>
      <p>How are you?</p>
      </Layout>

      <DefaultProps text={"hello"}/>
      <DefaultProps {...obj}/>
    </div>
  );
}

export default App;
