using Cataloger.Models;
using Microsoft.EntityFrameworkCore;

namespace Cataloger.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
            base(options)
        { }

        public DbSet<Item> Items { get; set; }
    }
}