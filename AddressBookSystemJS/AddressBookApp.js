// Contact
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Creating a Contact and storing it in an array
let addressBook = [];

let contact1 = new Contact("Hello", "World", "123 Street", "Bhopal", "MP", "10001", "1234567890", "hello.world@example.com");
addressBook.push(contact1);

// Displaying all contacts
addressBook.forEach(contact => console.log(contact.toString()));
