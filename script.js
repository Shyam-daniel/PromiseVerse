document.getElementById("myButton").addEventListener("click", function() {
    var texts = ["hello", "how", "are"];
    var randomText = texts[Math.floor(Math.random() * texts.length)];

    var newWindow = window.open("", "_blank", "width=400,height=200");
    newWindow.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Random Text</title></head><body><h1>" + randomText + "</h1></body></html>");
});
