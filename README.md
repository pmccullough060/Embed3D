# Embed3D

## Local Development Setup
### Running the code
You'll need Node.js and the .NET Desktop Runtime 5.x.x, I use the Visual Studio Community 2019 IDE.

### Database
This project uses code first migrations with Entity Framework and a PostgreSQL database. I opt to run the PostgreSQL instance inside a Docker container locally.

At the command prompt:

```console
   docker run --name myContainerName -e POSTGRES_PASSWORD=myPassword -p 5432:5432 -d postgres
```

We know have an instance of PostgreSQL running in a docker container, After connecting to the database (**User**: postgres, **Password**: myPassword) and creating a new user we can update the **appsettings.Development.json** to the following:

```json
  "ConnectionStrings": {
    "PostgreSqlConnection": "User ID=databaseUserName;Password=databasePassword;Host=localhost;Port=5432;Database=embed3d;Pooling=true;"
  }
```

Next, at the command prompt:

```console
   dotnet ef migrations add MigrateUsersToDB
```

If this command has ran sucessfully a folder called "Migrations" should now be visible in the project directory.

To create the new tables in the database enter for following at the command prompt:

```console
   dotnet ef database update
```
All done!
