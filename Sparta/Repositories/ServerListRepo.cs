using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Sparta.Models;
using Sparta.Repositories.Interfaces;

namespace Sparta.Repositories
{
    public class ServerListRepo : IServerListRepo
    {
        private readonly ILogger<ServerListRepo> _logger;
        private readonly string _sqlConnString;
        public ServerListRepo(ILogger<ServerListRepo> logger, IConfiguration configuration)
        {
            _logger = logger;
            if (configuration.GetConnectionString("Support") != null)
                _sqlConnString = configuration.GetConnectionString("Support");
            else
                _sqlConnString = "Server=10.45.47.22;Database=AdvServSupportV2;User id=sa;Password=#P@tr10t$#";
        }
        
        public async Task<IEnumerable<ServerListStartup>> GetServerListStartUp()
        {
            try
            {
                using (IDbConnection conn = new SqlConnection(_sqlConnString))
                {
                    conn.Open();
                    _logger.LogDebug($"Started getting ServerListStartup");
                    var servers = await conn.QueryAsync<ServerListStartup>("select * from vwServerListComplete");
                    _logger.LogDebug($"Finished getting ServerListStartup");
                    return servers;
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Error getting ServerListStartup, returning empty");
                return new List<ServerListStartup>();
            }
        }
    }
}
