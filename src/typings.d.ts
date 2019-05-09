export interface Queue<T> {

  enqueue(val: T): void;
  next(): T | undefined;

  length: number;

}
