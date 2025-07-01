import { useState } from "react";
import { AddCategory, GidGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory) ) return; 
    //categories.push(newCategory);
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>

      <h1>GifExpertApp</h1>


      <AddCategory 
        //setCategories={setCategories}
        onNewCategory = {(value) => onAddCategory(value)}
      />


        {
          categories.map( ( category ) =>  ( <GidGrid key={ category } category={ category }/> ))
        }

    </>
  );
};
