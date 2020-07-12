type statusString = 'todo' | 'inProgress' | 'done';
type priorityString = 'high' | 'normal' | 'low';

interface task {
  name: string;
  date?: string;
  description?: string;
  status?: statusString;
  priority?: priorityString;
}

export class Task {
  date: string;
  description: string;
  name: string;
  status: statusString;
  priority: priorityString;

  constructor(task: task) {
    this.name = task.name;
    this.date = task.date || '-';
    this.status = task.status || 'todo';
    this.priority = task.priority || 'normal';
    this.description = task.description;
  }
}
