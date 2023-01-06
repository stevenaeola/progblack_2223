const endpointRoot = 'http://127.0.0.1:8090/';

async function listRecipes () {
    const recipeResponse = await fetch(endpointRoot + 'recipes');
    const recipeKeysText = await recipeResponse.text();
    const recipeKeys = JSON.parse(recipeKeysText);
    const recipeListElt = document.getElementById('recipeList');
    let list = '';
    for (const recipeKey of recipeKeys) {
        list += `<li class='recipe_list_item'>${recipeKey}</li>`;
    }
    recipeListElt.innerHTML = list;
    const listItems = document.querySelectorAll('.recipe_list_item');
    for (const listItem of listItems) {
        listItem.addEventListener('click', (event) => loadRecipe(event.target.textContent));
    }
}

async function loadRecipe (recipeKey) {
    const recipeResponse = await fetch(`http://127.0.0.1:8090/recipe/${recipeKey}`);
    const recipeContent = await recipeResponse.text();
    document.getElementById('recipe_results').innerHTML = recipeContent;
}

async function addRecipes () {
const recipeForm = document.getElementById('recipe-submit');
recipeForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    const data = new FormData(recipeForm);
/* conversion from FormData to JSON at https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json */
    const dataJSON = JSON.stringify(Object.fromEntries(data));
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(endpointRoot + 'recipe/new',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: dataJSON
    });
    listRecipes();
    recipeForm.reset();
});
}

document.addEventListener('DOMContentLoaded', listRecipes);
document.addEventListener('DOMContentLoaded', addRecipes);
