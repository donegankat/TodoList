using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TodoList.Data.Contexts;
using TodoList.Data.Entities;

namespace TodoList.Data.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        private TodoContext _context;

        public TodoRepository(TodoContext context)
        {
            _context = context;

            if (_context.TodoTasks.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.TodoTasks.Add(new TodoTask { Name = "Item1" });
                _context.SaveChanges();
            }
        }

        public List<TodoTask> GetTasks()
        {
            return _context.TodoTasks.ToList();
        }

        public TodoTask GetTask(int id)
        {
            return _context.TodoTasks.Where(task => task.Id == id).FirstOrDefault();
        }

        public TodoTask Add(TodoTask task)
        {
            _context.TodoTasks.Add(task);
            _context.SaveChanges();

            return task;
        }

        public TodoTask Update(TodoTask task)
        {
            _context.TodoTasks.Update(task);
            _context.SaveChanges();

            return task;
        }
    }
}
