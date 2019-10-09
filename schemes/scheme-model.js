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
    return db('steps as s')
        .join('schemes as sc', 's.scheme_id', 'sc.id')
        .select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
        .where('s.scheme_id', '=', id)
        .orderBy('s.step_number')
}

function add(schemeData) {
    return db('schemes').insert(schemeData)
        .then((id) => {
            return findById(id[0])
        })
}

function update(obj, id) {
    return db('schemes')
        .update('scheme_name', obj.scheme_name)
        .where({ id })
        .then(() => findById(id))
}

function remove() {
    return db('schemes')
}