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
    public class CheckNYSCDataController : ControllerBase
    {
        

        [HttpGet]
        public IEnumerable<CheckNYSCData> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 3).Select(index => new CheckNYSCData
            {

                MyName = "Adam",
                StateOfTraining = "Lagos",
                StateCode = "LA/22b/0012",
                Age = 23,
                AccountBalance = 33800.00,
                PhoneNumber = "0801-223-2232",
                //Num1 = rng.Next(1, 100),
                // Num2 = rng.Next(1, 100),
                Addition = rng.Next(1, 100) + rng.Next(1, 100)
            })
            .ToArray();
        }

 
    }
}
