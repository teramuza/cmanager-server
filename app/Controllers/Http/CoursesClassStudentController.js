'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Courses = use('App/Models/CoursesClass')
/**
 * Resourceful controller for interacting with coursesclassstudents
 */
class CoursesClassStudentController {
  /**
   * Show a list of all coursesclassstudents.
   * GET coursesclassstudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, params }) {
    const { id } = params 
    let courses = await Courses
    .query()
    .where('courses_class_id',id)
    .with('coursesClasses')
    .fetch()

    return courses

  }

  /**
   * Render a form to be used for creating a new coursesclassstudent.
   * GET coursesclassstudents/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new coursesclassstudent.
   * POST coursesclassstudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { courses_class_id, student_id } = request.post()

    await Courses.create({courses_class_id, student_id})
    const output = {message: 'Successfully adding students to the course', status: 200}
    return output
  }

  /**
   * Display a single coursesclassstudent.
   * GET coursesclassstudents/:id
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
    .with('coursesClasses as courses')
    .with('students')
    .with('attendances')
    .fetch()

    return courses
  }

  /**
   * Render a form to update an existing coursesclassstudent.
   * GET coursesclassstudents/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update coursesclassstudent details.
   * PUT or PATCH coursesclassstudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a coursesclassstudent with id.
   * DELETE coursesclassstudents/:id
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

module.exports = CoursesClassStudentController
