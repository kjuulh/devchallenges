using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Common.Interfaces;
using Domain.Entities;
using Domain.Events;
using MediatR;

namespace Application.Resources.Images.Commands.AddImage
{
    public class AddImageCommand : IRequest<string>
    {
        public string Url { get; set; }
        public string Description { get; set; }
    }
    
    public class AddImageCommandHandler : IRequestHandler<AddImageCommand, string>
    {
        private readonly IApplicationDbContext _context;

        public AddImageCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        
        public async Task<string> Handle(AddImageCommand request, CancellationToken cancellationToken)
        {
            var entity = new Image
            {
                Id = Guid.NewGuid().ToString(),
                Url = request.Url,
                Description = request.Url 
            };

            entity.DomainEvents.Add(new ImageAddedEvent(entity));

            _context.Images.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}