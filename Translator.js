var textEl = $('#text');

var languageCodesEl = $('#lang-codes')

var resultEL = $('#result')

let currentLang = "ru"

'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Dropdowns

  var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Close dropdowns if ESC pressed
  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeDropdowns();
    }
  });

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});

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

/* user siongui was able to come up with a method to make using the bulma css framework more tolerable by giving us an event listener that removes the error caused by the dropdown, this is his github: https://github.com/siongui
And this is the documentation he detailed his findings on https://siongui.github.io/2018/01/19/bulma-dropdown-with-javascript/# */