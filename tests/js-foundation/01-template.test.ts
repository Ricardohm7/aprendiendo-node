import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {
  test('emailTemplate should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi, {{name}}');
  });

  test('emailTemplate should contain {{name}} and {{orderId}}', () => {

    //1. Arrange
    const expected = ['{{name}}', '{{orderId}}'];

    //2. Act
    const result = emailTemplate.match(/{{\w+}}/g);

    //3. Assert
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});