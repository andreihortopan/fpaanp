import config from "../config";

export function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Finantare!A2:L"
            })
            .then(
                response => {
                    const data = response.result.values;
                    const items = data.map(item => ({
                        id: item[0],
                        region: item[1],
                        county: item[2],
                        city: item[3],
                        legislation: item[4],
                        funder: item[5],
                        level: item[6],
                        domain: item[7],
                        year: item[8],
                        ong: item[9],
                        sum: item[10],
                        contact: item[11],
                    })) || [];
                    callback({
                        items
                    });
                },
                response => {
                    callback(false, response.result.error);
                }
            );
    });
}

export function loadMembers(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Membri!A2:E"
            })
            .then(
                response => {
                    const data = response.result.values;
                    const items = data.map(item => ({
                        id: item[0],
                        name: item[1],
                        legislation: item[2],
                        function: item[3],
                        email: item[4],
                    })) || [];
                    callback({
                        items
                    });
                },
                response => {
                    callback(false, response.result.error);
                }
            );
    });
}

export function loadEvents(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Evenimente!A2:G"
            })
            .then(
                response => {
                    const data = response.result.values;
                    const items = data.map(item => ({
                        id: item[0],
                        start: new Date(item[1]),
                        end: new Date(item[2]),
                        displayDate: item[3],
                        name: item[4],
                        description: item[5],
                        image: item[6]
                    })) || [];
                    callback({
                        items
                    });
                },
                response => {
                    callback(false, response.result.error);
                }
            );
    });
}

export default load;
