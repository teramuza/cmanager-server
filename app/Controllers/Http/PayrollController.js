'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Courses = use('App/Models/CoursesClass')
const Payroll = use('App/Models/Payroll')
/**
 * Resourceful controller for interacting with payrolls
 */
class PayrollController {
  /**
   * Show a list of all payrolls.
   * GET payrolls
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const data = await Payroll
    .query()
    .with('teacher')
    .with('coursesClasses')
    .fetch()

    return data
  }

  /**
   * Render a form to be used for creating a new payroll.
   * GET payrolls/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view, params }) {
    const {id} = params
    const data = await Courses
    .query()
    .where('id', id)
    .with('teacher')
    .withCount('coursesClassStudents as students')
    .fetch()
    const courses = data.toJSON()[0]
    const total = courses.teacher.salary * courses.__meta__.students
    const payroll = {
      date : new Date(),
      teacher_id : courses.teacher_id,
      courses_class_id : courses.id,
      students_count : courses.__meta__.students,
      total
    }

    return payroll
  }

  /**
   * Create/save a new payroll.
   * POST payrolls
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { teacher_id, courses_class_id, students_count, total, date } = request.post()
    const addPayroll = { teacher_id, courses_class_id, students_count, total, date }

    await Payroll.create(addPayroll)
    const output = {message: 'Payroll history successfully saved', status: 200}
    return output
  }

  /**
   * Display a single payroll.
   * GET payrolls/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const data = await Payroll
    .query()
    .with('teacher')
    .with('coursesClasses')
    .fetch()

    return data
  }

  /**
   * Render a form to update an existing payroll.
   * GET payrolls/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update payroll details.
   * PUT or PATCH payrolls/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a payroll with id.
   * DELETE payrolls/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PayrollController
