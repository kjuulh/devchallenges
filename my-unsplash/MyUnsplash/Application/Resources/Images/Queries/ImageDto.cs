using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;

namespace Application.Resources.Images.Queries
{
    public class ImageDto : IMapFrom<Image>
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Image, ImageDto>();
        }
    }
}