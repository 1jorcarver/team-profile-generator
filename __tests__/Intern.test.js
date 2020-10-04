const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Arsene Wenger', '03', 'arsene@wenger.com', 'IWCC');
    expect(intern.name).toBe('Arsene Wenger');
    expect(intern.id).toBe('03');
    expect(intern.email).toBe('arsene@wenger.com');
    expect(intern.school).toBe('IWCC');
});

test('gets intern school', () => {
    const intern = new Intern('Arsene Wenger', '03', 'arsene@wenger.com', 'IWCC');
    expect(intern.getSchool()).toEqual(expect.stringContaining('IWCC'));
});

test('gets intern role', () => {
    const intern = new Intern('Arsene Wenger', '03', 'arsene@wenger.com', 'IWCC');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
