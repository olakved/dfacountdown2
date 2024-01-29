function convertToCSV(emails: string[]) {
  // Convert the array of emails to CSV format
  const csvData = emails.map((email) => `"${email}"`).join(",") + "\n";
  return csvData;
}

export default convertToCSV;
