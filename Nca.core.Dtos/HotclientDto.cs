using System;
using System.Collections.Generic;
using System.Text;

namespace Nca.core.Dtos
{
    public class HotclientDto
    {
        public int ClientId { get; set; }
        public string DSCClientId { get; set; }
        public string ClientName { get; set; }
        public int ClientStatus { get; set; }
        public string ClientStatusName { get; set; }
    }
}
