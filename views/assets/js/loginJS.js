// console.clear();
// axios.defaults.withCredentials = true;


const baseRoute = "http://127.0.0.1:4000/v1";

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', e => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find(element => {
    if (element !== "slide-up") {
      parent.classList.add('slide-up');
    } else {
      signupBtn.parentNode.classList.add('slide-up');
      parent.classList.remove('slide-up');
    }
  });
});

signupBtn.addEventListener('click', e => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find(element => {
    if (element !== "slide-up") {
      parent.classList.add('slide-up');
    } else {
      loginBtn.parentNode.parentNode.classList.add('slide-up');
      parent.classList.remove('slide-up');
    }
  });
});

let tempAccountType;

const form = document.getElementById('signupForm');
form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(form);
  data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  axios.defaults.withCredentials = true;
  // console.log(data);
  axios.post(`${baseRoute}/register`, data).then((response) => {
    // console.log("res ",response);
    let temp = document.getElementById('error1');
    if(!response.data.success) {
      temp.style.display = "block";
      temp.textContent = response.data.message;
    } else {
      temp.style.display = "none";
      if(data.accountType == 0) {
        window.history.pushState("", "", "/userDashboard");
      } else if(data.accountType == 1) {
        window.history.pushState("", "", "/driverDashboard");
      } else if(data.accountType == 2) {
        window.history.pushState("", "", "/adminDashboard");
      }
      location.reload()
    }
  })
  .catch((error) => console.log(error));

});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  axios.defaults.withCredentials = true;

  console.log(data);
  axios.post(`${baseRoute}/login`, data).then((response) => {
    //based on responses success an error must be shown or the page must be redirected to dashbord
    // console.log("res ",response);
    let temp = document.getElementById('error2');
    if(!response.data.success) {
      temp.style.display = "block";
      temp.textContent = response.data.message;
    } else {
      temp.style.display = "none";
      if(data.accountType == 0) {
        window.history.pushState("", "", "/userDashboard");
      } else if(data.accountType == 1) {
        window.history.pushState("", "", "/driverDashboard");
      } else if(data.accountType == 2) {
        window.history.pushState("", "", "/adminDashboard");
      }
      location.reload()
    }
  })
  .catch((error) => console.log(error));

});


// function signUp (event) {
//   event.preventDefault()
//   var data = new FormData();

//   // (B2) APPEND FIELDS
//   var all = document.querySelectorAll("#signupForm input, #user_form select"); //, #user_form textarea
//   for (let field of all) {
//     // EXCLUDE SUBMIT + BUTTONS
//     if (field.type != "submit" && field.type != "button") { 
//       // CHECKBOX + RADIO - MUST BE CHECKED
//       // if (field.type=="radio" || field.type=="checkbox") {
//       //   if (field.checked) { data.append(field.name, field.value); }
//       // }
//       // OTHER FIELDS
//       // else { 
//         data.append(field.name, field.value);
//       //  }
//     }
//   }
//   // (B3) WHATEVER YOU WANT TO DO NEXT
//   // DO CHECKS, SEND TO SERVER, ETC...

//   // for (let [k, v] of data.entries()) { console.log(k, v); }
//   // return false;
// }

//# sourceURL=pen.js