const TeacherResolvers = require('./TeacherResolvers');

module.exports = {
    Query: {
        ...TeacherResolvers
    }
};