export interface Queue<T> {
    enqueue(val: T): void;
    next(): T | undefined;
    length: number;
}
export declare class QueueImpl<T> implements Queue<T> {
    length: number;
    private queue;
    constructor();
    enqueue(val: T): void;
    next(): T | undefined;
}
//# sourceMappingURL=queue.d.ts.map