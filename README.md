# TypeScript Basics

A TypeScript learning project demonstrating **type composition**, **intersections**, **unions**, and **enums** through practical examples.

## 📁 Project Structure

```
├── tsconfig.json          # TypeScript compiler configuration
├── src/
│   ├── types.ts           # Shared type definitions and enums
│   ├── index.ts           # Student-Librarian example
│   ├── doctor.ts          # Hospital staff example
│   └── university_roles.ts # University member roles example
└── dist/                  # Compiled JavaScript output
```

## 🎯 What This Project Demonstrates

### 1. **types.ts** - Core Type Definitions

Defines reusable types and enums:
- `Person`, `Student`, `Librarian`, `Doctor` — Base and role-specific types
- `StudentLibrarian` — Intersection type (`Person & Student & Librarian`)
- `HospitalStaff` — Intersection type (`Person & Doctor`)
- `Department` — Enum for hospital departments

### 2. **index.ts** - Student-Librarian Example

Creates a student-librarian and prints their work schedule.

**Example Output:**
```
John (ID: 10) works in the library for 3 while studying for Computer Science
```

### 3. **doctor.ts** - Hospital Staff Example

Demonstrates date calculations and enum usage for hospital staff.

**Example Output:**
```
Dr. Amina (ID : 101) from Pediatrics will retire on Tue Jul 24 2063
```

### 4. **university_roles.ts** - Union Types & Multi-Role Handling

Shows how to handle objects with multiple roles using union types:
- `UniversityMember` — Union type supporting single or multiple roles
- `describeMember()` — Function with role-based conditional logic

**Example Output:**
```
Agnes is a student in Computer Science
Melisa is a teacher in the Computer Science department, teaching Data Structures and Algorithms
Anthony is a Student in Software Engineering and also teaches Foundations of Computation Science in the Computer Science department
```

## 🚀 Quick Start

### Compile TypeScript
```bash
npx tsc
```

### Run Examples
```bash
# Run compiled JavaScript
node dist/index.js
node dist/doctor.js
node dist/university_roles.js

# Or use ts-node for development
npx ts-node src/index.ts
npx ts-node src/doctor.ts
npx ts-node src/university_roles.ts
```

## 📚 Key Concepts Covered

- **Type Intersections** (`&`) — Combine multiple types
- **Type Unions** (`|`) — Allow one of several types
- **Enums** — Define named constants
- **Optional Properties** (`?`) — Make fields optional
- **Type Guards** — Runtime type checking with conditional logic
- **Function Type Signatures** — Define callable properties in types

## 🔧 Prerequisites

- Node.js (v14+)
- TypeScript (`npm install -g typescript` or use `npx`)

## 📝 License

See [LICENSE](LICENSE) file for details.
