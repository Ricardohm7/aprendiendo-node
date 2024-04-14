import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory', () => {
  test('buildMakePerson should return a function', () => {
    const result = buildMakePerson({ getAge: () => 1, getUUID: () => '1' });
    expect(result).toBeInstanceOf(Function);
  });

  test('buildMakePerson should return a person object', () => {
    const result = buildMakePerson({ getAge: () => 1, getUUID: () => '1' });
    const person = result({ name: 'John', birthdate: '1985-10-21' });
    expect(person).toEqual({ id: '1', name: 'John', birthdate: '1985-10-21', age: 1 });
  });
});