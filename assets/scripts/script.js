//Global Variables

var drinkList = [];





function callApi() {
    var cocktailName = $('#search-value').val();
    var urlgeo = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+cocktailName;
    $.ajax(urlgeo).done(function (response) {
            drinkList = response;
            console.log(drinkList);
            listResults();
        });
}

function listResults() {
    
    var image = document.createElement('img');
    var i;

    $('#cocktail-image').append(image);
    $(image).attr('src', drinkList.drinks[0].strDrinkThumb);
    $('#cocktail-name').html(drinkList.drinks[0].strDrink);
    $('#category').html(drinkList.drinks[0].strCategory);
    $('#instructions-steps').html(drinkList.drinks[0].strInstructions);

    for (i = 1; i <= 15; i++) {
        var ingredientList = document.createElement('il');
    
        if ((i===1) && (drinkList.drinks[0].strIngredient1 !== null)) {
        $('#ingredient-list').append(ingredientList);
        $(ingredientList).attr('id', 'ing'+i);
        $('#ing'+i).html(drinkList.drinks[0].strIngredient1);
        }

        if ((i===2) && (drinkList.drinks[0].strIngredient2 !== null)) {
        $('#ingredient-list').append(ingredientList);
        $(ingredientList).attr('id', 'ing'+i);
        $('#ing'+i).html(drinkList.drinks[0].strIngredient2);
        }
    
    if ((i===3) && (drinkList.drinks[0].strIngredient3 !== null)) {
        $('#ingredient-list').append(ingredientList);
        $(ingredientList).attr('id', 'ing'+i);
        $('#ing'+i).html(drinkList.drinks[0].strIngredient3);
        }

    if ((i===4) && (drinkList.drinks[0].strIngredient4 !== null)) {
        $('#ingredient-list').append(ingredientList);
        $(ingredientList).attr('id', 'ing'+i);
        $('#ing'+i).html(drinkList.drinks[0].strIngredient4);
        }

    if ((i===5) && (drinkList.drinks[0].strIngredient5 !== null)) {
        $('#ingredient-list').append(ingredientList);
        $(ingredientList).attr('id', 'ing'+i);
        $('#ing'+i).html(drinkList.drinks[0].strIngredient5);
        }

    if ((i===6) && (drinkList.drinks[0].strIngredient6 !== null)) {
        $('#ingredient-list').append(ingredientList);
        $(ingredientList).attr('id', 'ing'+i);
        $('#ing'+i).html(drinkList.drinks[0].strIngredient6);
        }

    if ((i===7) && (drinkList.drinks[0].strIngredient7 !== null)) {
        $('#ingredient-list').append(ingredientList);
        $(ingredientList).attr('id', 'ing'+i);
        $('#ing'+i).html(drinkList.drinks[0].strIngredient7);
        }
    
        if ((i===8) && (drinkList.drinks[0].strIngredient8 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient8);
            }
    
        if ((i===9) && (drinkList.drinks[0].strIngredient9 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient9);
            }
        
        if ((i===10) && (drinkList.drinks[0].strIngredient10 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient10);
            }
    
        if ((i===11) && (drinkList.drinks[0].strIngredient11 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient11);
            }
    
        if ((i===12) && (drinkList.drinks[0].strIngredient12 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient12);
            }
    
        if ((i===13) && (drinkList.drinks[0].strIngredient13 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient13);
            }
    
        if ((i===14) && (drinkList.drinks[0].strIngredient14 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient4);
            }

        if ((i===15) && (drinkList.drinks[0].strIngredient15 !== null)) {
            $('#ingredient-list').append(ingredientList);
            $(ingredientList).attr('id', 'ing'+i);
            $('#ing'+i).html(drinkList.drinks[0].strIngredient15);
            }

        }
}
$('#search-button').on('click', callApi);