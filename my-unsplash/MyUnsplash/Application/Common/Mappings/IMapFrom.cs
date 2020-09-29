using AutoMapper;

namespace Application.Common.Mappings
{
    public class IMapFrom<T>
    {
        void Mapping(Profile profile) => profile.CreateMap(typeof(T), GetType());
    }
}