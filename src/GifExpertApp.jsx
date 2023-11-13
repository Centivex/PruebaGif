import { useState } from "react";
import {AddCategory, GifGrid} from "./Components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Digimon"]);

  const agregar = (inputValue) => {
    if (categories.includes(inputValue)) return;
    setCategories([inputValue, ...categories]);
  };

  return (
    <>
      <AddCategory agregar={agregar}></AddCategory>

      {
      categories.map((category) => (
          <GifGrid key={category} category={category} />
      )
      )
      }
    </>
  );
};

export default GifExpertApp;
