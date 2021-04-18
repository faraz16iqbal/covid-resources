const { GoogleSpreadsheet } = require("google-spreadsheet");

export const fetchData = async (location) => {
  const doc = new GoogleSpreadsheet(
    "1K5uAC90MgrDPtaBVfPnmT_llqjrjG-NR6l6RsdsG97A"
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc);

  const sheet = doc.sheetsByTitle[location]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const data = await sheet.getRows();
  console.log(data[0]);
  let arr = [];

  data.forEach((a) => {
    const facility = a["Facility"];
    const distributor = a["Distributor's Name"];
    const helpline = a["Helpline"];
    const links = a["Links"];
    const city = a["City"];
    const extrainfo = a["Extra Info"];

    arr.push({
      facility,
      distributor,
      helpline,
      links,
      extrainfo,
      city,
    });
    console.log(city);
    if (city === undefined) {
      delete arr[arr.length - 1]["city"];
    }
  });

  return arr;

  // console.log(sheet.rowCount);

  // adding / removing sheets
  // const newSheet = await doc.addSheet({ title: "hot new sheet!" });
  // await newSheet.delete();
};
