using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebApi01.Entities;

namespace WebApi01.Helpers
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server database
            options.UseSqlServer(Configuration.GetConnectionString("WebApiDatabase"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //User 
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Phone).IsUnique();
            modelBuilder.Entity<User>()
               .Property(u => u.is_active).HasDefaultValue(true);
            modelBuilder.Entity<User>()
               .Property(u => u.is_admin).HasDefaultValue(false);
            modelBuilder.Entity<User>()
               .Property(u => u.is_agree).HasDefaultValue(true);

            //Profile User
            modelBuilder.Entity<ProfileUser>()
               .Property(pu => pu.Lang).HasDefaultValue("VN");
        }
        public DbSet<User> Users { get; set; }
    }
}
