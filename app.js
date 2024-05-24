const options = {method: 'GET', headers: {accept: 'application/json'}};
fetch('https://fakestoreapi.com/products', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));