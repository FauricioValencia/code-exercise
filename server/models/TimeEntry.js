const mongoose = require('mongoose')

const { getModel } = require('./utils')

const TimeEntrySchema = new mongoose.Schema()

module.exports = getModel('TimeEntry', TimeEntrySchema)