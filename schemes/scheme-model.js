//Bring in knex and connect it to the dev config
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
}

function findById() {
    return
}

function findSteps() {
    return
}

function add() {
    return
}

function update() {
    return
}

function remove() {
    return
}