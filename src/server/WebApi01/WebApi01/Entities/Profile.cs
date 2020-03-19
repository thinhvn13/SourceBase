using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApi01.Core.Entities;

namespace WebApi01.Entities
{
    public class ProfileUser : Timestamped
    {
        [ForeignKey("User")]
        public int UserId { get; set; }
        [Key]
        public int Id { get; set; }
        [StringLength(1000)]
        public string Bio{ get; set; }
        [StringLength(200)]
        public string Image{ get; set; }
        [StringLength(2)]
        [DefaultValue("VN")]
        public string Lang { get; set; }
    
        public virtual User User{ get; set; }
    }
}
