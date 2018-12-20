// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// UI Constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function (msg, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 2000);
}

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}





// Event Listeners for added
document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFields();
  }


  e.preventDefault();
});


// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {


  e.preventDefault();
});