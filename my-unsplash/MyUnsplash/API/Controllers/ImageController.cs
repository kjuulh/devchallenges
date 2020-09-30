using System.Threading.Tasks;
using Application.Common.Models;
using Application.Resources.Images.Commands.AddImage;
using Application.Resources.Images.Queries;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ImageController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<PaginatedList<ImageDto>>> GetImagesWithPagination(
            [FromQuery] GetImagesWithPaginationQuery query) =>
            await Mediator.Send(query);

        [HttpPost]
        public async Task<ActionResult<string>> Add(AddImageCommand command) => await Mediator.Send(command);
    }
}