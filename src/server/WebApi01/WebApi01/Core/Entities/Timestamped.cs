using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi01.Core.Entities
{
    public class Timestamped
    {
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public Timestamped()
        {
            this.CreatedDate = DateTime.UtcNow;
            this.ModifiedDate = DateTime.UtcNow;
        }
    }
}
