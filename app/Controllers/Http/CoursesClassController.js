'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Courses = use('App/Models/CoursesClass')
/**
 * Resourceful controller for interacting with coursesclasses
 */
class CoursesClassController {
  /**
   * Show a list of all coursesclasses.
   * GET coursesclasses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let classes = await Courses
    .query()
    .withCount('coursesClassStudents as students')
    .with('teacher')
    .with('classTypes')
    .fetch()

    return classes
  }

  /**
   * Render a form to be used for creating a new coursesclass.
   * GET coursesclasses/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new coursesclass.
   * POST coursesclasses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { class_type_id, teacher_id } = request.post()

    await Courses.create({class_type_id, teacher_id})
    const output = {message: 'CourseClass successfully added', status: 200}
    return output
  }

  /**
   * Display a single coursesclass.
   * GET coursesclasses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params 
    let courses = await Courses
    .query()
    .where('id',id)
    .with('coursesClassStudents')
    .with('teacher')
    .fetch()

    return courses
  }

  /**
   * Render a form to update an existing coursesclass.
   * GET coursesclasses/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update coursesclass details.
   * PUT or PATCH coursesclasses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const {id} = params
    const { class_type_id, teacher_id } = request.post()

    await Courses
    .query()
    .where('id',id)
    .update({class_type_id, teacher_id})

    const output = {message: 'Changes saved successfully', status: 200}
    return output
  }

  /**
   * Delete a coursesclass with id.
   * DELETE coursesclasses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const {id} = params

    await Courses
    .query()
    .where('id',id)
    .delete()
  }
}

module.exports = CoursesClassController
