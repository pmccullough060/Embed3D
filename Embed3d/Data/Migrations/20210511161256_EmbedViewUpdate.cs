using Microsoft.EntityFrameworkCore.Migrations;

namespace Embed3d.Data.Migrations
{
    public partial class EmbedViewUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "EmbedView",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "EmbedView");
        }
    }
}
