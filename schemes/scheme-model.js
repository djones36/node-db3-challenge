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
//`add(scheme)`:
// - Expects a scheme object.
// - Inserts scheme into the database.
// - Resolves to the newly inserted scheme, including `id`.
// select * from schemes;
// insert into schemes(scheme_name)Values('name');
function add(schemeData) {
    return db('schemes').insert(schemeData)
        .then((id) => {
            return findById(id[0])
        })
}

function update() {
    return db('schemes')
}

function remove() {
    return db('schemes')
}