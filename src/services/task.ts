export interface TaskDTO {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Failed = -1,
  Created = 0,
  InProgress = 1,
  Done = 2
}

export class TaskAPI {
  public static async getAll(): Promise<TaskDTO[]> {
    const resp = await fetch('url');

    const data = await resp.json();

    return data;
  }
};
