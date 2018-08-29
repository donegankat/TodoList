using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoList.Data.Contexts;
using TodoList.Data.Entities;
using TodoList.Data.Repositories;
using TodoList.Models;

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly TodoContext _context;

        public TodoController(TodoContext context)
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

        [HttpGet]
        public ActionResult GetTodoTasks()
        {
            return Ok(_context.TodoTasks.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<TodoTask> GetTodoTask(int id)
        {
            var item = _context.TodoTasks.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpPost("add")]
        public ActionResult AddTodo([FromBody] TodoTask task)
        {
            _context.TodoTasks.Add(task);
            _context.SaveChanges();

            // TODO: Add error handling, check for success/fail, and return an appropriate message to the user

            return Ok(_context.TodoTasks.ToList());
        }

        [HttpPost("update")]
        public IActionResult UpdateTodo([FromBody] TodoTask task)
        {
            _context.TodoTasks.Update(task);
            _context.SaveChanges();

            // TODO: Add error handling, check for success/fail, and return an appropriate message to the user

            return Ok(_context.TodoTasks.ToList());            
        }
    }
}
