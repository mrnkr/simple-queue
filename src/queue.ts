import { Queue } from './typings';

export class QueueImpl<T> implements Queue<T> {

  public readonly length: number;
  private queue: T[];

  constructor() {
    this.length = 0;
    this.queue = [];
  }

  public enqueue(val: T): void {
    this.queue = [ val, ...this.queue ];
  }

  public next(): T | undefined {
    return this.queue.pop();
  }

}
