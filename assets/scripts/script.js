//Global Variables
var drinkList = [];

function callApi() {
    var cocktailName = $('#search-value').val();
    var urlgeo = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName;
    
    
    $.ajax(urlgeo).done(function (response) {
        drinkList = response;
        console.log(drinkList);
        listResults();
    });
}

function listResults() {

    for (x = 0; x < drinkList.drinks.length; x++) {
        var div = document.createElement('div');
        var ingredients = [];

        $('.results-container').append(div);
        $(div).attr('class', 'column');
        $(div).attr('id', 'box' + x);


        var div = document.createElement('div');
        $('#box' + x).append(div);
        $(div).attr('class', 'column is-multiline');
        $(div).attr('id', 'div1'+x);

        var div = document.createElement('div');
        $('#div1'+x).append(div);
        $(div).attr('class', 'column is-one-fifth');
        $(div).attr('id', 'div2'+x);

        var div = document.createElement('div');
        $('#div2'+x).append(div);
        $(div).attr('class', 'card');
        $(div).attr('id', 'div3'+x);

        var div = document.createElement('div');
        $('#div3'+x).append(div);
        $(div).attr('class', 'card-image');
        $(div).attr('id', 'div4'+x);

        var figure = document.createElement('figure');
        $('#div4'+x).append(figure);
        $(div).attr('class', 'image is-4by3');
        $(div).attr('id', 'cocktail-image' + x);

        var image = document.createElement('img');
        $('#cocktail-image' + x).append(image);
        $(image).attr('src', drinkList.drinks[x].strDrinkThumb);

        var div = document.createElement('div');
        $('#div3'+x).append(div);
        $(div).attr('class', 'card-content');
        $(div).attr('id', 'div5'+x);

        var div = document.createElement('div');
        $('#div5'+x).append(div);
        $(div).attr('class', 'media');
        $(div).attr('id', 'div6'+x);

        var div = document.createElement('div');
        $('#div6'+x).append(div);
        $(div).attr('class', 'media-content');
        $(div).attr('id', 'div7'+x);

        var p = document.createElement('p');
        $('#div7'+x).append(p);
        $(p).attr('class', 'title is-4');
        $(p).attr('id', 'cocktail-name' + x);
        $('#cocktail-name' + x).html(drinkList.drinks[x].strDrink);

        var p = document.createElement('p');
        $('#div7'+x).append(p);
        $(p).attr('class', 'subtitle is-6');
        $(p).attr('id', 'category' + x);
        $('#category' + x).html(drinkList.drinks[x].strCategory);

        var div = document.createElement('div');
        $('#div5'+x).append(div);
        $(div).attr('class', 'column');
        $(div).attr('id', 'ingredients' + x);

        var p = document.createElement('p');
        $('#ingredients' + x).append(p);
        $(p).attr('class', 'column is-multiline');
        $(p).attr('id', 'ingredient-tile' + x);
        $('#ingredient-tile' + x).html('Ingredients');

        var ul = document.createElement('ul');
        $('#ingredients' + x).append(ul);
        $(ul).attr('class', 'column is-multiline');
        $(ul).attr('id', 'ingredient-list' + x);

        if (drinkList.drinks[x].strIngredient1 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient1);
        }
        if (drinkList.drinks[x].strIngredient2 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient2);
        }
        if (drinkList.drinks[x].strIngredient3 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient3);
        }
        if (drinkList.drinks[x].strIngredient4 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient4);
        }
        if (drinkList.drinks[x].strIngredient5 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient5);
        }
        if (drinkList.drinks[x].strIngredient6 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient6);
        }
        if (drinkList.drinks[x].strIngredient7 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient7);
        }
        if (drinkList.drinks[x].strIngredient8 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient8);
        }
        if (drinkList.drinks[x].strIngredient9 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient9);
        }
        if (drinkList.drinks[x].strIngredient10 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient10);
        }
        if (drinkList.drinks[x].strIngredient11 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient11);
        }
        if (drinkList.drinks[x].strIngredient12 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient12);
        }
        if (drinkList.drinks[x].strIngredient13 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient13);
        }
        if (drinkList.drinks[x].strIngredient14 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient14);
        }
        if (drinkList.drinks[x].strIngredient15 !== null) {
            ingredients.push(drinkList.drinks[x].strIngredient15);
        }

        for (i = 0; i < 15; i++) {
            var ingredientList = document.createElement('il');
            
            if (ingredients[i] !== null) {
            $('#ingredient-list'+x).append(ingredientList);
            $(ingredientList).attr('id', 'ing' + x + i);
            $('#ing' + x + i).html(ingredients[i]+', ');
            }
        }

        var p = document.createElement('p');
        $('#ingredients' + x).append(p);
        $(p).attr('id', 'instructions' + x);
        $('#ingredient-tile' + x).html('Ingredients');

        var p = document.createElement('p');
        $('#ingredients' + x).append(p);
        $(p).attr('id', 'instructions-steps' + x);
        $('#instructions-steps'+x).html(drinkList.drinks[x].strInstructions);
    }

}

$('#search-button').on('click', callApi);