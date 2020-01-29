using Nca.core.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Nca.Core.DataAccess;

namespace Nca.core.Services
{
    public class NcaService
    {
        private readonly NcaRepository _ncaRepository;
        public NcaService(NcaRepository ncaRepository)
        {
            _ncaRepository = ncaRepository;
        }
        public async Task<List<ConsumerDto>> GetconsumerInformation(string connection, int clientId, int creditreportId, string ClientType, string InfoType, string AddrType)
        {
            return await _ncaRepository.Getconsumerdata(connection, clientId, creditreportId, ClientType,InfoType,AddrType);
        }

        public async Task<List<TradelinesDto>>GetTradeInformation(string connection, int clientId, int creditreportId, string ClientType, string InfoType, string AddrType)
        {
            return await _ncaRepository.Tradedata(connection, clientId, creditreportId, ClientType, InfoType, AddrType);
        }

        public  List<LoginDto>CheckloginInformation(string connection, string strUserId, string strUserPwd, string strIPAddr)
        {
            return  _ncaRepository.CheckLoginData(connection, strUserId, strUserPwd, strIPAddr);
        }
        public  List<ValidateDto> Checkvalidation(string connection, string strUserId, string strIPAddr, string strUserPwd)
        {
            return _ncaRepository.Validateuser(connection, strUserId, strIPAddr,strUserPwd);
        }
        public async Task<List<HotclientDto>>VisitedClient(string connection, string UserId, int Dscid)
        {
            return await _ncaRepository.VisitedHotClientsByid(connection, UserId, Dscid);
        }

        public async Task<List<Clients_Data>>ClientData(string connection,ClientDto clientDto)
        {
            return await _ncaRepository.ClientList(connection, clientDto);
        }

        public async Task<List<Clients_Data>> ClientsInfo(string connection, int client_status, int days_type, string dsc_agent, string UserId, int RoleId, int DSCId, string DSCClientId, string FirstName, string LastName,
            string HomePhone, string Email, string State, string NegotiatorName, string DSCAgentName, string SortColumn, string SortDirection, int PageNo, int RowCountPerPage, string Timezone)
        {
            return await _ncaRepository.Client_Data(connection, client_status,  days_type, dsc_agent, UserId, RoleId, DSCId, DSCClientId, FirstName, LastName,
            HomePhone, Email, State, NegotiatorName, DSCAgentName, SortColumn, SortDirection, PageNo, RowCountPerPage, Timezone);
        }


        public List<HotclientInfo_Dto> hotclients_Information(string connection, int Id, string strUserId, char pageType)
        {
            return _ncaRepository.GetHotclientInfo(connection,Id,strUserId,pageType);
        }
    }
}
