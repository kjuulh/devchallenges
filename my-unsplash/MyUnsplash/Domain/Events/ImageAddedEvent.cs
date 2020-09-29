using Domain.Common;
using Domain.Entities;

namespace Domain.Events
{
    public class ImageAddedEvent : DomainEvent
    {
        public ImageAddedEvent(Image item)
        {
            Item = item;
        }

        public Image Item { get; }
    }
}