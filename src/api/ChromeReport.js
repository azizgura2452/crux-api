
const fetch = require('node-fetch');
const API_KEY = "AIzaSyBA1rR_q3Hurh_jV0NH8fIoQ6qiucjeoWQ";

const CrUXApiUtil = {
    query: async function (requestBody, apiKey) {
        const endpointUrl = 'https://chromeuxreport.googleapis.com/v1/records:queryRecord';
        try {
            const resp = await fetch(`${endpointUrl}?key=${apiKey}`, {
                method: 'POST',
                body: JSON.stringify(requestBody),
            });

            if (!resp.ok) {
                const errorResponse = await resp.json();
                throw new Error(errorResponse.error.message);
            }

            return await resp.json();
        } catch (err) {
            throw new Error(err.message);
        }
    }
};

const getReport = async (url) => {
    try {
        return await CrUXApiUtil.query({ origin: url }, API_KEY);
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = getReport;
