using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi01.Migrations
{
    public partial class addNewFieldUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "is_agree",
                table: "Users",
                nullable: false,
                defaultValue: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "is_agree",
                table: "Users");
        }
    }
}
