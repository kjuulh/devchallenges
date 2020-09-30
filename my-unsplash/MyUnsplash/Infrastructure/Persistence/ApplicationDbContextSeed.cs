using System;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;

namespace Infrastructure
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedSampleDataAsync(ApplicationDbContext context)
        {
            if (!context.Images.Any())
            {
                for (int i = 0; i < 20; i++)
                {
                    AddImages(context);
                }
            }

            await context.SaveChangesAsync();
        }

        private static void AddImages(ApplicationDbContext context)
        {
            context.Images.Add(new Image
            {
                Id = Guid.NewGuid().ToString(),
                Description = "Beautiful XPS laptop",
                Url =
                    "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            });

            context.Images.Add(new Image
            {
                Id = Guid.NewGuid().ToString(),
                Description = "Dat candle",
                Url =
                    "https://images.unsplash.com/photo-1601469395580-139a4d365c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
            });

            context.Images.Add(new Image
            {
                Id = Guid.NewGuid().ToString(),
                Description = "Lady whom cannot be seen",
                Url =
                    "https://images.unsplash.com/photo-1601465224351-0b828b4aa039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=923&q=80"
            });

            context.Images.Add(new Image
            {
                Id = Guid.NewGuid().ToString(),
                Description = "Dat dogo",
                Url =
                    "https://images.unsplash.com/photo-1601408594761-e94d31023591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            });
        }
    }
}