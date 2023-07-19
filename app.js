const API_KEY = "428b1973e7fc4ff68bb261f3d36325ba";

const content = document.querySelector('.content');

function getRecipes(data) {
    content.innerHTML = "";

    let product = "";
    
    data.map(recipe => {
        //   console.log(recipe)
          return product += `
             <li class="item">
             <img src="${recipe.image}" alt="Recipe Img">
             <h3 class="title">${recipe.title}</h3>
             <p class="desc">
                <strong>Ingredients: </strong>
                ${recipe.extendedIngredients.map(recip => {
                    // console.log(recip.original)
                    return recip.original
                }).join(' ')}
             </p>
             <button class="view">
                <a href="${recipe.sourceUrl}">View Recipe</a>
             </button>
           </li>
          `
       })

       content.innerHTML += product;
}

window.addEventListener('DOMCONTENTLoaded', GetApiData);

async function GetApiData() {
    // console.log("DomContent Loaded");
       const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
       const data = await response.json();
    //    console.log(data.recipes);
       const allData = data.recipes
    //    console.log(allData);
       getRecipes(allData);
}

GetApiData();