var elForm = document.querySelector(`.js-order-form`);

var typesOfBread = [`yupqa`, `qalin`, `o'rta`];
var typesOfSize = [`25sm`, `30sm`, `35sm`];
var ingredients = [`pamidor`, `baqlajon`, `zaytun`, `bodring`, `qo'ziqorin`, `qazi`];
var addls = [`achchiq sous`, `shirin sous`, `sarimsoqli sous`];

var addedIngredients = [];
var pizzaAddls = [];


if (elForm) {
  var elSelect = elForm.querySelector(`.js-order-select`);
  var elKattaligi = elForm.querySelector(`.kattalik-turi`);
  var elIngredientsBox = elForm.querySelector(`.massalliqlar`);
  var elAddlsBox = elForm.querySelector(`.qoshimchalar`);   // inputlar
  var elNonTuri = elForm.querySelector(`.non-turi`);
  var elSizeDiv = elForm.querySelector(`.kattaligi`);
  var elUstida = elForm.querySelector(`.ustida`);
  var elOrasida = elForm.querySelector(`.qoshimchalar-turi`);
  var finish = elForm.querySelector(`.result`);
}

for (var type of typesOfBread){
  var elOption = document.createElement(`option`);

  elOption.value = type;
  elOption.textContent = type;
  elSelect.appendChild(elOption);
}

elSelect.addEventListener(`change`, function(){
  elNonTuri.textContent = elSelect.value;
});

// non turi tanlanishi ishladi.


// pitsa o'lchamini tanlash qismi boshlandi.

for (let size of typesOfSize) {
  var elLabel = document.createElement(`label`);
  var elRadio = document.createElement(`input`);
  var elLabelSpan = document.createElement(`span`);

  elLabelSpan.textContent = size;
  elLabelSpan.classList.add(`circle`);
  elRadio.classList.add(`sr-only`, `radio-input`);
  elRadio.type = "radio";
  elRadio.name = `radio`;

  elLabel.appendChild(elRadio);
  elLabel.appendChild(elLabelSpan);
  elSizeDiv.appendChild(elLabel);

  elRadio.addEventListener(`change`, function(){
    elKattaligi.textContent = size;
  });
}

// pitsa o'lchamini tanlash qismi ishladi.


// pitsa qo'shimchalarini tanlash qismi boshlandi.


var updateOrderIngredients = function () {

  elUstida.innerHTML = '';

  for (var addedIngredient of addedIngredients) {
    var elIngredientItem = document.createElement('li'); // li yasaymiz
    elIngredientItem.textContent = addedIngredient;
    elUstida.appendChild(elIngredientItem); // li ni ul ga joylab qo'yamiz.
  }
};


for (let ingredient of ingredients) {
  var ingredientsLabel = document.createElement(`label`);
  var ingredientsInput = document.createElement(`input`);
  var ingredientsSpan = document.createElement(`span`);

  ingredientsLabel.classList.add(`label-ingredient`);
  ingredientsLabel.textContent = ingredient;
  ingredientsInput.type = `checkbox`;
  ingredientsInput.name = ingredient;
  ingredientsInput.value = ingredient;
  ingredientsInput.classList.add(`ingredient-checkbox`);
  ingredientsInput.classList.add(`sr-only`);
  ingredientsSpan.classList.add(`ingredient-span`);

  ingredientsLabel.appendChild(ingredientsInput);
  ingredientsLabel.appendChild(ingredientsSpan);

  elIngredientsBox.appendChild(ingredientsLabel);


  ingredientsInput.addEventListener (`click`, function () {


    if (addedIngredients.includes(this.name)) {
      var itemIndex = addedIngredients.indexOf(this.name);
      addedIngredients.splice(itemIndex, 1);
    } else {
      addedIngredients.push(this.name);
    }

    updateOrderIngredients ();
    console.log(addedIngredients);
  });
}

// pitsa qo'shimchalarini tanlash qismi tugadi.


var updateOrderAddls = function () {

  elOrasida.innerHTML = '';

  for (var pizzaAddl of pizzaAddls) {
    var elIngredientItem = document.createElement('li'); // li yasaymiz
    elIngredientItem.textContent = pizzaAddl;
    elOrasida.appendChild(elIngredientItem); // li ni ul ga joylab qo'yamiz.
  }
};


for (let addl of addls) {
  var addlsLabel = document.createElement(`label`);
  var addlsInput = document.createElement(`input`);
  var addlsSpan = document.createElement(`span`);

  addlsLabel.classList.add(`label-ingredient`);
  addlsLabel.textContent = addl;
  addlsInput.type = `checkbox`;
  addlsInput.name = addl;
  addlsInput.value = addl;
  addlsInput.classList.add(`ingredient-checkbox`);
  addlsInput.classList.add(`sr-only`);
  addlsSpan.classList.add(`ingredient-span`);

  addlsLabel.appendChild(addlsInput);
  addlsLabel.appendChild(addlsSpan);

  elAddlsBox.appendChild(addlsLabel);


  addlsInput.addEventListener (`click`, function () {


    if (pizzaAddls.includes(this.name)) {
      var itemIndex = pizzaAddls.indexOf(this.name);
      pizzaAddls.splice(itemIndex, 1);
    } else {
      pizzaAddls.push(this.name);
    }

    updateOrderAddls ();
    console.log(pizzaAddls);
  });
}

elForm.addEventListener(`submit`, function (evt){
  evt.preventDefault();
  finish.textContent = `Buyurtmangiz yo'lga chiqdi. Bizni tanlaganingizdan xursandmiz! 😎`;
});