import React, { useState } from "react";

function AddRecipe() {
  let [recipeName, setRecipeName] = useState("");
  let [image, setImage] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [recipeSteps, setRecipeSteps] = useState("");
  
  function saveRecipe() {
    const recipe = {
      title: recipeName,
      img: image,
      ingredients: ingredients.split(","),
      recipe: recipeSteps.split("."),
    };
    console.log(recipe);
  }
  return (
    <div style={{ height: "100%", background: "beige" }}>
      <h1 style={{ margin: 0, padding: 20 }}>Add a Recipe</h1>
      <div style={{ textAlign: "center" }}>
        <p>Enter Recipe Name</p>
        <input value={recipeName} onChange={(event) => setRecipeName(event.target.value)}
          type="text"
        />
        <p>Enter Link to Image</p>
        <input value={image} onChange={(event) => setImage(event.target.value)}
          type="url"
        />
        <p>Enter Ingredients (seperated by commas)</p>
        <textarea
        value={ingredients} onChange={(event) => setIngredients(event.target.value)}
          cols="60"
          rows="10"
        />
        <p>Enter Recipe (seperated by periods)</p>
        <textarea
        value={recipeSteps} onChange={(event) => setRecipeSteps(event.target.value)}
          cols="60"
          rows="10"
        />
        <br />
        <button onClick={saveRecipe}> Save Recipe</button>
      </div>
    </div>
  );
}

export default AddRecipe;