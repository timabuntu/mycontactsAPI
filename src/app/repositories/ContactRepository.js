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

}

module.exports = new ContactRepository();
