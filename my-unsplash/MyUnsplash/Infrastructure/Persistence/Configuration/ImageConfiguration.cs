using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration
{
    public class ImageConfiguration : IEntityTypeConfiguration<Image>
    {
        public void Configure(EntityTypeBuilder<Image> builder)
        {
            builder.Ignore(e => e.DomainEvents);
            
            builder
                .Property(i => i.Url)
                .IsRequired();
         
            builder
                .Property(i => i.Description)
                .HasMaxLength(200)
                .IsRequired();   
        }
    }
}