using System.Collections.Generic;
using Cataloger.Models;

namespace Cataloger.Data
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