'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Teacher = use('App/Models/Teacher')
const Courses = use('App/Models/CoursesClass')
/**
 * Resourceful controller for interacting with teachers
 */
class TeacherController {
  /**
   * Show a list of all teachers.
   * GET teachers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let teachers = await Teacher
    .query()
    .with('coursesClasses')
    .fetch()

    return teachers


  }

  /**
   * Render a form to be used for creating a new teacher.
   * GET teachers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new teacher.
   * POST teachers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { name, salary } = request.post()
    const addTeacher = {name, salary}

    await Teacher.create(addTeacher)
    const output = {message: 'Teacher successfully added', status : 200}
    return output
  }

  /**
   * Display a single teacher.
   * GET teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const {id} = params

    let teachers = await Teacher
    .query()
    .where('id', id)
    .with('coursesClasses')
    .fetch()

    return teachers
  }

  /**
   * Render a form to update an existing teacher.
   * GET teachers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update teacher details.
   * PUT or PATCH teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params
    const { name, salary } = request.post()
    const upTeacher = {name, salary}

    await Teacher
    .query()
    .where('id', id)
    .update(upTeacher)

    const output = {message: 'Changes saved successfully', status: 200}
    return output
  }

  /**
   * Delete a teacher with id.
   * DELETE teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params

    await Teacher
    .query()
    .where('id', id)
    .delete()

    const output = {message : 'Teacher successfully removed', status: 200}
    return output
  }
}

module.exports = TeacherController
