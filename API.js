//'http://openlibrary.org/search.json?q=$%7BsearchText%7D'
//search area
const searchBook = () => {
  const searchBook = document.getElementById('search-book');
  const searchText = searchBook.value;
  // console.log(searchText);


  //load data
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  //console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))

  if (searchText === '') {
    alert('please write something');
  }
  else {
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    //console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => displaySearchResult(data.docs));
  }
  searchBook.value = '';

}

const displaySearchResult = docs => {
  //console.log(docs)
  const searchResult = document.getElementById('search-result')
  searchResult.textContent = '';
  if (docs.length === 0) {
    alert('Result not found')
  }
  docs.forEach(docs => {
    //console.log(docs);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div  class="card h-100 ">
        <img class="w-100" src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-title">${docs.title}</h2>
        <h3 class="card-title"> Author:${docs.author_name}</h3>
        <h5 class="card-title"> First Publish Year: ${docs.first_publish_year}</h5>
        <h5 class="card-title">  Publisher : ${docs.publisher}</h5>
        <h4>Language:  ${docs.language}</h4>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.</p>
        </div>
      </div>`;
    //appendChild div
    searchResult.appendChild(div);
  })
}

const allBookNumbers = number => {
  const url = `https://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayBookNumbers(data));
}

const displayBookNumbers = docs => {
  //console.log(docs);
  const bookDiv = document.getElementById('search-result');
  bookDiv.innerHTML = `
  <h4>${docs.numFound}</h4>
  `;
  searchResult.appendChild(div);

}


