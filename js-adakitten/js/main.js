"use strict";

const listCat = document.querySelector(".js-list");

const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 =
  " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenRace1 = "Siamés";

/*const kitterOne =  `<li class="card">
                    <article>
                        <img class="card_img" src="${kittenImage1}" alt="siames-cat" />
                        <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
                        <h4 class="card_race">${kittenRace1}</h4>
                        <p class="card_description">
                        ${kittenDesc1}
                        </p>
                    </article>
                </li>`;*/
//toUpperCase() para mayusculas
const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 ="Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRace2 = "Sphynx";

/*const kitterTwo = `<li class="card">
                    <img class="card_img" src="${kittenImage2}" alt="sphynx-cat" />
                    <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenRace2}</h4>
                    <p class="card_description">
                        ${kittenDesc2}
                    </p>
                </li>`;*/

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenDesc3 ="Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenRace3 = "Maine Coon"               

/*const kitterThree = `<li class="card">
                    <img class="card_img" src="${kittenImage3}" alt="maine-coon-cat" />
                    <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenRace3}</h4>
                    <p class="card_description">
                        ${kittenDesc3}
                    </p>
                </li>`;*/


const textforget = document.querySelector(".kittenRace3");
const buttonplus = document.querySelector (".js-btn-add");
const newform = document.querySelector(".new-form");
const cancelButton = document.querySelector(".button-cancel");
const form = document.querySelector(".form");
cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    newform.classList.add("collapsed");//esto lo que hace es ocultar
    form.reset();//esto lo limpia (formulario)
    
});
// boton de + ( se oculta el formulario)
    /*newform.classList.toggle("collapsed");*/
    
function showNewCatForm(buttonplus) {
  
  buttonplus.addEventListener("click", (e) => {
    e.preventDefault();
    buttonplus.classList.remove("collapsed");
});}
function hideNewCatForm(buttonplus) {
  
  buttonplus.addEventListener("click", (e) => {
    e.preventDefault();
    buttonplus.classList.add("collapsed");

});}
const buttonbus = document.querySelector(".js_button-search");
const description = document.querySelector(".js_in_search_desc");

//primero esto.(aqui poner cada descripcion de los gatos) 
// Descripcion 1,2,3. 





buttonbus.addEventListener("click", (e)=>{
e.preventDefault();
listCat.innerHTML = "";//limpia el contenedor de listcat
const descriptionValue = description.value;
if (kittenDesc1.toLowerCase().includes(descriptionValue)) {
    listCat.innerHTML +=renderKitten (kittenImage1, kittenDesc1, kittenName1, kittenRace1);
  }
  
  if (kittenDesc2.toLowerCase().includes(descriptionValue)) {
    listCat.innerHTML +=renderKitten (kittenImage2, kittenDesc2, kittenName2, kittenRace2);
  }
  
  if (kittenDesc3.toLowerCase().includes(descriptionValue)) {
    listCat.innerHTML +=renderKitten (kittenImage3, kittenDesc3, kittenName3, kittenRace3);
  }
})

function renderAllKittens() {
  listCat.innerHTML = 
    renderKitten(kittenImage1, kittenDesc1, kittenName1, kittenRace1) +
    renderKitten(kittenImage2, kittenDesc2, kittenName2, kittenRace2) +
    renderKitten(kittenImage3, kittenDesc3, kittenName3, kittenRace3);
}

function renderKitten(url, desc, name, race) {
  return `<li class="card">
            <article>
                <img class="card_img" src="${url}" alt="${race.toLowerCase()}-cat" />
                <h3 class="card_title">${name.toUpperCase()}</h3>
                <h4 class="card_race">${race}</h4>
                <p class="card_description">
                    ${desc}
                </p>
            </article>
          </li>`;
}




renderAllKittens();


