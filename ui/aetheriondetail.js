const API_URL = `http://localhost:8080`;

// function fetch(aether_id) {
//   fetch(`${API_URL}/aetherios/${aether_id}`)
//     .then(res => {
//       //console.log("res is ", Object.prototype.toString.call(res));
//       return res.json();
//     })
//     .then(data => {
//       showDetail(data);
//     })
//     .catch(error => {
//       console.log(`Error Fetching data : ${error}`);
//       document.getElementById('posts').innerHTML = 'Error Loading Single Piro Data';
//     });
// }
function fetchEntriesData(aether_id) {
    fetch(`${API_URL}/aetherios/${aether_id}`)
        .then(res => res.json())
        .then(data => {
            showDetail(data);
        })
        .catch(error => {
            console.error(`Error Fetching entries: ${error}`);
            document.getElementById('entry').innerHTML = 'Error single entry';
            
        });
}


function parseAetherId() {
    try {
      var url_string = window.location.href.toLowerCase();
      var url = new URL(url_string);
      var aether_id = url.searchParams.get('id');
      return aether_id;
    } catch (err) {
      console.log("Issues with Parsing URL Parameter's - " + err);
      return '0';
    }
  }
  // takes a UNIX integer date, and produces a prettier human string
  function dateOf(date) {
    const milliseconds = date * 1000; // 1575909015000
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
    return humanDateFormat;
  }

  function showDetail(entry) {
    // the data parameter will be a JS array of JS objects
    // this uses a combination of "HTML building" DOM methods (the document createElements) and
    // simple string interpolation (see the 'a' tag on title)
    // both are valid ways of building the html.
    const ul = document.getElementById('entry');
    const detail = document.createDocumentFragment();
  
    console.log('aetherios:', entry);
    let li = document.createElement('div');
    let title = document.createElement('h2');
    title.innerHTML = `${entry.name}`;


    let element1 = document.createElement('p');
    element1.textContent = `element: ${entry.element1}`;

    // let species = document.createElement('p');
    // species.textContent = `Spieces: ${entry.species}`;

    // let viewLink = document.createElement('a');
    // viewLink.href = `/aetheriondetail.html?entryid=${entry.id}`;
    // viewLink.textContent = 'View Details';

    li.appendChild(title);
    li.appendChild(element1);
    // div.appendChild(species);
    // div.appendChild(viewLink);
    detail.appendChild(li);


    ul.appendChild(detail);
  }

  function handlePage() {
    let aether_id = parseAetherId();
    console.log('aetherId: ', aether_id);
  
    if (aether_id != null) {
      console.log('found a aetherId');
      fetchEntriesData(aether_id); // Call the correct function
    }
  }
  
  handlePage();