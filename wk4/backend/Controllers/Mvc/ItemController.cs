using backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    public class ItemController : Controller
    {
        private IItemRepository m_repo;

        public ItemController(IItemRepository repository)
        {
            m_repo = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Items()
        {
            var items = m_repo.GetItems();
            return View(items);
        }
    }
}