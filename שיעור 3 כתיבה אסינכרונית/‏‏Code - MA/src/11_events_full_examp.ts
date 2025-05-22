import { EventEmitter } from 'events'; 
  
class Queue<T> extends EventEmitter { 
    private items: T[] = []; 
  
    enqueue(item: T): void { 
        this.items.push(item);    
    } 
  
    dequeue(): T | undefined { 
        if(this.items.length>0)
            return this.items.shift(); 
    } 
} 
  
class Producer { 
    constructor(private queue: Queue<string>) {} 
  
    startProducing(): void { 
        let count = 0; 
        const interval = setInterval(() => { 
           // count++; 
 
           
            this.queue.enqueue(`pen ${count++}`); 
            console.log(`Adding pen ${count}`) 
            this.queue.enqueue(`pen ${count++}`); 
            console.log(`Adding pen ${count}`) 
            this.queue.emit('itemAdded'); 
            if (count === 10) { 
                clearInterval(interval); 
            } 
        }, 1000); 
    } 
} 
  
class Consumer { 
    constructor(private queue: Queue<string>, private index: number) { 
        this.queue.on('itemAdded', () => { 
            this.processItem(); 
        }); 
    } 
  
    private processItem(): void { 
        const item = this.queue.dequeue(); 
        console.log(`[${this.index}] Handling ${item}`); 
    } 
} 
const queue = new Queue<string>(); 
const producer = new Producer(queue); 
const consumer = new Consumer(queue, 1); 
const consumer2 = new Consumer(queue,2); 
producer.startProducing();