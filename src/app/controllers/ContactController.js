class ContactController {
  index(request, response) {
    // list registers
    response.send('Send from Contact Controller');
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
