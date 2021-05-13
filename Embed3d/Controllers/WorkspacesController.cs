using Embed3d.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Embed3d.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WorkspacesController : ControllerBase
    {
        private readonly ILogger<WorkspacesController> _logger;

        public WorkspacesController(ILogger<WorkspacesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<EmbedView> Get()
        {

            //Test code for the moment.

            IEnumerable<EmbedView> embedViews = new List<EmbedView>()
            {
                new EmbedView()
                {
                    Id = 1,
                    Name = "First View",
                    Description = "This is the first embedview",
                    ApplicationUser = null
                },
                new EmbedView()
                {
                    Id = 2,
                    Name = "Second View",
                    Description = "This is the second embed view",
                    ApplicationUser = null
                },
            };

            return embedViews;
        }
    }
}
