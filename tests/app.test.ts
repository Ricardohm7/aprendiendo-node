describe('App', () => {
  it('should be true', () => {

    //1. Arrange
    const num = 10;
    const num2 = 20;
    //2. Act
    const result = num + num2;
    //3. Assert
    expect(result).toBe(30);
  })
})