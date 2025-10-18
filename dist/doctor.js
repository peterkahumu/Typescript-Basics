import { Department } from "./types.js";
const retirementAge = (dateOfBirth, retirementAge) => {
    if (!dateOfBirth)
        return undefined;
    return new Date(dateOfBirth.getFullYear() + retirementAge, dateOfBirth.getMonth(), dateOfBirth.getDate());
};
let doctor1 = {
    id: 101,
    name: "Amina",
    email: "amina@doctor.hospital.com",
    dateOfBirth: new Date("1998-07-24"),
    licenceNumber: 101,
    department: Department.Pediatrics,
    retirementAge: 65,
    calculateRetirementDate: retirementAge
};
function getRetirementInfo(doctor) {
    return `Dr. ${doctor.name} (ID : ${doctor.id}) from ${Department[doctor.department]} will retire on ${doctor.calculateRetirementDate(doctor?.dateOfBirth, doctor.retirementAge)?.toDateString()}`;
}
console.log(getRetirementInfo(doctor1));
//# sourceMappingURL=doctor.js.map