using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime? Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // Get the activity from the db
                var activity = await _context.Activities.FindAsync(request.Id);

                // Error out if the activity can't be found
                if (activity == null)
                    throw new Exception("Could not find activity");

                // Cater for if only some, not all, of the properties are being updated
                activity.Title = request.Title ?? activity.Title;
                activity.Description = request.Description ?? activity.Description;
                activity.Category = request.Category ?? activity.Category;
                activity.Date = request.Date ?? activity.Date;
                activity.City = request.City ?? activity.City;
                activity.Venue = request.Venue ?? activity.Venue;

                // Create success variable if anything was updated
                var success = await _context.SaveChangesAsync() > 0;

                // If updated, pass the success variable back so the API can return a 200
                if (success) return Unit.Value;

                // If nothing was updated, throw an exception
                throw new Exception("Problem saving changes");
            }
        }
    }
}