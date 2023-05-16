//Global Variables
  
//function that displays the last searches when the page refreshes to the HTML
$(document).ready(function() {
    displayLastSearches();
  });

//function to save the user input to local storage
function saveSearch(searchValue) {
    var searches = localStorage.getItem('searches');
    if (searches) {
      searches = JSON.parse(searches);
    } else {
      searches = [];
    }
    searches.push(searchValue);
    localStorage.setItem('searches', JSON.stringify(searches));
  }
  
  //function to retrieve and display last searches on the HTML
  function displayLastSearches() {
    var searches = localStorage.getItem('searches');
    if (searches) {
      searches = JSON.parse(searches);
      var ul = document.getElementById('last-searches');
      ul.innerHTML = ''; 
  
      for (var i = searches.length - 1; i >= 0; i--) {
        var li = document.createElement('li');
        li.textContent = searches[i];
        li.addEventListener('click', performSearch);
        ul.appendChild(li);
      }
        // Display the last searches horizontally
        ul.style.display = 'flex';
        ul.style.flexWrap = 'nowrap';
        ul.style.overflowX = 'auto';
        ul.style.justifyContent = 'space-evenly';
    }
  }
  //function for li to click on
  function performSearch(event) {
    var searchValue = event.target.textContent;
    $('#search-value').val(searchValue);
    callApi();
  }
  
var drinkList = [];

function callApi() {

    //function to save the search value before making the api call
    var cocktailName = $('#search-value').val();
    saveSearch(cocktailName);

    var cocktailName = $('#search-value').val();
    var urlgeo = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName;
    var urlingredient = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + cocktailName;
    
    drinkList = [];
    console.log(drinkList);
    displayLastSearches();

    if ($("#checkbox").is(":checked")) {
        $.ajax(urlingredient).done(function (response) {
            var apiResults  = response;
            
            for (i=0;i<apiResults.drinks.length; i++) {
                if (i<10) {
                drinkList.push(apiResults.drinks[i]);
                }
            }
            console.log(drinkList);
            //updates last search display from local storage
            listResults();
        });
    } else {
        $.ajax(urlgeo).done(function (response) {
            var apiResults  = response;
            
            for (i=0;i<apiResults.drinks.length; i++) {
                if (i<10) {
                drinkList.push(apiResults.drinks[i]);
                }
            }
            console.log(drinkList);
            listResults();
            //display last search results on search button click to the HTML
            displayLastSearches();
        });
    }
}

function listResults() {

    cleaning();

    for (x = 0; x < drinkList.length; x++) {
        var div = document.createElement('div');
        var ingredients = [];

        $('.results-container').append(div);
        $(div).attr('class', 'column is-one-quarter is-narrow');
        $(div).attr('id', 'box' + x);


        var div = document.createElement('div');
        $('#box' + x).append(div);
        $(div).attr('class', 'column is-narrow');
        $(div).attr('id', 'div1'+x);

        var div = document.createElement('div');
        $('#div1'+x).append(div);
        $(div).attr('class', 'column is-narrow');
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
        $(image).attr('src', drinkList[x].strDrinkThumb);

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
        $('#cocktail-name' + x).html(drinkList[x].strDrink);

        var p = document.createElement('p');
        $('#div7'+x).append(p);
        $(p).attr('class', 'subtitle is-6');
        $(p).attr('id', 'category' + x);
        $('#category' + x).html(drinkList[x].strCategory);

        var div = document.createElement('div');
        $('#div5'+x).append(div);
        $(div).attr('class', 'column is-narrow');
        $(div).attr('id', 'ingredients' + x);

        var p = document.createElement('p');
        $('#ingredients' + x).append(p);
        $(p).attr('class', 'column is-narrow is-multiline');
        $(p).attr('id', 'ingredient-tile' + x);
        $('#ingredient-tile' + x).html('Ingredients');

        var ul = document.createElement('ul');
        $('#ingredients' + x).append(ul);
        $(ul).attr('class', 'column is-narrow is-multiline');
        $(ul).attr('id', 'ingredient-list' + x);

        if (drinkList[x].strIngredient1 !== null) {
            ingredients.push(drinkList[x].strIngredient1);
        }
        if (drinkList[x].strIngredient2 !== null) {
            ingredients.push(drinkList[x].strIngredient2);
        }
        if (drinkList[x].strIngredient3 !== null) {
            ingredients.push(drinkList[x].strIngredient3);
        }
        if (drinkList[x].strIngredient4 !== null) {
            ingredients.push(drinkList[x].strIngredient4);
        }
        if (drinkList[x].strIngredient5 !== null) {
            ingredients.push(drinkList[x].strIngredient5);
        }
        if (drinkList[x].strIngredient6 !== null) {
            ingredients.push(drinkList[x].strIngredient6);
        }
        if (drinkList[x].strIngredient7 !== null) {
            ingredients.push(drinkList[x].strIngredient7);
        }
        if (drinkList[x].strIngredient8 !== null) {
            ingredients.push(drinkList[x].strIngredient8);
        }
        if (drinkList[x].strIngredient9 !== null) {
            ingredients.push(drinkList[x].strIngredient9);
        }
        if (drinkList[x].strIngredient10 !== null) {
            ingredients.push(drinkList[x].strIngredient10);
        }
        if (drinkList[x].strIngredient11 !== null) {
            ingredients.push(drinkList[x].strIngredient11);
        }
        if (drinkList[x].strIngredient12 !== null) {
            ingredients.push(drinkList[x].strIngredient12);
        }
        if (drinkList[x].strIngredient13 !== null) {
            ingredients.push(drinkList[x].strIngredient13);
        }
        if (drinkList[x].strIngredient14 !== null) {
            ingredients.push(drinkList[x].strIngredient14);
        }
        if (drinkList[x].strIngredient15 !== null) {
            ingredients.push(drinkList[x].strIngredient15);
        }

        for (i = 0; i < ingredients.length; i++) {
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
        $('#instructions-steps'+x).html(drinkList[x].strInstructions);
    }

}

function cleaning() {

        for (i=0; i<10; i++) {
            var node = document.getElementById('box'+i);
            if (node) {
            node.remove();
            }
        }
}

$('#search-button').on('click', callApi);