using Microsoft.AspNetCore.Authentication.Cookies;
using OnlineShop.Models.Db;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<OnlineShopContext>();
//---------------------
builder.Services.AddSession();
builder.Services.AddHttpContextAccessor();
//---------------------
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
        .AddCookie(options =>
        {
            options.LoginPath = "/Account/Login";
            options.LogoutPath = "/Account/logout";
        });

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "http://localhost:3000") // Add both common React ports
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials(); // Important for cookies
        });
});

//---------------------
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();
app.UseCors("ReactApp");
app.UseRouting();
//------------------------
app.UseAuthentication();
app.UseAuthorization();
//------------------------
app.UseSession();
//------------------------
app.MapControllerRoute(
    name: "Admin",
    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "User",
    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
