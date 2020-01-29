using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;
using Nca.core.Dtos;
using Dapper;
using System.Linq;
using System.Data.SqlTypes;
using Microsoft.AspNetCore.Mvc;

namespace Nca.Core.DataAccess
{
    public class NcaRepository
    {
        public async Task<List<ConsumerDto>>Getconsumerdata(string connection, int clientId, int creditreportId, string ClientType, string InfoType, string AddrType)
        {
            using(IDbConnection db=new SqlConnection(connection))
            {
                var task = await db.QueryAsync<ConsumerDto>("rpt.GetEquifaxCreditProfileReportDetails",
                    new
                    {
                        clientId,
                        creditreportId,
                        ClientType,
                        InfoType,
                        AddrType
                    }, commandType: CommandType.StoredProcedure,commandTimeout:0);
                return task.ToList();
            }
        }

        public async Task<List<TradelinesDto>>Tradedata(string connection, int clientId, int creditreportId, string ClientType, string InfoType, string AddrType)
        {
           using(IDbConnection db=new SqlConnection(connection))
            {
                var task = await db.QueryAsync<TradelinesDto>("rpt.GetEquifaxCreditProfileReportDetails",
                    new
                    {
                        clientId,
                        creditreportId,
                        ClientType,
                        InfoType,
                        AddrType
                    }, commandType: CommandType.StoredProcedure,commandTimeout:0);
                return task.ToList();
            }
        }

        public List<LoginDto> CheckLoginData(string connection, string strUserId, string strUserPwd, string strIPAddr)
        {
            using (IDbConnection db = new SqlConnection(connection))
            {
                var objdetials = SqlMapper.QueryMultiple(db, "crm.CheckLoginDtls", new
                {
                    strUserId,
                    strUserPwd,
                    strIPAddr
                }, commandType: CommandType.StoredProcedure, commandTimeout: 0);

                LoginDto loginDto = new LoginDto();
                loginDto.Ncausers = objdetials.Read<users>().ToList();
                loginDto.NcadebtsettleCompnays = objdetials.Read<DebtsettleCompnay>().ToList();
                loginDto.Ncauserpreferences = objdetials.Read<userpreference>().ToList();
                List<LoginDto> logindata = new List<LoginDto>();
                logindata.Add(loginDto);

                //var task = await db.QueryAsync<LoginDto>("crm.CheckLoginDtls",
                //    new
                //    {
                //        strUserId,
                //        strUserPwd,
                //        strIPAddr
                //    }, commandType: CommandType.StoredProcedure, commandTimeout: 100);

                return logindata;
            }
        }
        public List<ValidateDto> Validateuser(string connection,string strUserId,string strIPAddr,string strUserPwd)
        {
            using(IDbConnection db=new SqlConnection(connection))
            {               
                DynamicParameters objparmaeters = new DynamicParameters();
                objparmaeters.Add("@strUserId", strUserId);
                objparmaeters.Add("@strIPAddr", strIPAddr);
                objparmaeters.Add("@strUserPwd", dbType: DbType.String,value:strUserPwd,direction: ParameterDirection.Output, size: 5215585);
                objparmaeters.Add("@FailureMsg", dbType: DbType.String,value:null,direction: ParameterDirection.Output, size: 5215585);
                objparmaeters.Add("@InvalidLoginAttempts", dbType: DbType.Int16,value:0, direction: ParameterDirection.Output, size: 5215585);
                var validdetials = db.Query("crm.ValidateUser",objparmaeters,commandType: CommandType.StoredProcedure, commandTimeout: 0);
                //Getting the out parameter value of stored procedure  
                ValidateDto validate = new ValidateDto();
                validate.strUserPwd = objparmaeters.Get<string>("@strUserPwd");
                validate.FailureMsg= objparmaeters.Get<string>("@FailureMsg");
                validate.InvalidLoginAttempts = objparmaeters.Get<Int16>("@InvalidLoginAttempts");
               
                List<ValidateDto> Validatelist = new List<ValidateDto>();
                Validatelist.Add(validate);
               
                return Validatelist;
              
            }
            
        }

        public async Task<List<HotclientDto>>VisitedHotClientsByid(string connection, string UserId, int Dscid)
        {
            using(IDbConnection db=new SqlConnection(connection))
            {
                var task = await db.QueryAsync<HotclientDto>("crm.GetAllVisitedHotClientsByUserId", new
                {
                    UserId,
                    Dscid
                }, commandType: CommandType.StoredProcedure);
                return task.ToList();
            }          
        }

