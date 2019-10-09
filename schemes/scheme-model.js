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

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('steps')
        .join('schemes', 'steps.scheme_id', 'schemes.id')
        .select('*')
        .where('scheme_id', '=', id)
}

function add() {
    return db('schemes')
}

function update() {
    return db('schemes')
}

function remove() {
    return db('schemes')
}