const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hi everyone, thanks for joining docker --share, hosted on container.');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});