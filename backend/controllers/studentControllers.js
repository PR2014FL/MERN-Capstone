const Student = require("../models/student");

const fetchAllStudents = async(req, res) => {
    const student = await Student.find({});
    res.json({ Students: student});
}

const fetchStudent = async(req, res) => {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    res.json({students: student});
}

const createStudent = async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const program = req.body.program;

    const student = await Student.create({
        name: name,
        email: email,
        program: program
    });
    res.json({students: student})
}


const updateStudent = async(req, res) => {
    const studentId = req.params.id;
    const {name, email, program} = req.body;
    const student = await Student.findByIdAndUpdate(studentId, {
        name: name,
        email: email,
        program: program
    });
    const updateStudent = await Student.findById(studentId);
    res.json({students: updateStudent});
}

const deleteStudent = async(req, res) => {
    const studentId = req.params.id;
    await Student.deleteOne({ _id: studentId});
    res.send({ Success: "Record has been deleted"})
}

module.exports = {
    fetchAllStudents,
    fetchStudent,
    createStudent,
    updateStudent,
    deleteStudent
};