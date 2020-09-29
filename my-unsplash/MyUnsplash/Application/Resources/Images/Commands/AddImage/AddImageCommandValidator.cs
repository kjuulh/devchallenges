using FluentValidation;

namespace Application.Resources.Images.Commands.AddImage
{
    public class AddImageCommandValidator : AbstractValidator<AddImageCommand>
    {
        public AddImageCommandValidator()
        {
            RuleFor(v => v.Url)
                .NotEmpty();

            RuleFor(v => v.Description)
                .MinimumLength(5)
                .NotEmpty()
                .MaximumLength(200);
        }
    }
}