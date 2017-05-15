exports.up = function (knex, Promise) {
  return knex.schema.createTable('members', function (table) {
    table.increments('MembershipId').primary()
    table.string('name')
    table.string('email')
    table.string('phone')
    table.text('address')
    table.string('createdOn')
    table.string('ratingID')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
