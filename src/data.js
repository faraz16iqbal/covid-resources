const { GoogleSpreadsheet } = require("google-spreadsheet");
let data = [];

export const fetchData = async (location) => {
  const doc = new GoogleSpreadsheet(
    "1K5uAC90MgrDPtaBVfPnmT_llqjrjG-NR6l6RsdsG97A"
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQiUgvd/l6h/JI\n2MWY0EhNH198Vjmmu9AK7pnUsDoayi9oawUOcqwaK7vF5lW23FNKFRqmZn6iWT0J\nMUtHVoNYcuMDI4mUEpUu9UiMgnfY1qMtf3vF2OzPA6yVtSARhoqfkHVQL5FoP8tU\nPdiMggsjRrq36hlXSsICqqODIlzUkJaOnyCglEhmPDXobKZkLTk5K7D5MsKf0vcq\ns/G3Q7mY8tkfENv0mRy+d3tOA7JIjoElsoQu4/a3XToYWYPYuezFV4n5HB6j4Qc/\nYqJJ9a99Gqjy4hiUW07NdoLKGvEC4Xh5DxUC4hkkBb1BAqUYHxTUhTzxtfMb+n/F\nxdpsbLqBAgMBAAECggEACO0gJm9J5OLQGc0R+DdNzJ3cztev1viEMIImd4rrkcvQ\nUGnorsXSLkYOaqt16CsroeLlvPQ9GfnuFrm8K7il7wMdYfZJGMQ5aRZvHXj3e5nt\nJLyEyRGb1boaWl7iPFf+KCVF7s1L6EWObaJV5bf8CbNuoY4s/yZI9pvkuJ3lkYdL\nzQKaLT62ElNiFa/+MmcBCccqOCF1wogAHQcd8zsbaz5IqzNb+eFe4iqeZf3c/8sV\ndJOZS9XDApPjyMbxDVaVCcUPi9PA0GqdKg1rIMuPfya99IVz+uaGmxISDpMrIGMR\nS4+SrKILOn4VENLvPNjnsSA1r7kvO/Q8aT4MjDck+QKBgQDzrzU+vcPLFvL205V/\n1/k/+nVsHTttOP+9Y7KkQmNgyssZ0HBd73aawPTUr+G6gg3SvpbDCLiSy96OwWeT\nOCobeA1PHsFqz3N67w0DuicSGQ2REKy15XfCBz0usMyLJjyYExYXCk6Ql3awcy28\np2IcQELwfip5pzja1W/yhmm5VwKBgQDbE1OoIEpJ0AqB3djWQWVJZYTf3GCFZ0uC\ndOT9d6I7p3TTZcD4yctpjyKY49y0cVPie7gdHwVzL9aw0g8O4d5dEzmeAmv/0qes\n6AQtUUqdRq2JrF8NZojAxxdk7kVEK7AWsmIU7qvvvIGvE0lL0GD33ORHpU7gI/OJ\nZMl0vdZL5wKBgGHXtZ9NfnHq8v8cEWjVhOSlYcRZMGU4f6bBgxbk+RYCFu50fMma\nvpqAY02KmS3Tzk0R7WK9+64lYWUcTsQTxwRkfaOJC8whI5L2rNkUQ1/G42WdtlsK\nmb00PuKiZl5wqd+9uh7iKo1v414RwQmAg6ooOzho0BEsjW2ASYStZ4HdAoGATl1c\neHCMgljT2V6VGRctdxLEdBttv2qSvSi5XN21f6dIB/KHE7eDdtAHrS8dHMLJIePl\nmS0mkuyS3I9XaZhsJVkiLB5rqYgeCKC6FcfVa+sDWpL5MV7zHhpZiPYeeuMxyvym\nTxyNDmWc8hZxCpiQhzlRwzsjutPBYu1Vjtf1VxMCgYEAtqvGIHop3Ve7wQS3WerT\nFOwhGF+RZUbG8aQCS6pXDRrLVRnWDlKDKwramioTDO3fai7VgGpw0T08wcNOEUdm\n1/4WorqSM2njCpFe4dB5H72vYUy3mvDWUUI2btr0QZI3RlrGLX+fiw75Ym1yYnKo\nmRtPjSuMcHZSgJTnCcmxlvk=\n-----END PRIVATE KEY-----\n",
  });

  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc);

  const sheet = doc.sheetsByTitle[location]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

  data = await sheet.getRows();
  // console.log(data);
  let arr = [];

  data.forEach((a) => {
    const facility = a["Facility"];
    const distributor = a["Distributor's Name"];
    const helpline = a["Helpline"];
    const links = a["Links"];
    const city = a["City"];
    const extrainfo = a["Extra Info"];
    const status = a["Status"];

    arr.push({
      facility,
      distributor,
      helpline,
      links,
      extrainfo,
      city,
      status,
    });
    if (city === undefined) {
      delete arr[arr.length - 1]["city"];
    }
  });

  console.log(arr);

  return arr;
};
