$("#btnFizzBuzz").on("click", function () {
    var fizzNum = Number($("#fizzNum").val());
    var buzzNum = Number($("#buzzNum").val());
    var arrOutput = new Array();
    for (var loop = 1; loop <= 100; loop++) {
        if ((loop % fizzNum == 0) && (loop % buzzNum == 0)) {
            arrOutput.push("<span class='fizzbuzz'>FIZZ-BUZZ</span>");
        }
        else if (loop % fizzNum == 0) {
            arrOutput.push("<span class='fizz'>FIZZ</span>");
        }
        else if (loop % buzzNum == 0) {
            arrOutput.push("<span class='buzz'>BUZZ</span>");
        }
        else {
            arrOutput.push(loop);
        }
    }

    $("#output").html(arrOutput.join(", "));

});
