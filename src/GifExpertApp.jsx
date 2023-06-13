import { useState } from "react";
import {AddCategory} from "./components";
import { GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Sky"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={(event) => onAddCategory(event)}
      />

      {
        categories.map((category) => (
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }   
    </>
  );
};

