const { v4: uuid } = require('uuid');

const contacts = [
  {
    id: uuid(),
    name: 'Thiago',
    email: 'thiago@mail.com',
    phone: '111111111',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Fernanda',
    email: 'fernanda@mail.com',
    phone: '222222222',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => { resolve(contacts.find((contact) => contact.id === id)); });
  }
}

module.exports = new ContactRepository();
