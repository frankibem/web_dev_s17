using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100), MinLength(1)]
        public string Title { get; set; }

        [Required]
        [MaxLength(300), MinLength(1)]
        public string Description { get; set; }

        [Required]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }
    }
}