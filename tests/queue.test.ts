import { Queue, QueueImpl } from '../src';

describe('queue tests', () => {

  let queue: Queue<number>;

  beforeEach(() => {
    queue = new QueueImpl();
  });

  it('should have a module', () => {
    expect(QueueImpl).toBeDefined();
  });

  it('should allow adding a single element and that element should be next', () => {
    queue.enqueue(3);
    expect(queue.next()).toBe(3);
  });

  it('should allow adding two elements and they should be returned in that order', () => {
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.next()).toBe(3);
    expect(queue.next()).toBe(4);
  });

  it('should allow adding n elements and they should come back in that order', () => {
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    expect(queue.next()).toBe(3);
    expect(queue.next()).toBe(4);
    expect(queue.next()).toBe(5);
    expect(queue.next()).toBe(6);
    expect(queue.next()).toBe(7);
  });

  it('should keep track of the number of elements in the queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.length).toBe(3);
  });

  it('should return undefined when there is no next element', () => {
    expect(queue.next()).toBeUndefined();
  });

})
