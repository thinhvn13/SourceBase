using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi01.Models.Users
{
    public class AuthenticateModel
    {
        [Required]
        [MinLength(10)]
        [MaxLength(12)]
        [RegularExpression(@"^(\d{10}$)|(\d{11}$)", ErrorMessage = "Please input your phone number")]
        public string Phone { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
