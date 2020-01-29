using System;
using System.Collections.Generic;

namespace Nca.core.Dtos
{
    public class LoginDto
    {
       public List<users> Ncausers { get; set; }
        public List<DebtsettleCompnay> NcadebtsettleCompnays { get; set; }
        public List<userpreference> Ncauserpreferences { get; set; }
    }

    public class users
    {
        public string username { get; set; }
        public int userstatus { get; set; }
        public int userrole { get; set; }
        public int redirectmemberservice { get; set; }
        public int DSCId { get; set; }
        public string DSCName { get; set; }
        public int AllowExternalLoginAccess { get; set; }
        public int IsNCAUser { get; set; }
        public string PasswordLastUpdated { get; set; }
        public string IsTempPassword { get; set; }
    }

    public class DebtsettleCompnay
    {
        public int Deptid { get; set; }
        public string DSCName { get; set; }
        public int Status { get; set; }
        public string ReportType { get; set; }
        public string ClientFacingName { get; set; }

    }
    public class userpreference
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int DSCId { get; set; }
        public int PreferenceId { get; set; }
        public int PreferenceValue { get; set; }
        public string CreatedOn { get; set; }
    }


}
