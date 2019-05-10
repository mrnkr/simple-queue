export interface Queue<T> {

  enqueue(val: T): void;
  next(): T | undefined;

  length: number;

}

export class QueueImpl<T> implements Queue<T> {

  public length: number;
  private queue: T[];

  constructor() {
    this.length = 0;
    this.queue = [];
  }

  public enqueue(val: T): void {
    this.length = this.length + 1;
    this.queue = [val, ...this.queue];
  }

  public next(): T | undefined {
    this.length = this.length - 1;
    return this.queue.pop();
  }

}
