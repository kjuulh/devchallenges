using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Application.Common.Models
{
    public class Result
    {
        public bool Succeeded { get; set; }
        public string[] Errors { get; set; }

        internal Result(bool succeeded, IEnumerable<string> errors)
        {
            Succeeded = succeeded;
            Errors = errors.ToArray();
        }

        public static Result Success()
            => new Result(true, new string[] { });

        public static Result Failure(IEnumerable<string> errors) 
            => new Result(false, errors);
    }
}