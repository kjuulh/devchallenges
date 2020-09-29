using System;
using System.Collections.Generic;
using static System.DateTimeOffset;

namespace Domain.Common
{
    public interface IHasDomainEvent
    {
        public List<DomainEvent> DomainEvents { get; set; }
    }
    
    public abstract class DomainEvent
    {
        protected DomainEvent()
        {
            DateOccurred = UtcNow;
        }

        public DateTimeOffset DateOccurred { get; protected set; }
    }
}