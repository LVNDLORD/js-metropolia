'use strict';

let url = 'https://api.tvmaze.com/search/shows?q=rome';
const ul = document.createElement('ul');
document.body.appendChild(ul);

const promise = fetch(url)

promise
    .then(response => response.json())
    .then((data) => {
        console.log(data);      // step 1

        data.forEach(e => {
            const li = document.createElement('li');
            ul.appendChild(li);
            const showContainer = document.createElement('div');
            li.appendChild(showContainer);
            const showName = document.createElement('h2');
            showName.textContent = e.show.name;

            const link = document.createElement('a');
            link.setAttribute('target', '_blank');
            link.href = e.show.url;
            link.innerHTML = 'Link';

            const imgDiv = document.createElement('div');
            const img = document.createElement('img');
            img.src = e.show.image?.medium ?? 'https://via.placeholder.com/210x295?text=Img+not+found';
            imgDiv.appendChild(img);

            const genres = document.createElement('div');
            genres.innerHTML += (e.show.genres).join(' | ');

            const summary = document.createElement('div')
            summary.innerHTML += e.show?.summary ?? 'Description not found';

            showContainer.append(showName, link, imgDiv, genres, summary)
        })
    }).catch(err => {
        console.error('Error:' + err.message);
    });

