import { Observable, of } from 'rxjs';

// of('Alice', 'Ben', 'Charlie').subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

const name$ = new Observable<string>((subscriber) => {
  subscriber.next('Alice');
  subscriber.next('Bend');
  subscriber.next('Charlie');
});

name$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
