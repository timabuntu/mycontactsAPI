const { v4: uuid } = require('uuid');

const contacts = [
  {
    id: uuid(),
    name: 'Thiago',
    email: 'thiago@mail.com',
    phone: '111111111',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactRepository();
