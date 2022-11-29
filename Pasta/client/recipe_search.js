let search_button = document.getElementById('recipe_search_submit')

/*search_button.addEventListener('click',function(){
    fetch()
})*/

async function loadRecipes(){
    let recipe_content = document.getElementById("recipe_results")
    let recipeResponse = await fetch("http://127.0.0.1:8090/recipes");
    let recipeKeysText = await recipeResponse.text();
    let recipeKeys = JSON.parse(recipeKeysText);
    let recipeListElt = document.getElementById('recipeList');
    let list = "";
    for(let recipeKey of recipeKeys){
        list += `<li class='recipe_list_item'>${recipeKey}</li>`;
    }
    recipeListElt.innerHTML = list;
    listItems = document.querySelectorAll(".recipe_list_item");
    for (let listItem of listItems){
        listItem.addEventListener("click", () => alert("clicked"))
    }
    

}

document.addEventListener("DOMContentLoaded", loadRecipes);