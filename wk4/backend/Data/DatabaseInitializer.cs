using backend.Models;

namespace backend.Data
{
    public static class DatabaseInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            // Create the database if it doesn't exist
            if (!context.Database.EnsureCreated())
                return;

            // Create dummy array of items
            var items = new Item[]
            {
                new Item { Title = "Item 1", Description = "Item 1 Desc.", Price = 200m },
                new Item { Title = "Item 2", Description = "Item 2 Desc.", Price = 200m },
                new Item { Title = "Item 3", Description = "Item 3 Desc.", Price = 200m },
                new Item { Title = "Item 4", Description = "Item 4 Desc.", Price = 200m },
                new Item { Title = "Item 5", Description = "Item 5 Desc.", Price = 200m },
            };

            // Add items and save
            context.Items.AddRange(items);
            context.SaveChanges();
        }
    }
}