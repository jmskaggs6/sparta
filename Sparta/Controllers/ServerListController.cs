using MediatR;
using Microsoft.AspNetCore.Mvc;
using Sparta.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sparta.Controllers
{
    [ApiController]
    public class ServerListController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ServerListController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentException(nameof(mediator));
        }

        public async Task<ActionResult<ServerListStartup>> GetServerListStart()
        {
            //var servers = await _mediator.Send(new x());

            return Ok();
        }
    }
}
