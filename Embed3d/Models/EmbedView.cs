﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Embed3d.Models
{
    public class EmbedView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
