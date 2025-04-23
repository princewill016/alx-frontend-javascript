export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) return [];
  // First filter by city
  const inCity = students.filter(student => student.location === city);
  // Then map and attach grade
  return inCity.map(student => {
    const gradeEntry = newGrades.find(g => g.studentId === student.id);
    return {
      ...student,
      grade: gradeEntry ? gradeEntry.grade : 'N/A',
    };
  });
}

