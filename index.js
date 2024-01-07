let box = document.getElementById("box");
let email = document.getElementById("email");
let password = document.getElementById("password");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let city = document.getElementById("city");
let state = document.getElementById("select");
let zip = document.getElementById("zip");
let checkbox = document.getElementById("checkbox");
let tbody = document.getElementById("tbody");
let radio_female = document.getElementById("radio_female");
let radio_male = document.getElementById("radio_male");

let users = [
  {
    email: "akmal.hakimov2104@gmail.com",
    password: "123",
    firstName: "Akmal",
    lastName: "Khakimov",
    city: "Bukhara",
    state: "Samarkand",
    zip: 200101,
    gender: radio_female
  },
{
  email: "sunnatulla.akbarovich@gmail.com",
    password: "123",
    firstName: "Sunnat",
    lastName: "Khakimov",
    city: "Bukhara",
    state: "Andijan",
    zip: 200100,
    gender: radio_female
}
];
Draw()

let isOpen = false;
let editingIn = ""
function onClikcSave() {
  let gender = document.getElementsByName("fav_language");
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gender = gender[i];
    }
  }
  obj = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    gender: gender,
  };
  if (isOpen) {
    users[editingIn] = obj;
    isOpen = false;
    // editingIn = "";
  } else {
    users.push(obj);
  }
  (email.value = ""),
    (password.value = ""),
    (firstName.value = ""),
    (lastName.value = ""),
    (city.value = ""),
    (state.value = "Choose..."),
    (zip.value = ""),
    (gender.checked = "");
  Draw();
}

function Del(index) {
  users.splice(index, index + 1);
  Draw();
}

function Edite(index) {
  let item = users[index]
  let gender = document.getElementsByName("fav_language");
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].value == item.gender.value) {
      gender[i].checked=true;
    }
  }
  isOpen = true;
  (email.value = item.email),
    (firstName.value = item.firstName),
    (lastName.value = item.lastName),
    (city.value = item.city),
    (state.value = item.state),
    (zip.value = item.zip),
    editingIn = index;
    Draw()
}

function deteckType(index){
  let x = users[index].gender.value;
  if(x == "CSS"){
    return "Male"
  }else if(x == "JavaScript"){
    return "Female"
  }else {
    return ""
  }
}

function Draw() {
  let s = "";
  for (let i = 0; i <= users.length - 1; i++) {
    s += `   <tr>
    <td>${users[i].firstName}</td>
    <td>${users[i].lastName}</td>
    <td>${users[i].email}</td>
    <td>${users[i].city}</td>
    <td>${users[i].state}</td>
    <td>${deteckType(i)}</td>  
    <td><button class="btn btn-primary" onClick = "Del(${i})">Delete</button></td>  
    <td><button class="btn btn-primary" onClick = "Edite(${i})">Edite</button></td>  
  </tr>`;
  }
  tbody.innerHTML = s;
}
