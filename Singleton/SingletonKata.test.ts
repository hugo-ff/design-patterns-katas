import SingletonKata from './SingletonKata';

describe('Singleton Pattern', () => {
  it('should create only one instance of Singleton', () => {
    const instance1 = SingletonKata.getInstance();
    const instance2 = SingletonKata.getInstance();

    expect(instance1).toBe(instance2);
  });
});