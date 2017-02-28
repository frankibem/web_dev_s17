using System;
using System.Collections.Generic;
using System.Linq;
using Cataloger.Models;

namespace Cataloger.Data
{
    public class ItemRepository : IItemRepository
    {
        private ApplicationDbContext m_context;

        public ItemRepository(ApplicationDbContext context)
        {
            m_context = context;
        }

        public Item Create(Item newItem)
        {
            m_context.Add(newItem);
            m_context.SaveChanges();

            return newItem;
        }

        public Item Delete(int itemId)
        {
            var item = m_context.Items.Find(itemId);

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
            var existing = m_context.Items.Find(item.Id);

            if(existing != null)
            {
                existing.Title = item.Title;
                existing.Description = item.Description;
                existing.Price = item.Price;
                m_context.SaveChanges();
            }

            return existing;
        }
    }
}
