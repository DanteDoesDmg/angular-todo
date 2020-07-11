type statusString = 'todo' | 'inProgress' | 'done';
type priorityString = 'high' | 'normal' | 'low';

export class Task {
  date: string;
  description: string;
  name: string;
  status: statusString;
  priority: priorityString;
  constructor(
    name,
    description = '',
    date?: string,
    status?: statusString,
    priority?: priorityString
  ) {
    this.name = name;
    this.date = date || '-';
    this.status = status || 'todo';
    this.priority = priority || 'normal';
    this.description = description;
  }
}
