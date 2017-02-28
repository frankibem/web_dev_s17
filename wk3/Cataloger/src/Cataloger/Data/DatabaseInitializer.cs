using System;
using Cataloger.Models;

namespace Cataloger.Data
{
    public static class DatabaseInitializer
    {
        // Seed the database with dummy items
        public static void Initialize(IServiceProvider serviceProvider, ApplicationDbContext context)
        {
            if(!context.Database.EnsureCreated())
                return;

            var items = new Item[]
            {
                new Item { Title = "Item 1", Description = "Item 1 Desc.", Price = 200m },
                new Item { Title = "Item 2", Description = "Item 2 Desc.", Price = 200m },
                new Item { Title = "Item 3", Description = "Item 3 Desc.", Price = 200m },
                new Item { Title = "Item 4", Description = "Item 4 Desc.", Price = 200m },
                new Item { Title = "Item 5", Description = "Item 5 Desc.", Price = 200m }
            };

            context.Items.AddRange(items);
            context.SaveChanges();
        }
    }
}