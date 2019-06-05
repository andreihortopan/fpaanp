import config from "../config";

export function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Finantare!A2:K"
            })
            .then(
                response => {
                    const data = response.result.values;
                    const items = data.map(item => ({
                        id: item[0],
                        region: item[1],
                        county: item[2],
                        legislation: item[3],
                        funder: item[4],
                        level: item[5],
                        domain: item[6],
                        year: item[7],
                        ong: item[8],
                        sum: item[9],
                        contact: item[10],
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
