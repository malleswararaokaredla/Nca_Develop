using System;
using System.Collections.Generic;
using System.Text;

namespace Nca.core.Dtos
{
    public class TradelinesDto
    {
        public int TradeId { get; set; }
        public string CreditorCustomerNumber { get; set; }
        public string AccountNumber { get; set; }
        public string ExpandedCreditorCustomerName { get; set; }
        public string BalanceAmount { get; set; }
        public string CreditLimit { get; set; }
        public string ActualPayment { get; set; }
        public string ScheduledPayment { get; set; }
        public string PastDue { get; set; }
        public string AccountType { get; set; }
        public string AccountOwner { get; set; }
        public string TermsFrequency { get; set; }
        public string DeferredPaymentStartDate { get; set; }
        public string LoanType { get; set; }
        public int MonthsReviewed { get; set; }
        public string TermsDuration { get; set; }
        public string BalloonPaymentAmount { get; set; }
        public string Status1 { get; set; }
        public string Status { get; set; }
        public string DateReported { get; set; }
        public string FirstDelinqDate { get; set; }
        public string DateOfLastPayment { get; set; }
        public string MajorDelinquencyReportedDate { get; set; }
        public string BalloonPaymentDueDate { get; set; }
        public string LastActivityDate { get; set; }
        public string DateClosed { get; set; }
        public string CreditorClassification { get; set; }
        public string ActivityDesignator { get; set; }
        public string OriginalCreditor { get; set; }
        public int Derog30DayPastDue { get; set; }
        public int Derog60DayPastDue { get; set; }
        public int Derog90DayPastDue { get; set; }
        public string PaymentProfile { get; set; }
        public int RowId { get; set; }
    }
}
