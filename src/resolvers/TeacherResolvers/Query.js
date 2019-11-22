const { getAllTeachers } = require('../../services/TeacherService');

// We make an async context
const getTeachers = async () => {
    const teachers = await getAllTeachers();
    return teachers;
};

module.exports = {
    getTeachers
};