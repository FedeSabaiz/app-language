const { Teachers } = require('../models');

const getAllTeachers = () => {
    return Teachers.find({is_active:true});
};

module.exports = {
    getAllTeachers
};