export type Person = {
    id: number,
    name: string,
    email: string,
    dateOfBirth?: Date | undefined
}

export type Student = {
    course: string,
    year: number
}

export type Librarian = {
    libraryID: number,
    shiftHours: number
}

export type StudentLibrarian = Person & Student & Librarian

export enum Department {
    Cardiology,
    Neurology,
    Pediatrics,
    Oncology,
}

export type Doctor = {
    licenceNumber: number,
    department: Department,
    retirementAge: number,
    calculateRetirementDate: (dateOfBirth: Date | undefined, retirementAge: number) => Date | undefined
}

export type HospitalStaff = Person & Doctor