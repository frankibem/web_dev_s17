using System.ComponentModel.DataAnnotations;

namespace Cataloger.Models
{
    public class Item
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 100, MinimumLength = 1)]
        public string Title { get; set; }

        [StringLength(maximumLength: 200, MinimumLength = 1)]
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}