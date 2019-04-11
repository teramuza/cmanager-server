'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Courses = use('App/Models/CoursesClassStudent')
const Payment = use('App/Models/Payment')
/**
 * Resourceful controller for interacting with payments
 */
class PaymentController {
  /**
   * Show a list of all payments.
   * GET payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const data = await Payment
    .query()
    .with('student')
    .with('teacher')
    .with('classType')
    .fetch()

    return data
  }

  /**
   * Render a form to be used for creating a new payment.
   * GET payments/create
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
    .with('students')
    .with('coursesClasses')
    .fetch()

    const courses = data.toJSON()[0]

    const payment = {
      date : new Date(),
      teacher_id : courses.coursesClasses.teacher_id,
      student_id : courses.student_id,
      class_type_id : courses.coursesClasses.class_type_id,
      courses_class_student_id : courses.id,
      cost : courses.coursesClasses.classTypes.price
    }
    return payment
  }

  /**
   * Create/save a new payment.
   * POST payments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const { date, teacher_id, student_id, class_type_id, courses_class_student_id, cost } = request.post()
    const addPayment = { teacher_id, student_id, class_type_id, courses_class_student_id, date }

    await Payment.create(addPayment)
    const output = {message: 'Payment history successfully saved', status: 200}
    return output
  }

  /**
   * Display a single payment.
   * GET payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const {id} = params
    const data = await Payment
    .query()
    ,where('id',id)
    .with('student')
    .with('teacher')
    .with('classType')
    .fetch()

    return data
  }

  /**
   * Render a form to update an existing payment.
   * GET payments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update payment details.
   * PUT or PATCH payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a payment with id.
   * DELETE payments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PaymentController
