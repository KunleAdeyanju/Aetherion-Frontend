const API_URL = `http://localhost:8080`;

// function fetchData() {
//   fetch(`${API_URL}/aetherios`)
//     .then(res => {
//       // let resstr = res.json();
//       // console.log("res is ", resstr);
//       return res.json();
//     })
//     .then(data => {
//       show(data);
//     })
//     .catch(error => {
//       errm = `Error Fetching data : ${error}`
//       console.log(errm);
//       document.getElementById('posts').innerHTML = errm;
//     });
// }

// // takes a UNIX integer date, and produces a prettier human string
// function dateOf(date) {
//   const milliseconds = date * 1000; // 1575909015000
//   const dateObject = new Date(milliseconds);
//   const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
//   return humanDateFormat;
// }

// function show(data) {
//   // the data parameter will be a JS array of JS objects
//   // this uses a combination of "HTML building" DOM methods (the document createElements) and
//   // simple string interpolation (see the 'a' tag on title)
//   // both are valid ways of building the html.
//   const ul = document.getElementById('posts');
//   const list = document.createDocumentFragment();
//   //console.log('Data:', data);

//   data.map(function (post) {
//     console.log('Aetherios', post);
//     let li = document.createElement('li');
//     let title = document.createElement('h3');
//     let body = document.createElement('p');
//     let by = document.createElement('p');
//     //title.innerHTML = `<a href="/ui/pirodetail.html?piroid=${post.id}">${post.title}</a>`;
//     body.innerHTML = `${post.description}`;
//     by.innerHTML = `${post.created} - ${post.key}`;

//     // li.appendChild(title);
//     li.appendChild(body);
//     li.appendChild(by);
//     list.appendChild(li);
//   });

//   ul.appendChild(list);
// }

// fetchData();



/////////////////////////////////////////////////




// uses FETCH web api
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//
//
// function fetchTicketsData() {
//   fetch(`${API_URL}/aetherios`)
//     .then(res => {
//       //console.log("res is ", Object.prototype.toString.call(res));
//       return res.json();
//     })
//     .then(data => {
//       showTicketList(data);
//     })
//     .catch(error => {
//       console.log(`Error Fetching data : ${error}`);
//       document.getElementById('posts').innerHTML = 'Error Loading Tickets Data';
//     });
// }

// // takes a UNIX integer date, and produces a prettier human string
// function dateOf(date) {
//   const milliseconds = date * 1000; // 1575909015000
//   const dateObject = new Date(milliseconds);
//   const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
//   return humanDateFormat;
// }

// function showTicketList(data) {
//   // the data parameter will be a JS array of JS objects
//   // this uses a combination of "HTML building" DOM methods (the document createElements) and
//   // simple string interpolation (see the 'a' tag on title)
//   // both are valid ways of building the html.
//   const posts = document.getElementById('posts');
//   const list = document.createDocumentFragment();

//   data.map(function (post) {
//     let div = document.createElement('div');
//     let title = document.createElement('h3');
//     title.innerHTML = `<a href="/atherioslist.html?aetheriosid=${post.id}">${post.title}</a>`;
//     body.innerHTML = `<p>${post.description}</p>`;
    
    
//     div.appendChild(title);
//     list.appendChild(div);
//   });

//   posts.appendChild(list);
// }

// function handlePage() {
//   console.log('load all tickets');
//   fetchTicketsData();
// }

// handlePage();



/////////////////////////


function fetchEntriesData() {
    fetch(`${API_URL}/aetherios`)
        .then(res => res.json())
        .then(data => {
            showEntryList(data);
        })
        .catch(error => {
            console.error(`Error Fetching entries: ${error}`);
            document.getElementById('entries-list').innerHTML = 'Error Loading Entries';
            
        });
}

function showEntryList(data) {
    const entriesListDiv = document.getElementById('entries-list');
    const list = document.createDocumentFragment();

    data.map(function (entry) {
        let div = document.createElement('div');
        let title = document.createElement('h3');
        title.textContent = entry.name;

        // let element1 = document.createElement('p');
        // element1.textContent = `element ${entry.element1}`;

        // let genres = document.createElement('p');
        // genres.textContent = `Genres: ${entry.species}`;

        // let viewLink = document.createElement('a');
        // viewLink.href = `/aetheriondetail.html?entryid=${entry.id}`;
        // viewLink.textContent = 'View Details';

        div.appendChild(title);
        // div.appendChild(element1);
        // div.appendChild(genres);
        // div.appendChild(viewLink);

        list.appendChild(div);
    });

    entriesListDiv.appendChild(list);
}

function handlePage() {
    console.log('load all entries');
    fetchEntriesData();
}

handlePage();