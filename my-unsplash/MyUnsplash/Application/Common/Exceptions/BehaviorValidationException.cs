using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using FluentValidation.Results;

namespace Application.Common.Exceptions
{
    public class BehaviorValidationException : Exception
    {
        public BehaviorValidationException() : base("One or more validatoon failures have occurred")
        {
            Errors = new Dictionary<string, string[]>();
        }

        public BehaviorValidationException(IEnumerable<ValidationFailure> failures) : this()
        {
            Errors = failures.GroupBy(e => e.PropertyName, e => e.ErrorMessage)
                .ToDictionary(failureGroup => failureGroup.Key, failureGroup => failureGroup.ToArray());
        }

        public Dictionary<string, string[]> Errors { get; }
    }
}