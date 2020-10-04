const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Pep Guardiola', '01', 'pep@guardiola.com');
  expect(employee.name).toBe('Pep Guardiola');
  expect(employee.id).toBe('01');
  expect(employee.email).toBe('pep@guardiola.com');
});

test('gets employees name', () => {
    const employee = new Employee('Pep Guardiola', '01', 'pep@guardiola.com');
    expect(employee.getName()).toEqual(expect.stringContaining('Pep Guardiola'));
});

test('gets employees id', () => {
    const employee = new Employee('Pep Guardiola', '01', 'pep@guardiola.com');
    expect(employee.getId()).toEqual(expect.stringContaining('01'));
});

test('gets employees email', () => {
    const employee = new Employee('Pep Guardiola', '01', 'pep@guardiola.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('pep@guardiola.com'));
});

test('gets employees role', () => {
    const employee = new Employee('Pep Guardiola', '01', 'pep@guardiola.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});