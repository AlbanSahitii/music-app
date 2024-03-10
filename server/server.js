const express = require('express');
const app = express();

// api ...

app.get("/api", (req,res)=> {
    res.json('hello')
})

app.listen(5000, () => console.log('listening on port 5000'))
