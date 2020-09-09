const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.get('/', getAll);
router.get(':user', getUser)
router.post('/:user', addUser)
router.put('/:user', updateUser)
router.delete('/:user', deleteUser)


router.get('/number', getNumber)

module.exports = router;

function getAll(req, res, next) {
      userService.getAll()
          .then(users => res.json(users))
          .catch(next);
  }

  function getUser(req, res, next) {
      userService.getUser(req.body)
          .then(user => res.json(user))
          .catch(next);
  }

  function addUser(req, res, next) {
    userService.addUser(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function updateUser(req, res, next) {
    userService.updateUser(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function deleteUser(req, res, next) {
    userService.deleteUser(req.body)
        .then(user => res.json(user))
        .catch(next);
}

//demo

function getNumber(req, res, next) {
    userService.getNumber()
        .then(num => res.json(num))
        .catch(next);
}