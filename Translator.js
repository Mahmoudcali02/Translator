function translate() {
    var language = document.getElementById("lang-codes").value;
    var text = document.getElementById("text").value;
    $.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210714T203911Z.7953daa484a4a5a2.190f980b710ad3576afbbcf606e8940c17a1dd9b&text=&lang=")

function(result).document
}