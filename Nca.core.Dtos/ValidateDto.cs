using System;
using System.Collections.Generic;
using System.Text;

namespace Nca.core.Dtos
{
    public class ValidateDto
    {       
        public string strUserPwd { get; set; }
        public string FailureMsg { get; set; }
        public int InvalidLoginAttempts { get; set; }
    }
}
