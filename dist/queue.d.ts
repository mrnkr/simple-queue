export interface Queue<T> {
    enqueue(val: T): void;
    next(): T | undefined;
    length: number;
}
export declare class QueueImpl<T> implements Queue<T> {
    private queue;
    constructor();
    enqueue(val: T): void;
    next(): T | undefined;
    readonly length: number;
}
//# sourceMappingURL=queue.d.ts.map