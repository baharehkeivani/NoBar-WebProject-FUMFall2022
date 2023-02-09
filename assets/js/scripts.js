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

// <!-- add items ti list according to what we get from backend -->
window.onload = function () {
    var list = document.getElementById('list')
    //call API to get requests from backend
    // var items = 
    const button = document.createElement('button');
    button.innerText = 'Button';
    button.id = 'button-1';
    box.appendChild(button);

    list.appendChild(
        Object.assign(
            document.createElement('li'),
            { class: 'container' }
        )
    ).appendChild(
        Object.assign(
            document.createElement('button'),
            {
                innerHTML: 'button',
                class: 'reqItem'
            }
        )
    )
}