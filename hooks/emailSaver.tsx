import * as fs from "fs";
import * as path from "path";
import * as csv from "csv-writer"; // Import CSV writer library

const emailDataDirectory = path.join(process.cwd(), "emailData");
const emailDataFilePath = path.join(emailDataDirectory, "emails.txt");
const csvFilePath = path.join(emailDataDirectory, "emails.csv");

export const emailSaver = async (message: string) => {
  try {
    // Check if the emailData directory exists, create it if not
    if (!fs.existsSync(emailDataDirectory)) {
      await fs.promises.mkdir(emailDataDirectory);
    }

    // Check if the emails.txt file exists, create it if not
    if (!fs.existsSync(emailDataFilePath)) {
      await fs.promises.writeFile(emailDataFilePath, "");
    }

    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "development"
    ) {
      // Check if the file system is writable
      try {
        await fs.promises.access(emailDataFilePath, fs.constants.W_OK);
      } catch (err) {
        console.error("Error: Write permission denied for emails.txt");
        return;
      }
    }

    // Append the message to the emails.txt file
    await fs.promises.appendFile(emailDataFilePath, message);

    // Create or append to the emails.csv file
    const csvWriter = csv.createObjectCsvWriter({
      path: csvFilePath,
      header: [{ id: "email", title: "Email" }],
      append: true,
    });

    await csvWriter.writeRecords([{ email: message }]);
  } catch (err) {
    console.error("Error saving email:", err);
  }
};
