using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Nca.core.Services;
using Nca.core.Dtos;
using NLog;

namespace NcaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NcaController : ControllerBase
    {
        private readonly NcaService _ncaService;
        private readonly IConfiguration _iconfiguration;
        private static Logger logger = LogManager.GetCurrentClassLogger();
        private static Logger dblogger = LogManager.GetLogger("NCAWebApiDbLogger");

        public NcaController(NcaService ncaService, IConfiguration iconfiguration)
        {
            _ncaService = ncaService;
            _iconfiguration = iconfiguration;

        }
        [HttpGet("Getconsumerinformation/{clientId}/{creditreportId}/{ClientType}/{InfoType}/{AddrType}")]
        public async Task<IActionResult> Getconsumerinformation(int clientId, int creditreportId, string ClientType, string InfoType, string AddrType)
        {
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;
            var result = await _ncaService.GetconsumerInformation(_conn, clientId, creditreportId, ClientType, InfoType, AddrType);
            return Ok(result);
        }
        [HttpGet("GetTradeInformation/{clientId}/{creditreportId}/{ClientType}/{InfoType}/{AddrType}")]
        public async Task<IActionResult> GetTradeInformation(int clientId, int creditreportId, string ClientType, string InfoType, string AddrType)
        {
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;
            var result = await _ncaService.GetTradeInformation(_conn, clientId, creditreportId, ClientType, InfoType, AddrType);
            return Ok(result);
        }
        [HttpGet("Checklogindetials/{strUserId}/{strUserPwd}/{strIPAddr}")]
        public IActionResult Checklogindetials(string strUserId, string strUserPwd, string strIPAddr)
        {
            logger.Info(Convert.ToString(DateTime.Now) + " - Get Invoked");
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;
            var result = _ncaService.CheckloginInformation(_conn, strUserId, strUserPwd, strIPAddr);
            return Ok(result);
        }
        [HttpGet("checkvalidation/{strUserId}/{strIPAddr}/{strUserPwd}")]
        public IActionResult checkvalidation(string strUserId, string strIPAddr, string strUserPwd)
        {
            logger.Info(Convert.ToString(DateTime.Now) + " - Get Invoked");
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;
            var result = _ncaService.Checkvalidation(_conn, strUserId, strIPAddr, strUserPwd);
            logger.Info(Convert.ToString(DateTime.Now) + "-Password is generated" + strUserPwd);
            //var res= Checklogindetials(strUserId, strUserPwd, strIPAddr);
            return Ok(result);
        }

        [HttpGet("GetVisitedClients/{UserId}/{Dscid}")]
        public async Task<IActionResult> GetVisitedClients(string UserId, int Dscid)
        {
            logger.Info(Convert.ToString(DateTime.Now) + " - Get Invoked");
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;
            var result = await _ncaService.VisitedClient(_conn, UserId, Dscid);
            return Ok(result);
        }
        [HttpPost("GetClientList")]
        public async Task<IActionResult> GetClientInformation([FromBody]ClientDto clientDto)
        {
            logger.Info(Convert.ToString(DateTime.Now) + " - Get Invoked");
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;     
            var result = await _ncaService.ClientData(_conn, clientDto);
            return Ok(result);
        }

        [HttpGet("GetClients/{client_status}/{days_type}/{dsc_agent}/{UserId}/{RoleId}/{DSCId}/{DSCClientId}/{FirstName}/{LastName}/{HomePhone}/{Email}/{State}/{NegotiatorName}/{DSCAgentName}/{SortColumn}/{SortDirection}/{PageNo}/{RowCountPerPage}/{Timezone}")]
        public async Task<IActionResult> GetClients(int client_status,int days_type,string dsc_agent,string UserId,int RoleId,int DSCId,string DSCClientId,string FirstName,string LastName,
            string HomePhone,string Email,string State,string NegotiatorName,string DSCAgentName,string SortColumn,string SortDirection,int PageNo,int RowCountPerPage,string Timezone)
        {
            logger.Info(Convert.ToString(DateTime.Now) + " - Get Invoked");
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;
            var result = await _ncaService.ClientsInfo(_conn, client_status, days_type, dsc_agent, UserId, RoleId, DSCId, DSCClientId, FirstName, LastName,
            HomePhone, Email, State, NegotiatorName, DSCAgentName, SortColumn, SortDirection, PageNo, RowCountPerPage, Timezone);
            return Ok(result);
        }

        [HttpGet("GetClientDetails/{Id}/{UserId}/{PageType}")]
        public IActionResult GetClientDetails(int Id,string UserId, char PageType)
        {
            logger.Info(Convert.ToString(DateTime.Now) + " - Get Invoked");
            string _conn = _iconfiguration.GetSection("ConnectionStrings").GetSection("NcaConnection").Value;
            var result =  _ncaService.hotclients_Information(_conn,Id, UserId, PageType);
            return Ok(result);
        }
    }
}