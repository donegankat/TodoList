using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TodoList.Data.Contexts;
using TodoList.Data.Entities;
using TodoList.Data.Repositories;
using Xunit;

namespace TodoList.UnitTests
{
    public class TodoTests
    {
        [Fact]
        public void AddTodoTasksToContext()
        {
            var builder = new DbContextOptionsBuilder<TodoContext>();
            builder.UseInMemoryDatabase("TodoDB");
            var options = builder.Options;

            using (var context = new TodoContext(options))
            {
                var todoTasks = new List<TodoTask>
                {
                    new TodoTask { Id = 1, Name = "Item1", IsComplete = true },
                    new TodoTask { Id = 2, Name = "Item2", IsComplete = true },
                };

                context.AddRange(todoTasks);
                context.SaveChanges();
            }

            using (var context = new TodoContext(options))
            {
                Assert.Equal(2, context.TodoTasks.Count());
            }
        }
    }
}
