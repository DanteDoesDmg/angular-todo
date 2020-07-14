import { Task, priorityString } from './task';

type compareType = Date | number;
export function compare(a: compareType, b: compareType) {
  /**
   * @summary Funkcja porównująca 2 wartości, używana do sortowania tabel
   *
   */
  if (a > b) return 1;
  if (b > a) return -1;

  return 0;
}

export function comparePriorities(a: priorityString, b: priorityString) {
  /**
   * @summary funkcja porównująca priorytety, używana przy sortowaniu tabel obiektów Task
   */
  switch (a) {
    case 'high':
      if (b !== 'high') {
        return -1;
      }
      return 0;
    case 'low':
      if (b !== 'low') {
        return 1;
      }
      return 0;
    default:
      if (b === 'high') {
        return 1;
      } else if (b === 'normal') {
        return 0;
      }
      return -1;
  }
}

export function sortTasksByPriorityAndDate(tasks: Array<Task>): Array<Task> {
  /**
   * @description funkcja zwraca posortowaną tabelę obiektów Task.
   *  Sortowanie następuje według:
   *  1. priorytetu high > normal > low
   *  2. Daty
   */
  return tasks.sort((prev, next) => {
    if (prev.priority == next.priority) {
      return compare(new Date(prev.date), new Date(next.date));
    }
    return comparePriorities(prev.priority, next.priority);
  });
}

export function sortByDate(tasks: Array<Task>) {
  /**
   * @summary Funkcja zwraca posortowaną według daty tabelę obiektów Task
   */
  return tasks.sort((prev, next) =>{
    if(prev.date === null){
      if(next.date=== null){
        return 0
      } 
      return 1
    }else{
      compare(new Date(prev.date), new Date(next.date))
    }
  }
  );
}
