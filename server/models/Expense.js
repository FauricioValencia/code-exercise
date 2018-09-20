const mongoose = require('mongoose')

const { getModel } = require('./utils')

const ExpenseSchema = new mongoose.Schema()

module.exports = getModel('Expense', ExpenseSchema)