using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;

namespace Nca.Core.DataAccess
{
    public class DBConnection
    {
        public SqlConnection ms_Connection;
        public static string strcon;

        public string Sconnection()
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");          
            return strcon;
         }
    }

  
}
