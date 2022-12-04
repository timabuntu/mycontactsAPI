const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Get one register
  }

  store() {
    // Create new register
  }

  update() {
    // Update one register
  }

  delete() {
    // Delete one register
  }
}

module.exports = new ContactController();
