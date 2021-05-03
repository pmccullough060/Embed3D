using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Embed3d.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<EmbedView> EmbedView { get; set; }
    }
}
