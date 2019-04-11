'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Class = use('App/Models/Class')
const ClassType = use('App/Models/ClassType')

/**
 * Resourceful controller for interacting with classes
 */
class ClassController {
  /**
   * Show a list of all classes.
   * GET classes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    let classes = await Class
    .query()
    .with('classTypes')
    .fetch()

    return classes
  }

  async indexTypes ({ request, response, view }) {
    let classes = await ClassType
    .query()
    .with('classes')
    .fetch()

    return classes
  }

  /**
   * Render a form to be used for creating a new class.
   * GET classes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new class.
   * POST classes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const {name} = request.post()

    await Class.create({name})
    const output = {message: 'Class successfully added', status: 200}
    return output
  }

  async storeType ({ request, response }) {
    const {class_id, type, price} = request.post()
    const addType = {class_id, type, price}

    await ClassType.create(addType)
    const output = {message: 'ClassType successfully added', status: 200}
    return output
  }

  /**
   * Display a single class.
   * GET classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const {id} = params

    let classes = await Class
    .query()
    .where('id',id)
    .with('classTypes')
    .fetch()

    return classes

  }

  async showType ({ params, request, response, view }) {
    const {id} = params

    let classes = await ClassType
    .query()
    .where('id',id)
    .with('classes')
    .fetch()

    return classes

  }

  /**
   * Render a form to update an existing class.
   * GET classes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update class details.
   * PUT or PATCH classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {id} = params
    const {name} = request.post()

    await Class
    .query()
    .where('id',id)
    .update({name})

    const output = {message: 'Changes saved successfully', status: 200}
    return output
  }

  async updateType ({ params, request, response }) {
    const {id} = params
    const {class_id, type, price} = request.post()
    const upType = {class_id, type, price}

    await ClassType
    .query()
    .where('id',id)
    .update(upType)

    const output = {message: 'Changes saved successfully', status: 200}
    return output
  }

  /**
   * Delete a class with id.
   * DELETE classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const {id} = params

    await Class
    .query()
    .where('id',id)
    .delete()

    const output = {message : 'Class successfully removed', status: 200}
    return output
  }

  async destroyType ({ params, request, response }) {
    const {id} = params

    await ClassType
    .query()
    .where('id',id)
    .delete()

    const output = {message : 'ClassType successfully removed', status: 200}
    return output
  }
}

module.exports = ClassController
