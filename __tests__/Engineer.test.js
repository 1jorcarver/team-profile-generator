const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Alex Ferguson', '02', 'alex@ferguson.com', 'siralex')
    expect(engineer.name).toBe('Alex Ferguson');
    expect(engineer.id).toBe('02');
    expect(engineer.email).toBe('alex@ferguson.com');
    expect(engineer.github).toBe('siralex');
});

test('gets engineers GitHub username', () => {
    const engineer = new Engineer ('Alex Ferguson', '02', 'alex@ferguson.com', 'siralex')
    expect(engineer.getGithub()).toEqual(expect.stringContaining('siralex'));
});

test('gets engineers role', () => {
    const engineer = new Engineer ('Alex Ferguson', '02', 'alex@ferguson.com', 'siralex')
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});