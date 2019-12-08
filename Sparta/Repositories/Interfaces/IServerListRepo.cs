using Sparta.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sparta.Repositories.Interfaces
{
    public interface IServerListRepo
    {
        Task<IEnumerable<ServerListStartup>> GetServerListStartUp();
    }
}
