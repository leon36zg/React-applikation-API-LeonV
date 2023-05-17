import React from "react";




const RecipeCard = ({ recipe }) => {
    
    
    
    
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="window">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="window-img"
            />
            <div className="window-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instruktioner</a> 
            </div>
        </div>
    )
};

export default RecipeCard;  