const express = require('express');
const app = express(); 
const port = 8000;


app.listen(port, '127.0.0.1', ()=>{
    console.log(`server is running on ${port}`);
});

