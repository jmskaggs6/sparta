using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sparta.Models
{
    public class ServerListLocal
    {
        [Key]
        public string ServerID { get; set; }
        public DateTime LocalChanged { get; set; }
        public bool? OKnoAdvOE { get; set; }
        public string OknoAdvOEwhy { get; set; }
        public bool? OKnoAdvServ { get; set; }
        public string OKnoAdvServWhy { get; set; }
        public bool? OKlapsed { get; set; }
        public string OKlapsedWhy { get; set; }
        public string pcAnywhereName { get; set; }
        public int? TZDiff { get; set; }
        public string WinLogon { get; set; }
        public string WinPassword { get; set; }
        public string WinDomain { get; set; }
        public string PCAPassword { get; set; }
        public string VPN { get; set; }
        public string VPNConnect { get; set; }
        public string VPNUser { get; set; }
        public string VPNPassword { get; set; }
        public string Email1 { get; set; }
        public string Email2 { get; set; }
        public string Email3 { get; set; }
        public string Email4 { get; set; }

    }
}
