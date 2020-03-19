using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi01.Models.Users
{
    public class RegisterModel
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public bool is_agree{ get; set; }

        [Required]
        [MinLength(10)]
        [MaxLength(12)]
        [RegularExpression(@"^(\d{10}$)|(\d{11}$)", ErrorMessage = "Please input your phone number")]
        public string Phone { get; set; }
        [DefaultValue("true")]
        public bool is_active { get; set; }
    }
}
