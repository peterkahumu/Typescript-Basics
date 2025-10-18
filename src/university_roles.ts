type Person = {
    id: number;
    name: string;
    email: string;
    roles: ("student" | "teacher" | "staff")[]
}

type Student = {
    course: string;
    year: number;
}

type Staff = {
    position: string;
    shiftHours: number;
}

type Teacher = {
    department: string;
    teaches: string[];
}

type UniversityMember = Person & (Student | Teacher | Staff | (Student & Teacher))

// member 1 : Student
let member1: UniversityMember = {
    id: 202,
    name: "Agnes",
    email: "agnes@student.university.com",
    roles: ["student",],
    course: "Computer Science",
    year: 3
}

// create a teacher.
let member2: UniversityMember = {
    id: 203,
    name: "Melisa",
    email: "melisa@teacher.university.com",
    roles: ["teacher",],
    department: "Computer Science",
    teaches: ["Data Structures and Algorithms",]
}

let Member3: UniversityMember = {
    id: 204,
    name: "Anthony",
    email: "anthony@student.university.com",
    roles: ["student", "teacher"],
    course: "Software Engineering",
    year: 4,
    department: "Computer Science",
    teaches: ['Foundations of Computation Science'],

}

function describeMember(member: UniversityMember): string {
    const { name, roles } = member;

    const isStudent = roles.includes("student")
    const isTeacher = roles.includes("teacher")
    const isStaff = roles.includes("staff")

    if (isStudent && isTeacher) {
        const student = member as Person & Student
        const teacher = member as Person & Teacher

        return `${name} is a Student in ${student.course} and also teaches ${teacher.teaches.join(", ")} in the ${teacher.department} department`
    }

    if (roles.length == 1) {
        if (isStudent) {
            const student = member as Person & Student
            return `${name} is a student in ${student.course}`
        } else if (isTeacher) {
            const teacher = member as Person & Teacher
            return `${name} is a teacher in the ${teacher.department} teaching ${teacher.teaches.join(", ")}`
        } else if (isStaff) {
            const staff = member as Person & Staff
            return `${name} is a staff member working as ${staff.position} for ${staff.shiftHours} hours.`;
        }
    }

    return `${name} has multiple roles at the university.`;

}



console.log(describeMember(member1));
// Agnes is a student in Computer Science, year 3.

console.log(describeMember(member2));
// Melisa is a teacher in the Computer Science department, teaching Data Structures and Algorithms.

console.log(describeMember(Member3));
// Anthony is a student in Software Engineering, year 4, and teaches Foundations of Computation Science in the Computer Science department.
