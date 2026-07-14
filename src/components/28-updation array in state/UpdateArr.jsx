import { useState } from "react";

const UpdateArr = () => {
  // array in state
  const [fruits, setFruits] = useState(["apple", "banana", "mango"]);

  // array of object
  const [cars, setCars] = useState([
    { id: 101, brand: "toyota", color: "red" },
    { id: 102, brand: "bmw", color: "blue" },
    { id: 103, brand: "alto", color: "white" },
  ]);

//   updation of array of object
const handleAddCar = ()=>{
    setCars([
        ...cars, {id: 104, brand: "suzuki", color: "black"}
    ])
}

  // updation of array
  const handleAddFruit = () => {
    setFruits([...fruits, "graps", "pineapple"]);
  };
  return (
    <>
      <h1>Updation array in state</h1>
      <h2>displaying array</h2>
      {/* displaying array */}
      {fruits.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <button onClick={handleAddFruit}>add fruits</button>
      <h2>displaying array of object</h2>
      {cars.map((item, index) => (
        <h3 key={item.id}>
          car brand is {item.brand} an color is {item.color}
        </h3>
      ))}
      <button onClick={handleAddCar}>add cars</button>
    </>
  );
};

export default UpdateArr;
