const app = require('express')();
const PORT = 5001;

app.listen(
    PORT,
 () => console.log(`api is running on http://localhost:${PORT}`)   
)


app.get ('/',  (req, res) =>
    res.status(200).send({
        "message":"API is running",
    })

) 

app.get('/health', (req, res )=>
{
    res.status(200).send({
        "message":"healthy"
    })
}
)


app.get('/me', (req, res) => 
{
    res.status(200).send({
        "name":"Akpabio Alexander Ifiok",
        "email":"akpabioalexander8@gmail.com",
        "github":"https://github.com/lexyuko"
    })
})