'use strict';
const bookContainer = document.querySelector('#books');

function loadBooks(books) {
  for (let book of books) {
    //create card for the customer
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('medium');

    //create div for customer name
    let name = document.createElement('div');
    name.classList.add('card-title');
    name.classList.add('h1');
    name.innerText = `${book.author.first} ${book.author.last}`;

    //add name and card to customer container

    //create thumbnail div for card
    let image = document.createElement('div');
    image.classList.add('card-image', 'circle');
    let pic = document.createElement('img');
    pic.src = book.cover;
    image.appendChild(pic);

    let publisher = document.createElement('div');
    publisher.classList.add('publisher');
    publisher.innerText = `${book.publisher.name}`;

    let address = document.createElement('div');
    address.classList.add('address');
    address.innerText = `${book.publisher.address.number} ${book.publisher.address.street}  
    ${book.publisher.address.city}, ${book.publisher.address.state} ${book.publisher.address.zip} `;

    // let dob = document.createElement('div');
    // dob.classList.add('dob');
    // dob.innerText = `DOB: ${moment(customer.dob.date).format('ll')}`;

    // let registered = document.createElement('div');
    // registered.classList.add('registered');
    // registered.innerText = `Customer Since: ${moment(
    //   customer.registered.date
    // ).format('ll')}`;
    // card.appendChild(cover);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(publisher);
    card.appendChild(address);

    bookContainer.appendChild(card);
  }
}
loadBooks(books);
loadBooks(johnBooks);
