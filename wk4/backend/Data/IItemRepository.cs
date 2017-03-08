using System.Collections.Generic;
using backend.Models;

namespace backend.Data
{
    public interface IItemRepository
    {
        Item GetItem(int itemId);

        IEnumerable<Item> GetItems();

        Item Create(Item newItem);

        Item Update(Item item);

        Item Delete(int itemId);
    }
}