using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApi01.Core.Entities;

namespace WebApi01.Entities
{
    public class User: Timestamped
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MinLength(10)]
        [MaxLength(20)]
        public string FirstName { get; set; }
        [Required]
        [MinLength(11)]
        [MaxLength(20)]
        public string LastName { get; set; }
        [Required]
        [MinLength(11)]
        [MaxLength(30)]
        public string Username { get; set; }
        [Required]
        [MinLength(11)]
        [MaxLength(12)]
        public string Phone { get; set; }
        public bool is_active { get; set; }
        public bool is_admin { get; set; }
        public bool is_agree { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public virtual ProfileUser Profile { get; set; }
    }
}
