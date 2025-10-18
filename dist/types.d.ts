export type Person = {
    id: number;
    name: string;
    email: string;
    dateOfBirth?: Date | undefined;
};
export type Student = {
    course: string;
    year: number;
};
export type Librarian = {
    libraryID: number;
    shiftHours: number;
};
export type StudentLibrarian = Person & Student & Librarian;
export declare enum Department {
    Cardiology = 0,
    Neurology = 1,
    Pediatrics = 2,
    Oncology = 3
}
export type Doctor = {
    licenceNumber: number;
    department: Department;
    retirementAge: number;
    calculateRetirementDate: (dateOfBirth: Date | undefined, retirementAge: number) => Date | undefined;
};
export type HospitalStaff = Person & Doctor;
//# sourceMappingURL=types.d.ts.map