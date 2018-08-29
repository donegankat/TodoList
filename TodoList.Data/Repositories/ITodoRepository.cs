using System;
using System.Collections.Generic;
using System.Text;
using TodoList.Data.Entities;

namespace TodoList.Data.Repositories
{
    public interface ITodoRepository
    {
        List<TodoTask> GetTasks();
        TodoTask GetTask(int id);
        TodoTask Add(TodoTask task);
        TodoTask Update(TodoTask task);
    }
}
