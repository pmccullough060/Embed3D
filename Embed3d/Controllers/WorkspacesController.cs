using Embed3d.Data;
using Embed3d.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Embed3d.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WorkspacesController : ControllerBase
    {
        private readonly ILogger<WorkspacesController> _logger;
        private readonly ApplicationDbContext _context;

        public WorkspacesController(ILogger<WorkspacesController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<EmbedView> Get()
        {            
            string nameIdentifier = User.FindFirstValue(ClaimTypes.NameIdentifier); //Getting the id of the current user for the claim

            ApplicationUser user = _context.Users //retrieving the current user from the database using an ef query
                .Include(x => x.EmbedView)
                .First(y => y.Id == nameIdentifier);

            return user.EmbedView;
        }

        [HttpPost]
        public IActionResult Post()
        {
            return new OkObjectResult("Updated Embed View");
        }

        [HttpDelete]
        public IActionResult Delete(string embedView)
        {
            return new OkObjectResult("Deleted Embed View");
        }
    }
}
