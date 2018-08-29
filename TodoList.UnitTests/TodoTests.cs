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
        public void Test1()
        {
            var builder = new DbContextOptionsBuilder<TodoContext>();
            builder.UseInMemoryDatabase();
            var options = builder.Options;

            using (var context = new TodoContext(options))
            {
                var todoTasks = new List<TodoTask>
                {
                    new TodoTask { Id= 1, Name = "Tanzim Saqib", IsComplete = true },
                    new TodoTask { Id= 2, Name = "Fiyaz Hasan", IsComplete = true },
                    new TodoTask { Id= 3, Name = "Jon Doe", IsComplete = false },
                    new TodoTask { Id= 4, Name = "Jane DOe", IsComplete = false }
                };

                context.AddRange(todoTasks);
                context.SaveChanges();
            }

            using (var context = new TodoContext(options))
            {
                var repository = new TodoRepository(context);
                var todoTasks = repository.GetTasks();
                Assert.Equal(2, todoTasks.Count());
            }
        }
    }
}
