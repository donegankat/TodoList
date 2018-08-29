using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Data.Entities
{
    public class TodoTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}
