using System;
using Application.Common.Interfaces;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services) =>
            services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseInMemoryDatabase(typeof(ApplicationDbContext).Assembly.FullName ??
                                                throw new InvalidOperationException()))
                .AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>())
                .AddScoped<IDomainEventService, DomainEventService>()
                .AddTransient<IDateTime, DateTimeService>();
    }
}