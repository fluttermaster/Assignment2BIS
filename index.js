const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)


app.get('patientrecord', (req, res ) => {
    res.status(200).send({
        patientrecord :'hi',
        size: 'large'
    })
});

app.post('/patientrecord/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo){
        res.status(418).send({message: 'we need a logo'})
    }

    res.send({
        patientrecord : `hi with your ${logo},`
    })
});

