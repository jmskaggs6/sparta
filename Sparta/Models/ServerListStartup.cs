using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace Sparta.Models
{
    [Table("vwServerListComplete")]
    public class ServerListStartup
    {
        public ServerListStartup()
        {
            Issues = new List<Issue>();
        }

        #region Mapped properties
        [Key]
        public string ServerID { get; set; }
        [Column("vSent")]
        public DateTime? VersionSent { get; set; }
        public int? TZDiff { get; set; }
        public string SnapShot { get; set; }
        public DateTime? LastTry { get; set; }
        public DateTime? LastGood { get; set; }
        public int? AdvServerID { get; set; }
        public DateTime? LastCheckIn { get; set; }
        public string ServerIP { get; set; }
        public string PaServIP { get; set; }
        public int? AdvServerCategoryID { get; set; }
        public bool? YellowBox { get; set; }
        public string DaysOld { get; set; }
        #endregion
        #region Versions
        [Column("vAdvServService")]
        public string AdvServiceV { get; set; }
        [NotMapped]
        public int nAdvServiceV
        {
            get
            {
                return NormalizeVersion(AdvServiceV ?? "");
            }
        }
        [Column("vAdvCPRv")]
        public string CprV { get; set; }
        [NotMapped]
        public int NcprV
        {
            get
            {
                return NormalizeVersion(CprV ?? "");
            }
        }
        [Column("vAdvServerv")]
        public string AdvantageServerV { get; set; }
        [NotMapped]
        public int nAdvServerV
        {
            get
            {
                return NormalizeVersion(AdvantageServerV ?? "");
            }
        }
        [Column("vPaServ")]
        public string PaServV { get; set; }
        [NotMapped]
        public int nPaServV
        {
            get
            {
                return NormalizeVersion(PaServV ?? "");
            }
        }
        [Column("vAdvEIS")]
        public string vAdvEIS { get; set; }
        [NotMapped]
        public int nvAdvEIS
        {
            get
            {
                return NormalizeVersion(vAdvEIS ?? "");
            }
        }

        [Column("vAWSServ")]
        public string vAWSServ { get; set; }
        [NotMapped]
        public int nvAWSServ
        {
            get
            {
                return NormalizeVersion(vAWSServ ?? "");
            }
        }

        [Column("vAdvOE")]
        public string vAdvOE { get; set; }
        [NotMapped]
        public int nvAdvOEV
        {
            get
            {
                return NormalizeVersion(vAdvOE ?? "");
            }
        }

        [Column("vAdvEIS_l")]
        public string vAdvEIS_l { get; set; }
        [NotMapped]
        public int nvAdvEIS_l
        {
            get
            {
                return NormalizeVersion(vAdvEIS_l ?? "");
            }
        }

        [Column("vGetData")]
        public string vGetData { get; set; }
        [NotMapped]
        public int nvGetData
        {
            get
            {
                return NormalizeVersion(vGetData ?? "");
            }
        }

        [Column("vPockAdv")]
        public string vPockAdv { get; set; }
        [NotMapped]
        public int nvPockAdv
        {
            get
            {
                return NormalizeVersion(vPockAdv ?? "");
            }
        }

        [Column("vOrdApprov")]
        public string vOrdApprov { get; set; }
        [NotMapped]
        public int nvOrdApprov
        {
            get
            {
                return NormalizeVersion(vOrdApprov ?? "");
            }
        }

        [Column("vPauSetup")]
        public string vPauSetup { get; set; }
        [NotMapped]
        public int nvPauSetup
        {
            get
            {
                return NormalizeVersion(vPauSetup ?? "");
            }
        }

        [Column("vSecAdmin")]
        public string vSecAdmin { get; set; }
        [NotMapped]
        public int nvSecAdmin
        {
            get
            {
                return NormalizeVersion(vSecAdmin ?? "");
            }
        }

        [Column("AdvServV")]
        public string AdvServV { get; set; }
        [NotMapped]
        public int nAdvServV
        {
            get
            {
                return NormalizeVersion(AdvServV ?? "");
            }
        }
        #endregion

        #region Not mapped properties
        public int? DaysReboot
        {
            get
            {
                try
                {
                    if (DaysOld.Length > 6)
                    {
                        string timePart = DaysOld.Substring(DaysOld.Length - 6);
                        if (timePart.IndexOf('.') > 0)
                        {
                            if (decimal.TryParse(timePart.Substring(timePart.Length - 6), out _))
                            {
                                decimal temp = decimal.Parse(timePart.Substring(timePart.Length - 6));
                                return (int)temp;
                            }
                            else
                            {
                                return null;
                            }
                        }
                        else
                        {
                            return null;
                        }
                    }
                    else
                    {
                        return null;
                    }
                }
                catch
                {
                    return null;
                }

            }
        }

        [NotMapped]
        public IEnumerable<Issue> Issues { get; set; }

        [NotMapped]
        public int CatID
        {
            get
            {
                if (AdvServerCategoryID.HasValue)
                    return AdvServerCategoryID.Value;
                else
                    return 0;
            }
        }
        [NotMapped]
        public DateTime? SnapDT
        {
            get
            {
                return SnapDateTime();
            }
        }
        private DateTime? SnapDateTime()
        {
            string sDateTime = getSnapShotField(15);
            if (DateTime.TryParse(sDateTime, out _))
                return DateTime.Parse(sDateTime);
            else
                return null;
        }
        [NotMapped]
        public int? Cpr
        {
            get
            {
                if (VersionSent.HasValue)
                    return DTDiff(VersionSent.Value, DateTime.Now, TZDiff);
                else
                    return null;
            }
        }
        [NotMapped]
        public int VersionAlertStatus
        {
            get
            {
                if (VersionSent.HasValue)
                {
                    int diff = DTDiff(DateTime.Now, VersionSent.Value, TZDiff);
                    if (diff <= 30)
                        return 0;
                    else if (diff <= 60)
                        return 1;
                    else if (diff > 60 && diff < 180)
                        return 2;
                    else
                        return 3;
                }
                else
                {
                    return 3;
                }
            }
        }
        [NotMapped]
        public int? Srv
        {
            get
            {
                DateTime? snap = SnapDateTime();
                if (snap.HasValue && VersionSent.HasValue)
                    return DTDiff(snap.Value, VersionSent.Value, 0);
                else
                    return null;
            }
        }

        [NotMapped]
        public int? Png
        {
            get
            {
                if (LastGood.HasValue && LastTry.HasValue)
                    return DTDiff(LastGood.Value, LastTry.Value, 0);
                else
                    return null;
            }
        }
        #endregion
        #region Private helpers
        private int DTDiff(DateTime start, DateTime end, int? timeZone)
        {
            int difference = 0;

            if ((end.AddHours(timeZone.HasValue ? timeZone.Value : 0) - start).Days >= 1)
                difference = 99;
            else
                difference = (end.AddHours(timeZone.HasValue ? timeZone.Value : 0) - start).Minutes;

            if (difference > 99)
                difference = 99;
            else if (difference < -99)
                difference = -99;


            return difference;
        }

        private string getSnapShotField(int field)
        {
            string snap = SnapShot;
            if (snap == null || snap.Length == 0)
                return string.Empty;

            snap = snap.Replace("~" + Environment.NewLine, "~");
            string[] fields = snap.Split('~');
            if (fields.Length >= field)
            {
                return fields[field];
            }
            else
            {
                return string.Empty;
            }
        }

        private int NormalizeVersion(string versionInput)
        {
            try
            {
                if (versionInput.Length > 0)
                {
                    string[] version = versionInput.Split(".");
                    if (version.Length == 3)
                    {
                        string total = $"{version[0].PadLeft(3, '0')}{version[1].PadLeft(3, '0')}{version[2].PadRight(3, '0')}";

                        if (int.TryParse(total, out _))
                        {
                            return int.Parse(total);
                        }
                        else
                        {
                            return 0;
                        }
                    }
                    else
                    {
                        return 0;
                    }
                }
                else
                {
                    return 0;
                }
            }
            catch (Exception ex)
            {
                Console.Write($"Error => {ex.Message}");
                return 0;
            }
        }
        #endregion
    }
}
