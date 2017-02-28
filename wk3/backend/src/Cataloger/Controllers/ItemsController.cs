using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cataloger.Data;
using Cataloger.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Cataloger.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        private readonly IItemRepository m_repo;

        public ItemsController(IItemRepository itemRepository)
        {
            m_repo = itemRepository;
        }

        // GET: api/items
        [HttpGet]
        public IActionResult Get()
        {
            return Json(m_repo.GetItems());
        }

        // GET api/items/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = m_repo.GetItem(id);

            if(item == null)
                return NotFound(id);
            else
                return Json(item);
        }

        // POST api/items
        [HttpPost]
        public IActionResult Post([FromBody]Item item)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            m_repo.Create(item);
            return CreatedAtAction("get", item.Id, item);
        }

        // PUT api/items/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody]Item item)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            m_repo.Update(item);
            return Json(item);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deletedItem = m_repo.Delete(id);
            if(deletedItem == null)
                return NotFound();

            return Json(deletedItem);
        }
    }
}