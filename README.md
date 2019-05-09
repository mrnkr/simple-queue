# simple-queue

### Introduction

The smallest possible implementation of a queue. Need simplicity? Here it is. 100% code coverage in tests, all alternatives I could think of are taken into consideration as well. Hence, it is as robust as it can be... (that statement may backfire, be gentle 😅)

### Quick start

The specification is the following:

```typescript
export interface Queue<T> {

  enqueue(val: T): void;
  next(): T | undefined;

  length: number;

}
```

All methods do exactly what they are meant to do in the provided implementation (QueueImpl). You may reimplement this interface, extend it, do as you wish, really.
