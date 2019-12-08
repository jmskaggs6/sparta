using Microsoft.AspNetCore.Mvc;
using Sparta.Models;
using Sparta.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sparta.Controllers
{
    [ApiController]
    public class ServerListController : ControllerBase
    {
        private readonly IServerListRepo _serverListRepo;
        public ServerListController(IServerListRepo serverListRepo)
        {
            _serverListRepo = serverListRepo ?? throw new ArgumentException(nameof(serverListRepo));

        }

        public async Task<ActionResult<ServerListStartup>> GetServerListStart()
        {
            var servers = await _serverListRepo.GetServerListStartUp();
            return Ok(servers);
        }
    }
}
