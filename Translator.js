var textEl = $('#text');

var languageCodesEl = $('#lang-codes')

var resultEL = $('#result')

let currentLang = "ru"



$("#translate").on("click", translate)

function translate() {
    var language = languageCodesEl.val();
    console.log(`Language: ${language}`)
    var text = textEl.val();
    console.log(`Text: ${text}`)
    var url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210714T203911Z.7953daa484a4a5a2.190f980b710ad3576afbbcf606e8940c17a1dd9b&text=${text}&lang=${language}`
    fetch(url)
        .then(function (result){
            return result.json();
        })
        .then(function (data) {
            console.log(data)
            resultEL.text(data.text[0])
            window.localStorage.setItem("lastTrans", data.text[0]);
        });
}


function changeLang() {

}

