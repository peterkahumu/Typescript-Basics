# Hello World (TypeScript) — Project Overview

This is a minimal TypeScript sample project demonstrating basic type composition, enums, and simple functions using a small domain model (people, students, librarians, doctors).

## Repository structure

- `tsconfig.json` — TypeScript configuration for compiling the project.
- `src/` — Source TypeScript files:
  - `types.ts` — Type definitions and enums used across the project.
  - `index.ts` — Sample usage of the `StudentLibrarian` type and a helper that prints a library schedule.
  - `doctor.ts` — Sample usage of the `HospitalStaff` (doctor) type, an enum for `Department`, and a retirement-date calculator.
- `dist/` — (Empty) output directory for compiled JavaScript (if you run `tsc` it will likely appear here depending on your `tsconfig.json`).

## What the code does

- `types.ts` defines reusable TypeScript types and an enum:
  - `Person` — Basic person fields (id, name, email, optional dateOfBirth).
  - `Student` — Student-specific fields (course, year).
  - `Librarian` — Librarian-specific fields (libraryID, shiftHours).
  - `StudentLibrarian` — Intersection type combining `Person & Student & Librarian`.
  - `Department` — Enum listing hospital departments (Cardiology, Neurology, Pediatrics, Oncology).
  - `Doctor` — Fields and a function type to calculate retirement date.
  - `HospitalStaff` — Intersection of `Person & Doctor`.

- `index.ts` creates a `StudentLibrarian` object and prints a schedule string using `getLibrarySchedule`.

- `doctor.ts` creates a `HospitalStaff` (doctor) object and prints retirement information using `getRetirementInfo`. The `retirementAge` helper function computes a retirement date from a given `Date` of birth and a retirement age.

## How to build and run

Prerequisites:
- Node.js (v14+ recommended)
- npm or yarn
- TypeScript installed either globally (`npm i -g typescript`) or as a dev dependency in the project

1. Install dependencies (if you add TypeScript locally):

```bash
npm init -y
npm install --save-dev typescript
```

2. Compile TypeScript to JavaScript:

```bash
npx tsc
```

This will read `tsconfig.json` in the project root and emit compiled files (commonly into `dist/` depending on `tsconfig` settings).

3. Run the compiled JavaScript (example if outputs go to `dist`):

```bash
node dist/index.js
node dist/doctor.js
```

Or run directly with ts-node (for development):

```bash
npx ts-node src/index.ts
npx ts-node src/doctor.ts
```

## Types and important functions

- getLibrarySchedule(student: StudentLibrarian): string — returns a human-readable schedule for a student-librarian.
- retirementAge(dateOfBirth: Date | undefined, retirementAge: number): Date | undefined — computes a retirement date or returns `undefined` if date of birth is missing.
- getRetirementInfo(doctor: HospitalStaff): string — formats retirement information for a doctor using `Department` enum.

## Notes and next steps

- The project is intentionally small and focused on TypeScript typing examples. Consider adding a `package.json` with scripts for build and run (for example, a `build` script that runs `tsc` and `start` scripts to run the compiled files).
- Add unit tests (Jest or Vitest) to verify the helpers and types behave as expected.
- If you'd like, I can add a lightweight `package.json` and npm scripts, and compile the project to populate `dist/`.



