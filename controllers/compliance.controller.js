const { checkCompliance } = require('../services/compliance.service');

async function handleComplianceCheck(req, res) {
    const { url } = req.body;

    try {
        const findings = await checkCompliance(url);
        res.json({ findings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    handleComplianceCheck,
};
