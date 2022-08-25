using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NYSCWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DontDisturbMeController : ControllerBase
    {
    
        
        [HttpGet]
        public IEnumerable<DontDisturbMe> Get()
        {
 
            return Enumerable.Range(1, 3).Select(index => new DontDisturbMe
            {
       
                myName = "Adam",
                Course = "API Design"
            })
            .ToArray();
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
