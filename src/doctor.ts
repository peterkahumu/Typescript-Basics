import type { HospitalStaff } from "./types.js";
import { Department } from "./types.js";

const retirementAge = (dateOfBirth: Date | undefined, retirementAge: number): Date | undefined => {
    if (!dateOfBirth) return undefined;
    return new Date(dateOfBirth.getFullYear() + retirementAge, dateOfBirth.getMonth(), dateOfBirth.getDate())
}

let doctor1: HospitalStaff = {
    id: 101,
    name: "Amina",
    email: "amina@doctor.hospital.com",
    dateOfBirth: new Date("1998-07-24"),
    licenceNumber: 101,
    department: Department.Pediatrics,
    retirementAge: 65,
    calculateRetirementDate: retirementAge
}

function getRetirementInfo(doctor: HospitalStaff): string {
    return `Dr. ${doctor.name} (ID : ${doctor.id}) from ${Department[doctor.department]} will retire on ${doctor.calculateRetirementDate(doctor?.dateOfBirth, doctor.retirementAge)?.toDateString()}`
}

console.log(getRetirementInfo(doctor1))