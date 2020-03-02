$(document).ready(function () {

    $("button").click(function(){
        $("button").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
      });
    //$("#pizza").slideUp(1000).delay(1500).slideDown(1000).slideRight(1000);

    var userName = $("input[type=text][name=yourName]").val();
    var pizzaToppings = $("input[type=radio][name=topppins]").val();
    var totalAmount = $("input[type=number][name=total]").val();


    var small = { name: "smallPizza", cost: 400 };
    var medium = { name: "mediumPizza", cost: 950 };
    var large = { name: "largePizza", cost: 1200 };

    var crispy = { name: "crispyP
    var userName = $("input[type=text][name=yourName]").val();
    var pizzaToppings = $("input[type=radio][name=topppins]").val();
    var totalAmount = $("input[
        var userName = $("input[type=text][name=yourName]").val();
        var pizzaToppings = $("input[type=radio][name=topppins]").val();
        var totalAmount = $("input[type=number][name=total]").val();
    
    
        var small = { name: type=number][name=total]").val();


    var small = { name: izza", cost: 600 };
    var stuffed = { name: "stuffedPizza", cost: 800 };
    var glutten = { name: "glutenPizza", cost: 450 };

    var onions = { name: "onionPizza", cost: 600 };
    var sausage = { name: "sausagePizza", cost: 500 };
    var olive = { name: "olivePizza", cost: 500 };
    var bacon = { name: "baconPizza", cost: 700 };
    var pepper = { name: "pepperPizza", cost: 800 };


    var getSize = function () {
        var pizzaSize = $("input[type=radio][name=size]").val();
        if (pizzaSize == "sm") { size = small } else
            if (pizzaSize == "md") { size = medium } else
                if (pizzaSize == "lg") { size = large }
        console.log(size);
        return size;
    }
    var getType = function () {
        var pizzaType = $("input[type=radio][name=type]").val();
        if (pizzaType == "cr") { type = crispy } else
            if (pizzaType == "st") { type = stuffed } else
                if (pizzaType == "gl") { type = glutten }
        console.log(type);
        return type;

    }

    var getNumber = function () {
        var pizzaNumber = $("input[type=number][name=pizzanumber]").val();
        console.log(pizzaNumber);
        return pizzaNumber;

    }

    var getPhone = function (){
     var phone = $("input[type=number][name=phone]").val();
     console.log(phone);
     return phone;


    }



    $("form#dennis").submit(function (e) {
        e.preventDefault();
        getType()

    });
});