let studentLibrarian1 = {
    id: 10,
    name: "John",
    email: "john@student.school.com",
    course: "Computer Science",
    year: 3,
    libraryID: 10,
    shiftHours: 3
};
function getLibrarySchedule(student) {
    return `${student.name} (ID: ${student.id}) works in the library for ${student.shiftHours} while studying for ${student.course}`;
}
console.log(getLibrarySchedule(studentLibrarian1));
export {};
//# sourceMappingURL=index.js.map