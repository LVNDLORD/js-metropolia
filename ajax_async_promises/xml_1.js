'use strict';

const showCountries = function () {
    let xhr = new XMLHttpRequest();

    // true if async
    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    // hadling the response with callback function
    // for error handing https://httpstatusdogs.com/, and if request was successful
    // callback function gonna deal with status codes that we receive back from the aPI
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log('success');
            let countries = JSON.parse(this.response);
            console.log(countries);

            countries.forEach(function (country) {
                const countryCard = document.createElement('div');
                const countryCardImg = document.createElement('img');
                countryCard.innerHTML = country.name;
                countryCardImg.src = country.flag;
                countryCardImg.width = 300;
                document.querySelector('#feed').appendChild(countryCard);
                document.querySelector('#feed').appendChild(countryCardImg);
                
            })
        }
    }

    xhr.send();
}

// open method comes with XMLHttpRequest object