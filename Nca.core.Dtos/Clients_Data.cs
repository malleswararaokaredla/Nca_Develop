using System;
using System.Collections.Generic;
using System.Text;

namespace Nca.core.Dtos
{
    public class Clients_Data
    {
        public int Id { get; set; }
        public string DSCid { get; set; }
        public string Email { get; set; }
        public string ClientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string HomePhone { get; set; }     
        public string State { get; set; }
        public string Timezone { get; set; }
        public string AssignedNegotiatorid { get; set; }
        public string AssignedAgentid { get; set; }
        public string ClientStatusName { get; set; }
        public string NegotiatorName { get; set; }
        public string DSCAgentName { get; set; }
        public string StatusDate { get; set; }
        public string LastCallDate { get; set; }
        public int ClientStatus { get; set; }
        public string CreatedOn { get; set; }
        public int Calls { get; set; }
        public string Tags { get; set; }
        public int Creditors { get; set; }  
        public string WorkPhone { get; set; }
        public string OtherPhone { get; set; }
        public string TimezoneSortOrder { get; set; }
    }
}
