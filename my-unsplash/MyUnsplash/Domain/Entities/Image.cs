using System.Collections.Generic;
using Domain.Common;

namespace Domain.Entities
{
    public class Image : IHasDomainEvent
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public List<DomainEvent> DomainEvents { get; set; } = new List<DomainEvent>();
    }
}