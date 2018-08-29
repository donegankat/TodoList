using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoList.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }

        public TodoItem()
        {

        }

        public TodoItem(string name)
        {
            Name = name;
            IsComplete = false; // New tasks should start as incomplete
        }
    }
}
