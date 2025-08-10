import { useState } from "react";
import { data } from "./utils/data";
import "./App.css";
import Card from "./components/Card";

function App() {
  console.log(data);

  return (
    <div className="flex overflow-x-auto ">
      {data.map((value, index) => {
        return (
          <div className="p-0.5 w-80 flex-shrink-0">
            <Card title={value.title} imageUrl={value.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
