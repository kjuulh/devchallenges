using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Common.Interfaces;
using Application.Common.Mappings;
using Application.Common.Models;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;

namespace Application.Resources.Images.Queries
{
    public class GetImagesWithPaginationQuery : IRequest<PaginatedList<ImageDto>>, IRequest<Unit>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
    
    public class GetImagesWithPaginationQueryHandler : IRequestHandler<GetImagesWithPaginationQuery, PaginatedList<ImageDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetImagesWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        public async Task<PaginatedList<ImageDto>> Handle(GetImagesWithPaginationQuery request, CancellationToken cancellationToken) =>
            await _context.Images
                .ProjectTo<ImageDto>(_mapper.ConfigurationProvider)
                .PaginatedListAsync(request.PageNumber, request.PageSize);
    }
}