        public async Task<List<Clients_Data >>ClientList(string connection,ClientDto clientDto)
        {
            using (IDbConnection db = new SqlConnection(connection))
            {
                
                DynamicParameters objparmaeters = new DynamicParameters();                                           
                objparmaeters.Add("@days_type",dbType:DbType.Int32,value: clientDto.days_type == 0 ? SqlInt32.Null : clientDto.days_type);                              
                objparmaeters.Add("@dsc_agent",dbType:DbType.String,value: string.IsNullOrEmpty(clientDto.dsc_agent) ? SqlString.Null : clientDto.dsc_agent);
                objparmaeters.Add("@client_status", dbType: DbType.Int32, value: clientDto.client_status==-1 ?SqlInt32.Null:clientDto.client_status);
                objparmaeters.Add("@UserId", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.UserId) ? SqlString.Null : clientDto.UserId);
                objparmaeters.Add("@RoleId", dbType: DbType.Int32, value: clientDto.RoleId==-1?SqlInt32.Null:clientDto.RoleId);
                objparmaeters.Add("@DSCId", dbType: DbType.Int32, value: clientDto.DSCId==-1?SqlInt32.Null:clientDto.DSCId );
                objparmaeters.Add("@DSCClientId", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.DSCClientId) ? SqlString.Null : clientDto.DSCClientId);
                objparmaeters.Add("@FirstName", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.FirstName) ? SqlString.Null : clientDto.FirstName );
                objparmaeters.Add("@LastName", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.LastName) ? SqlString.Null : clientDto.LastName );
                objparmaeters.Add("@HomePhone", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.HomePhone) ? SqlString.Null : clientDto.HomePhone);
                System.Text.StringBuilder clientEmails = new System.Text.StringBuilder();

                //if (!string.IsNullOrEmpty(clientDto.Email))
                //{
                //    var dsEmails = GetClientEmails(clientDto.Email.Trim(), connection);
                //    clientEmails.Append("<ClientEmails>");
                //    clientEmails.Append("<ClientEmail Email='-1' ></ClientEmail>");
                //    clientEmails.Append("</ClientEmails>");

                //    if (dsEmails != null && dsEmails.Tables.Count > 0 && dsEmails.Tables[0].Rows.Count > 0)
                //    {
                //        clientEmails.Append("<ClientEmails>");
                //        for (int indx = 0; indx < dsEmails.Tables[0].Rows.Count; indx++)
                //        {
                //            clientEmails.Append("<ClientEmail Email='" + HashWrapper.HashString(Convert.ToString(dsEmails.Tables[0].Rows[indx]["Email"])) + "' ></ClientEmail>");
                //        }
                //        clientEmails.Append("</ClientEmails>");
                //    }
                //    else
                //    {
                //        clientEmails.Append("<ClientEmails>");
                //        clientEmails.Append("<ClientEmail Email='-1' ></ClientEmail>");
                //        clientEmails.Append("</ClientEmails>");
                //    }
                clientDto.Email = "ADC321C3516D398043CE44CF7B0C8D8CEB19F6FEDB54751F5C48D17038C46BE3";
                objparmaeters.Add("@Email", clientDto.Email);

                objparmaeters.Add("@State", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.State) ? SqlString.Null : clientDto.State);
                objparmaeters.Add("@NegotiatorName", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.NegotiatorName) ? SqlString.Null : clientDto.NegotiatorName );
                objparmaeters.Add("@DSCAgentName", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.DSCAgentName) ? SqlString.Null : clientDto.DSCAgentName);
                objparmaeters.Add("@SortColumn", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.SortColumn) ? SqlString.Null : clientDto.SortColumn );
                objparmaeters.Add("@SortDirection", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.SortDirection) ? SqlString.Null : clientDto.SortDirection );
                objparmaeters.Add("@PageNo", dbType: DbType.Int32, value: clientDto.PageNo==-1?SqlInt32.Null:clientDto.PageNo );
                objparmaeters.Add("@RowCountPerPage", dbType: DbType.Int32, value: clientDto.RowCountPerPage==-1?SqlInt32.Null:clientDto.RowCountPerPage);
                objparmaeters.Add("@Timezone", dbType: DbType.String, value: string.IsNullOrEmpty(clientDto.Timezone) ? SqlString.Null : clientDto.Timezone );
                var task = await db.QueryAsync<Clients_Data>("crm.GetClientList_mallesh", objparmaeters, commandType: CommandType.StoredProcedure, commandTimeout: 0);
                return task.ToList();
            }
        }

        public object GetClientEmails(string Email,string con  )
        {
            using(IDbConnection connection=new SqlConnection(con))
            {
                DynamicParameters obj = new DynamicParameters();
                DataSet ds = new DataSet();
                obj.Add("@Email", string.IsNullOrEmpty(Email) ? SqlString.Null : Email);
                //var res = connection.Query("sp_xml_removedocument",obj, commandType: CommandType.StoredProcedure, commandTimeout: 0);
                var res = connection.Execute("sp_xml_removedocument", new { Email }, commandType: CommandType.StoredProcedure);
                return res;
            }
        }

        public async Task<List<Clients_Data>> Client_Data(string connection, int client_status, int days_type, string dsc_agent, string UserId, int RoleId, int DSCId, string DSCClientId, string FirstName, string LastName,
            string HomePhone, string Email, string State, string NegotiatorName, string DSCAgentName, string SortColumn, string SortDirection, int PageNo, int RowCountPerPage, string Timezone)
        {
            using (IDbConnection db = new SqlConnection(connection))
            {
                var task = await db.QueryAsync<Clients_Data>("crm.GetClientList", new
                {
                    client_status,
                    days_type,
                    dsc_agent,
                    UserId,
                    RoleId,
                    DSCId,
                    DSCClientId,
                    FirstName,
                    LastName,
                    HomePhone,
                    Email,
                    State,
                    NegotiatorName,
                    DSCAgentName,
                    SortColumn,
                    SortDirection,
                    PageNo,
                    RowCountPerPage,
                    Timezone,
                }, commandType: CommandType.StoredProcedure, commandTimeout: 0);
                return task.ToList();
            }
        }


        public List<HotclientInfo_Dto> GetHotclientInfo(string connection,int Id,string UserId, char PageType)
        {
            using (IDbConnection db = new SqlConnection(connection))
            {
                //using(IDbCommand dbCommand = db.CreateCommand())
                //{
                //    dbCommand.CommandType = CommandType.StoredProcedure;
                //    dbCommand.CommandText = "crm.GetClientDetails";
                //    var parameter = dbCommand.CreateParameter();
                //    parameter.ParameterName = "@Id";
                //    parameter.ParameterName = "@UserId";
                //    parameter.ParameterName = "@PageType";

                //    parameter.Value = Id;
                //    parameter.Value = UserId;
                //    parameter.Value = PageType;
                //    db.Open();

                //    using (IDataReader dataReader = dbCommand.ExecuteReader())
                //    {
                //        HotclientInfo_Dto hotclientInfo_Dto = new HotclientInfo_Dto();
                //        List<HotclientInfo_Dto> hotclientInfos = new List<HotclientInfo_Dto>();
                //        if (dataReader != null)
                //        {
                //            Loandata loandata = new Loandata();

                //            //hotclientInfo_Dto.loandata = dataReader;
                //            //hotclientInfo_Dto.loantype = task.Read<Loantype>().ToList();
                //            //hotclientInfo_Dto.loandata = task.Read<Loandata>().ToList();

                //            hotclientInfos.Add(hotclientInfo_Dto);
                //            db.Close();

                //        }
                //        return hotclientInfos;
                //    }
                //}
                // SqlMapper.GridReader reader = task;
                var task = SqlMapper.QueryMultiple(db, "crm.GetClientDetails", new
                {
                    Id,
                    UserId,
                    PageType
                }, commandType: CommandType.StoredProcedure);

                //var task = db.Query("crm.GetClientDetails",new
                //{
                //    Id,
                //    UserId,
                //    PageType
                //}, commandType: CommandType.StoredProcedure); 

                List<HotclientInfo_Dto> hotclientInfos = new List<HotclientInfo_Dto>();             
                HotclientInfo_Dto hotclientInfo_Dto = new HotclientInfo_Dto();
                hotclientInfo_Dto.loandata =task.Read<Loandata>().ToList();
                if (task.IsConsumed == false) { hotclientInfo_Dto.loantype = task.Read<Loantype>().ToList(); }
                hotclientInfos.Add(hotclientInfo_Dto);
                //hotclientInfo_Dto = task.Read<HotclientInfo_Dto>().SingleOrDefault();
                return hotclientInfos;
            }

         
        }

     

    }
}
