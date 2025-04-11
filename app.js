const express = require('express');
const app = express();
const routes = require(`./routes`)



const PORT = process.env.PORT || 3000;


app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.use('/api', routes);


app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});

