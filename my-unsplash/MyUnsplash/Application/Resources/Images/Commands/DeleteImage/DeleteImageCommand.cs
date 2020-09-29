using System.Threading;
using System.Threading.Tasks;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Resources.Images.Commands.DeleteImage
{
    public class DeleteImageCommand : IRequest
    {
        public string Id { get; set; }
    }

    public class DeleteImageCommandHandler : IRequestHandler<DeleteImageCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteImageCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteImageCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Images.FindAsync(request.Id);

            if (entity == null)
                throw new NotFoundException(nameof(Image), request.Id);

            _context.Images.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}