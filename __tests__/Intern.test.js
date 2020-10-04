const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Arsene Wegner', '03', 'arsene@wenger.com', 'IWCC');
    expect(intern.name).toBe('Arsene Wegner');
    expect(intern.id).toBe('03');
    expect(intern.email).toBe('arsene@wegner.com');
    expect(intern.school).toBe('IWCC');
});

test('gets intern school', () => {
    const intern = new Intern('Arsene Wegner', '03', 'arsene@wenger.com', 'IWCC');
    expect(intern.getSchool()).toEqual(expect.stringContaining('IWCC'));
});

test('gets intern role', () => {
    const intern = new Intern('Arsene Wegner', '03', 'arsene@wenger.com', 'IWCC');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
