using Sparta.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace Sparta.Queries
{
    public class GetServerListStartup : QueryBase<ServerListStartup>
    {
        private readonly IConfiguration _configuration;
        public GetServerListStartup(IConfiguration configuration)
        {
            _configuration = configuration;
        }
    }
}
