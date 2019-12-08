using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sparta.Models
{
    public class ServerListVersions
    {
        [Key]
        public string ServerId { get; set; }
        public string EISV { get; set; }
        public string EISLocalV { get; set; }
        public string GetDataV { get; set; }
        public string AdvantageServerV { get; set; }
        public string CPRV { get; set; }
        public string PaServV { get; set; }
        public string AdvOEV { get; set; }
        public string OrderApprovalV { get; set; }
        public string PAUSetup { get; set; }
        public string SecurityAdminV { get; set; }
        public string PockAdvV { get; set; }
        public string AdvServV { get; set; }
        public string AdvOEServV { get; set; }
        public string InvMonitorServV { get; set; }
        public string AWSServV { get; set; }
        public DateTime? LastUpdated { get; set; }
        public string DotNet { get; set; }
    }
}
