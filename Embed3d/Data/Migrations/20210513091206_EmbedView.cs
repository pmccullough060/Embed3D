using Microsoft.EntityFrameworkCore.Migrations;

namespace Embed3d.Data.Migrations
{
    public partial class EmbedView : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "EmbedView");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "EmbedView",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
