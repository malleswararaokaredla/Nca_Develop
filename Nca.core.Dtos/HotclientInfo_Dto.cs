using System;
using System.Collections.Generic;
using System.Text;

namespace Nca.core.Dtos
{
    public class HotclientInfo_Dto
    {
        public List<Loantype> loantype { get; set; }
        public List<Loandata> loandata { get; set; }
    }

    public class Loantype
    {
        public string LTUnsecuredLoanPrincipalBalance { get; set; }
        public string LTInterestRate { get; set; }
        public string LTLoanPaymentAmount { get; set; }
        public string LTDraftMethod { get; set; }
        public string LTFirstLoanPaymentDate { get; set; }
        public string LTSplitLoanPaymentDate { get; set; }
        public string LTLoanTerm { get; set; }
        public string LTBankName { get; set; }
        public string LTBankRoutingNum { get; set; }
        public string LTBankAccountNum { get; set; }
        public string LTAccountType { get; set; }
        public string LTLoanAmountSelected { get; set; }
        public string LTMonthlyFCFIncome { get; set; }
        public string LTResidenceAmount { get; set; }
        public string LTCoClientMonthlyFCFIncome { get; set; }
        public string LTClientDebtPaymentAmount { get; set; }
        public string LTCoClientDebtPaymentAmount { get; set; }
      
    }

    public class Loandata
    {
        public string Id { get; set; }        
        public int DSCId { get; set; }
        public string ClientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string SSN { get; set; }
        public string DOB { get; set; }
        public string HomePhone { get; set; }
        public string WorkPhone { get; set; }
        public string OtherPhone { get; set; }        
        public string Email { get; set; }
        public string CoClientFirstName { get; set; }
        public string CoClientLastName { get; set; }
        public string CoClientAddress { get; set; }
        public string CoClientCity { get; set; }
        public string CoClientState { get; set; }
        public string CoClientZip { get; set; }
        public string CoClientSSN { get; set; }
        public string CoClientDOB { get; set; }
        public string CoClientHomePhone { get; set; }
        public string CoClientWorkPhone { get; set; }
        public string CoClientOtherPhone { get; set; }
        public string CoClientEmail { get; set; }
        public string DraftAmount { get; set; }
        public string ESCCHK { get; set; }
        public string BankName { get; set; }
        public string BankRoutingNum { get; set; }
        public string BankAccountNum { get; set; }
        public string RBANK { get; set; }
        public string TCNO { get; set; }
        public string CEMAIL { get; set; }
        public string BANKID { get; set; }
        public string ClientStatus { get; set; }
        public string CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedOn { get; set; }
        public string ModifiedBy { get; set; }
        public string Status { get; set; }
        public string AssignedNegotiatorId { get; set; }
        public string AssignedNegotiatorName { get; set; }
        public string AssignedAgentId { get; set; }
        public string AssignedAgentName { get; set; }
        public string RejectedDispositionsId { get; set; }
        public string Rejected_Reason { get; set; }
        public string StatusChangeDate { get; set; }
        public string DisqualiiedReasonID { get; set; }
        public string Disqualiied_Reason { get; set; }
        public string RecentClientStatus { get; set; }
        public string ClientStatusName { get; set; }
        public string DTELDREC { get; set; }
        public string AccountType { get; set; }
        public string CBLP { get; set; }
        public string EstimatedLoanAmount { get; set; }
        public string DSCLoanTerm { get; set; }
        public string Expiration_Date { get; set; }
        public string ActiveSettlements { get; set; }
        public string ShowVerificationTab { get; set; }
        public string ShowEXVerificationTab { get; set; }
        public string ShowEQVerificationTab { get; set; }
        public string ShowReQualificationLabel { get; set; }
        public string Show250FeeClientLabel { get; set; }
        public string PersonalLoanSummaryId { get; set; }
        public string ShowMeBureauReport { get; set; }
        public string ShowMeBureauRepull { get; set; }
        public string LoanNumber { get; set; }
        public string MaturityDate { get; set; }
        public string TUCreditReportId { get; set; }
        public string TUCoCreditReportId { get; set; }
        public string EXCreditReportId { get; set; }
        public string EXCoCreditReportId { get; set; }
        public string EQCreditReportId { get; set; }
        public string EQCoCreditReportId { get; set; }
        public string ShowReQualificationBanner { get; set; }
        public string COADataValue { get; set; }
        public string COAErrorList { get; set; }
     

    }
}
