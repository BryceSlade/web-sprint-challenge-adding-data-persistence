exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name')
    })
    .createTable('resources', table => {
        table.increments('resource_id')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
    })
    .createTable('project_resources', table => {
        table.increments('project_resources_id')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
};