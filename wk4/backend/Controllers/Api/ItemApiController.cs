using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Api
{
    [Route("api/items")]
    public class ItemApiController : Controller
    {
        private IItemRepository m_repo;

        public ItemApiController(IItemRepository repository)
        {
            m_repo = repository;
        }

        // GET: api/items
        [HttpGet]
        public IActionResult Get()
        {
            return Json(m_repo.GetItems());
        }

        // GET: api/items/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = m_repo.GetItem(id);

            if (item == null)
                return NotFound(id);

            return Json(item);
        }

        // POST: api/items
        [HttpPost]
        public IActionResult Post([FromBody]Item item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(item);
            }

            var result = m_repo.Create(item);
            return Json(result);
        }

        // PUT: api/items
        [HttpPut]
        public IActionResult Put([FromBody]Item item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(item);
            }

            var result = m_repo.Update(item);
            return Json(result);
        }

        // DELETE: api/items/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deletedItem = m_repo.Delete(id);
            if (deletedItem == null)
                return NotFound();

            return Json(deletedItem);
        }
    }
}