export const toNumbers = (value: string) => value.replace(/\D/g, '');

export const validPhoneNumber = (value: string) => {
  const phone = toNumbers(value);
  if (phone[0] === '0' || phone[0] === '1' || Number(phone[3]) < 2)
    return false;
  return true;
};
