export interface Queue<T> {

  enqueue(val: T): void;
  next(): T | undefined;

  length: number;

}

export class QueueImpl<T> implements Queue<T> {

  private queue: T[];

  constructor() {
    this.queue = [];
  }

  public enqueue(val: T): void {
    this.queue = [val, ...this.queue];
  }

  public next(): T | undefined {
    return this.queue.pop();
  }

  public get length(): number {
    return this.queue.length;
  }

}
