export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }
  set name(val) { this._name = val; }

  get length() { return this._length; }
  set length(val) { this._length = val; }

  get students() { return this._students; }
  set students(val) { this._students = val; }
}

