using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sparta.Models
{
    public class ServerListContext : DbContext
    {
        public ServerListContext(DbContextOptions<ServerListContext> options) : base(options) { }

        public virtual DbSet<Issue> Issues { get; set; }
        public virtual DbSet<ServerListStartup> ServerList { get; set; }
        
        public virtual DbSet<ServerListLocal> ServerListLocals { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
