// challenge 1 grading system

const score = 0;
if (score <= 60){
    console.log('Fail');
} else {
    console.log('Pass');
};

// challenge 2 temperature converter

function getFarenheit(celsius){
    const farenheit = (celsius* 9/5) + 32;
    return farenheit;
};
console.log(getFarenheit(50));

// challenge 3 user role assignment

function user(user){
    if (user === 'admin'){
        return 'Full Access'
    }
    else if (user === 'user'){
        return 'Limited Access'
    }
    else {
        return 'No Access'
    }
}
console.log(user('user'));

// challenge 4 even or odd

function getEven(interger){
    if (interger % 2 === 0){
        return 'Even'
    }
    else{
        return 'Odd'
    }
}
console.log(getEven(5));

//  challenge 5 book object

const book = {
    title: 'Idris and the Lion',
    author: 'Falade Idris Idowu',
    isRead: false
}

const library = [];
function addBook(title, author) {
    let newBook = addBook(title, author);
    library.push(newBook)
}

// Function to remove a book in the library
function removeBook(title){
const indexToRemvoe = library.findIndex(book => book.title === title);
if (indexToRemvoe ! == -1){
    library.splice(indexToRemvoe, 1);
}
}

// function to list all books in the library

function listBooks() {
    if (library.length === 0) {
        console.log("The library is empty.");
    }
    else {
        console.log("Library books:");
        library.forEach(book => {
            console.log('${book,title} by ${book,author} - ${book.isRead ? "Read" : "Unread"}');
        });
    }
} 

// function to mark a book as read

function markAsRead(title) {
    const bookTomark = library.find(book => book.title === title);
    if (bookTomark) {
        bookTomark.isRead = true;
    }
    else {
        console.log('"${title}" not found in the library.');
    }
}
// Example usage:
addBook("The Great Gatsby", "F. Scott Fitzgerald");
addBook("To kill a Mockingbird", "Harper Lee");
stBooks();
markAsRead("The Great Gatsby");
listBooks();
removeBook("To kill a Mockingbird");
