let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

function getValues(event){
    event.preventDefault();

    let formData = {
        "name": this.name.value,
        "bio": this.bio.value,
        "fav-color": this['fav-color'].value,
        "gender": this.gender.value,
        "fav-food": []
    }

    let favFoods = document.querySelectorAll(".fav-foods");
    for (let food of favFoods){
        if(food.checked == true){
            formData['fav-food'].push(food.value);
        }
    }

let out = `
    <p>Name: <span>${formData.name}</span></p>
    <p>Bio: <span>${formData.bio}</span></p>
    <p>Fav Color: <span>${formData['fav-colour']}</span></p>
    <p>Gender: <span>${formData.gender}</span></p>
    <p>Fav Food: <span>${formData['fav-food']}</span></p>
`;

document.querySelector(".out code").innerHTML = out;


alert("Hi " + formData.name + ". Thank you for you message");

// console. Log (formData.name) ;
// sessionStorage. setItem("sName", formData. name);
// console. Log ("Success");

SaveUserName (formData. name);
SessionSaveBio(formData.bio);
}

function SessionSaveBio (data)
{
    sessionStorage.setItem("sBio", data);
}

function loadSessionBio()
{
    let cache = sessionStorage.getItem("sBio");
    alert("I cried when you said: " + cache); 
}

function SaveUserName (dataToSave)
{
console. log ("Save");
localStorage.setItem("localName", dataToSave) ;
}
function LoadData ()
{
let temp = localstorage.getItem ("localName");
console. log("Loaded " + temp);
}