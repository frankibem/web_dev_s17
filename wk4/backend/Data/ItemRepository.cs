using System.Collections.Generic;
using System.Linq;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class ItemRepository : IItemRepository
    {
        private AppDbContext m_context;

        public ItemRepository(AppDbContext context)
        {
            m_context = context;
        }

        public Item Create(Item newItem)
        {
            m_context.Items.Add(newItem);
            m_context.SaveChanges();

            return newItem;
        }

        public Item Delete(int itemId)
        {
            var item = GetItem(itemId);

            if(item != null)
            {
                m_context.Items.Remove(item);
                m_context.SaveChanges();
            }

            return item;
        }

        public Item GetItem(int itemId)
        {
            return m_context.Items.Find(itemId);
        }

        public IEnumerable<Item> GetItems()
        {
            return m_context.Items.ToList();
        }

        public Item Update(Item item)
        {
            var existing = GetItem(item.Id);

            if(existing != null)
            {
                existing.Title = item.Title;
                existing.Description = item.Description;
                existing.Price = item.Price;

                m_context.Entry(existing).State = EntityState.Modified;
                m_context.SaveChanges();
            }

            return existing;
        }
    }
}