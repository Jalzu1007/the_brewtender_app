//Global Variables
var drinkList = [];
var uniqueSearches = [];


//function that displays the last searches when the page refreshes to the HTML
$(document).ready(function() {
    displayLastSearches();
  });

  //function to save the user input to local storage
function saveSearch(searchValue) {
    if (!uniqueSearches.includes(searchValue)) {
      uniqueSearches.push(searchValue);
      localStorage.setItem('searches', JSON.stringify(uniqueSearches));
    }
  }

//function to retrieve and display last searches on the HTML
function displayLastSearches() {
    var searches = localStorage.getItem('searches');
    if (searches) {
      uniqueSearches = JSON.parse(searches);
  
      var div = document.getElementById('last-searches');
      div.innerHTML = ''; // Clear existing content
  
      var count = Math.min(4, uniqueSearches.length); // Get the minimum value between 4 and the number of searches
    
      // added hover color to text for latest searches
      for (var i = uniqueSearches.length - 1; i >= uniqueSearches.length - count; i--) {
        var p = document.createElement('p');
        p.textContent = uniqueSearches[i];
        p.addEventListener('click', performSearch);
        p.classList.add('hovered');
        div.appendChild(p);
        $(p).attr('class', 'column is-narrow last-searches');
      
      }
    } else {
      var div = document.getElementById('last-searches');
      div.innerHTML = ''; // Clear existing content
    }
}

//function for li to click on
  function performSearch(event) {
    var searchValue = event.target.textContent;
    $('#search-value').val(searchValue);
    callApi();
  }

function callApi() {

    //save the search value before making the api call
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

        var ul = document.createElement('ul');
        $('#ingredients' + x).append(ul);
        $(ul).attr('class', 'column is-narrow is-multiline');
        $(ul).attr('id', 'ingredient-list' + x);

        if ($("#checkbox").is(":checked")) {
            $('#ingredient-tile' + x).html('');
        }   else {
            $('#ingredient-tile' + x).html('Ingredients');
        }
        var ul = document.createElement('ul');
        $('#ingredients' + x).append(ul);
        $(ul).attr('class', 'column is-narrow is-multiline');
        $(ul).attr('id', 'ingredient-list' + x);

        if ($("#checkbox").is(":checked")) {
            //No ingredients 
        }   else {
            ingredients.push(drinkList[x].strIngredient1);
            ingredients.push(drinkList[x].strIngredient2);
            ingredients.push(drinkList[x].strIngredient3);
            ingredients.push(drinkList[x].strIngredient4);
            ingredients.push(drinkList[x].strIngredient5);
            ingredients.push(drinkList[x].strIngredient6);
            ingredients.push(drinkList[x].strIngredient7);
            ingredients.push(drinkList[x].strIngredient8);
            ingredients.push(drinkList[x].strIngredient9);
            ingredients.push(drinkList[x].strIngredient10);
            ingredients.push(drinkList[x].strIngredient11);
            ingredients.push(drinkList[x].strIngredient12);
            ingredients.push(drinkList[x].strIngredient13);
            ingredients.push(drinkList[x].strIngredient14);
            ingredients.push(drinkList[x].strIngredient15);
        
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
            $(p).attr('id', 'instructions-steps' + x);
            $('#instructions-steps'+x).html(drinkList[x].strInstructions);
        }
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