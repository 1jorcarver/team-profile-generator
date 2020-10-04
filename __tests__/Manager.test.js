const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Jose Mourinho', '04', 'jose@mourinho.com', '4444');
    expect(manager.name).toBe('Jose Mourinho');
    expect(manager.id).toBe('04');
    expect(manager.email).toBe('jose@mourinho.com');
    expect(manager.officeNumber).toBe('4444');
});

test('gets employees role', () => {
    const manager = new Manager('Jose Mourinho', '04', 'jose@mourinho.com', '4444');
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});