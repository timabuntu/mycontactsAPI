const { uuid } = require('uuidv4');

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
    return contacts;
  }
}

module.exports = new ContactRepository();
