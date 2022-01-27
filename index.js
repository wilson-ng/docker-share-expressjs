const express = require('express');
const app = express();
const port = 3000;

let containerId;
const { exec } = require("child_process");
exec("head -1 /proc/self/cgroup|cut -d/ -f5", (error, stdout, stderr) => {containerId = stdout});

app.get('/', (req, res) => {
    res.status(200).json({
        greet: `Hi everyone, thanks for joining docker --share.`,
        container_id: containerId,
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});