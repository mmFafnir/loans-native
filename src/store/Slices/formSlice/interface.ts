export type FormValues = {
  email: string;
  loanAmount: number;
  firstName: string;
  lastName: string;
  homePhone: string;
  zip: string;
  address: string;
  ssn: string;
  activeMilitary: 'YES' | 'NO';
  unsecuredDebt: 'YES' | 'NO';
  driversLicenseNumber: string;
  incomeType: 'EMPLOYMENT ' | 'BENEFITS';
  workCompanyName: string;
  workPhone: string;
  incomeNetMonthly: string;
  incomePaymentFrequency: 'WEEKLY' | 'BIWEEKLY' | 'TWICEMONTHLY' | 'MONTHLY';
  incomeNextDate1: string;
  bankAccountType: 'CHECKING' | 'SAVING';
  bankDirectDeposit: 'YES' | 'NO';
  creditRating: 'GREAT' | 'GOOD' | 'FAIR' | 'POOR';
  bankName: string;
  bankAba: string;
  bankAccountNumber: string;
  dob: string;
};

export type TypeResponseStatusForm =
  | 'sold'
  | 'have'
  | 'reject'
  | 'error'
  | 'In Progress';
