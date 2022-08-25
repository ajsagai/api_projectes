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
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing2", "Bracing2", "Chilly2", "Cool2", "Mild2", "Warm2", "Balmy2", "Hot2", "Sweltering2", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 3).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                 TemperatureC = rng.Next(-20, 55),
                 Summary = Summaries[rng.Next(Summaries.Length)]
                
            })
            .ToArray();
        }
    }
}
