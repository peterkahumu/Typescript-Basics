let member1 = {
    id: 202,
    name: "Agnes",
    email: "agnes@student.university.com",
    roles: ["student",],
    course: "Computer Science",
    year: 3
};
let member2 = {
    id: 203,
    name: "Melisa",
    email: "melisa@teacher.university.com",
    roles: ["teacher",],
    department: "Computer Science",
    teaches: ["Data Structures and Algorithms",]
};
let Member3 = {
    id: 204,
    name: "Anthony",
    email: "anthony@student.university.com",
    roles: ["student", "teacher"],
    course: "Software Engineering",
    year: 4,
    department: "Computer Science",
    teaches: ['Foundations of Computation Science'],
};
function describeMember(member) {
    const { name, roles } = member;
    const isStudent = roles.includes("student");
    const isTeacher = roles.includes("teacher");
    const isStaff = roles.includes("staff");
    if (isStudent && isTeacher) {
        const student = member;
        const teacher = member;
        return `${name} is a Student in ${student.course} and also teaches ${teacher.teaches.join(", ")} in the ${teacher.department} department`;
    }
    if (roles.length == 1) {
        if (isStudent) {
            const student = member;
            return `${name} is a student in ${student.course}`;
        }
        else if (isTeacher) {
            const teacher = member;
            return `${name} is a teacher in the ${teacher.department} teaching ${teacher.teaches.join(", ")}`;
        }
        else if (isStaff) {
            const staff = member;
            return `${name} is a staff member working as ${staff.position} for ${staff.shiftHours} hours.`;
        }
    }
    return `${name} has multiple roles at the university.`;
}
console.log(describeMember(member1));
console.log(describeMember(member2));
console.log(describeMember(Member3));
export {};
//# sourceMappingURL=universtity_roles.js.map