const baseRoute = "http://127.0.0.1:4000/v1";

// Menu
$(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});


const orderForm = document.getElementById('orderForm');
// console.log(orderForm);
orderForm.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    data = {};
    for (const [key, value] of formData) {
    // console.log(key,value);
    // if(key=="orderType" && value==null) {
    //     data[key] = 0;
    // }
    // else 
        data[key] = value;
    }
    axios.defaults.withCredentials = true;
    // if(data.orderType == undefined) 
//   console.log(data.orderType);
  axios.post(`${baseRoute}/addRequest`, data).then((response) => {
    //based on responses success an error must be shown or the page must be redirected to dashbord
    // console.log("res ",response);
    let temp = document.getElementById('error3');
    if(!response.data.success) {
      temp.style.display = "block";
      temp.textContent = response.data.message;
    } else {
        temp.style.display = "block";
        temp.textContent = response.data.message;
    //   location.reload()
    }
  })
  .catch((error) => console.log(error));

});

const logout = document.getElementById('logout');
// console.log(orderForm);
logout.addEventListener('click', async event => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    data = {};
    for (const [key, value] of formData) {
    // console.log(key,value);
    // if(key=="orderType" && value==null) {
    //     data[key] = 0;
    // }
    // else 
        data[key] = value;
    }
    axios.defaults.withCredentials = true;
    // if(data.orderType == undefined) 
//   console.log(data.orderType);
  axios.post(`${baseRoute}/addRequest`, data).then((response) => {
    //based on responses success an error must be shown or the page must be redirected to dashbord
    // console.log("res ",response);
    let temp = document.getElementById('error3');
    if(!response.data.success) {
      temp.style.display = "block";
      temp.textContent = response.data.message;
    } else {
        temp.style.display = "block";
        temp.textContent = response.data.message;
    //   location.reload()
    }
  })
  .catch((error) => console.log(error));

});