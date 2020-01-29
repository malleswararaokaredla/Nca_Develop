using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Nca.core.Dtos
{
    public class ClientDto
    {
        public int client_status { get; set; }
        public int  days_type { get; set; }
        //public int? days_type {
        //    get { if (this.days_type == 0)
        //        { return null; }
        //        else { return this.days_type; }
        //    }

        //}
        public string dsc_agent { get; set; }
        public string UserId { get; set; }
        public int RoleId { get; set; }
        public int DSCId { get; set; }
        public string DSCClientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string HomePhone { get; set; }
        public string Email { get; set; }
        public string State { get; set; }
        public string NegotiatorName { get; set; }
        public string DSCAgentName { get; set; }
        public string SortColumn { get; set; }
        public string SortDirection { get; set; }
        public int PageNo { get; set; }
        public int RowCountPerPage { get; set; }
        public string Timezone { get; set; }

    }
}
