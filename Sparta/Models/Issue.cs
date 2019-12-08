using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Sparta.Models
{
    [Table("allissues")]
    public class Issue
    {
        [Key]
        public int IssueID { get; private set; }
        public string ServerID { get; private set; }
        public string FileName { get; private set; }
        public string FilePath { get; private set; }
        public int FileSize { get; private set; }
        public DateTime DateReceived { get; private set; }
        public string ServerIP { get; private set; }
        [NotMapped]
        public bool RecordSelected { get; private set; }
        [NotMapped]
        public string YellowBox { get; private set; }
        [NotMapped]
        public bool Expanded { get; private set; } = false;
    }

    public class IssueCount
    {
        public int issueCount { get; set; }

    }
    public class IssueYellowBox
    {
        public string ServerID { get; set; }
        public string FilePath { get; set; }
        public string YellowBox { get; set; }
    }
}
