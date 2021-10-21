exports.up = (knex) => {
    return knex.schema.createTable('countries', t => {
      t.increments('id').primary()
      t.string('name')
      t.string('flag')
      t.boolean('visited').defaultTo(false)
      t.string('continent')      
      t.string('capital')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('countries')
  }
