import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
  describe('getUserById', () => {
    it('should return user with id 1', (done) => {
      getUserById(1, (err, user) => {
        expect(err).toBeUndefined();
        expect(user).toEqual({ id: 1, name: 'John Doe' });
        done();
      });
    });

    it('should return user with id 2', (done) => {
      getUserById(2, (err, user) => {
        expect(err).toBeUndefined();
        expect(user).toEqual({ id: 2, name: 'Jane Doe' });
        done();
      });
    });

    it('should return error if user is not found', (done) => {
      const id = 3;
      getUserById(id, (err, user) => {
        expect(err).toBe(`User not found with id ${id}`);
        expect(user).toBeUndefined();
        done();
      });
    });
  });
});