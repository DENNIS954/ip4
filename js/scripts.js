$("form#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedPhoneNumber = $("input#number").val();
    var newUser = new User(inputtedName, inputtedPhoneNumber);

    $()