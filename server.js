const express = require('express');
const app = express();
const port = 8080;
const db = require('./models');

app.use(express.urlencoded({extended: false}));

// API routes for math equations

// ROUTE #1 GET all equations with LIMIT 50
app.get('/equations/all',(req,res) => {
    log('ROUTE 1');
    db.equation.findAll({offset: 0, limit: 50}).then(
        (equations) => {
            res.json(equations);
        }
    ).catch(
        (err) => {
            log(err);
            badRequest(res,err);
        }
    );
});

// ROUTE #2 GET all equations with OFFSET X LIMIT 50
app.get('/equations/all/:offset',(req,res) => {
    log('ROUTE 2');
    db.equation.findAll({offset: parseInt(req.params.offset), limit: 50}).then(
        (equations) => {
            res.json(equations);
        }
    ).catch(
        (err) => {
            log(err);
            badRequest(res);
        }
    );
});


// ROUTE #3 GET equations by type (numeric)
app.get('/equations/type/:type',(req,res) =>{
    log('ROUTE 3');
    db.equation.findOne(
        {
            where: {
                type: parseInt(req.params.type)
            }
        }
    ).then(
        (equations) => {
            res.json(equations);
        }
    ).catch(
        (err) => {
            log(err + req.params.type);
            badRequest(res,err);
        }
    );
});

// ROUTE #4 GET equations by level
app.get('/equations/level/:level',(req,res) =>{
    log('ROUTE 4');
    db.equation.findOne(
        {
            where: {
                level: parseInt(req.params.level)
            }
        }
    ).then(
        (equations) => {
            res.json(equations);
        }
    ).catch(
        (err) => {
            log(err);
            badRequest(res);
        }
    );
});

// ROUTE #5 GET equations by id
app.get('/equations/id/:id',(req,res) =>{
    log('ROUTE 5')
    db.equation.findOne(
        {            
            where: {
                id: parseInt(req.params.id)
            }
        }
    ).then(
        (equations) => {
            if (equations != null) {
                res.json(equations);
            } else {
                badRequest(res);
            }
        }
    ).catch(
        (err) => {
            log(err);
            badRequest(res);
        }
    );
});
// ROUTE #6 PUT new information
app.put('/equations/update',(req,res) => {
    log('ROUTE 6');
    var x = parseInt(req.body.id);
    db.equation.update(
        {
            level: req.body.level,
            type: req.body.type,
            question: req.body.question,
            result: req.body.result
        },{
            where: {
                id: req.body.id
            }
        }
    ).then(
        (isUpdated) => {
            if (isUpdated) {
                log(`Is updated with id ${x}`);
                res.redirect(`/equations/id/${x}`);
            }
            else {
                log(err);
                badRequest(res);
            }
        }
    ).catch(
        (err) => {
            log(err);
            badRequest(res);
        }
    ); 
});

// ROUTE #7 POST to add a new equation or be redirected to an exisitng one
app.post('/equations', (req,res) => {
    log('ROUTE 7');
    db.equation.findOrCreate(
        {
            where: {
                question: req.body.question
            },
            defaults: {
                level: req.body.level,
                type: req.body.type,
                question: req.body.question,
                result: req.body.result
            }
        }
    ).then(
        ([equation,isCreated]) => {
            log(equation);
            log(`Equation ${isCreated ? 'is successfully created' : 'already exists'}`);
            log(`With id ${equation.id}`);
            res.redirect(`/equations/id/${equation.id}`);
        }
    ).catch(
        (err) => {
            log(err);
            badRequest(res);
        }
    );
});

// ROUTE #8 delete an equation from the database
app.delete('/equations/:id', (req,res) => {
    log('ROUTE 8');
    db.equation.destroy(
        {
            where: {
                id: parseInt(req.params.id)
            }
        }
    ).then((deletedEquation)=>{
        log(`Deleted ${deletedEquation}`);
        OK(res);

    }).catch(
        (err) => {
            log(err);
            badRequest(res);            
        }
    );
    OK(res);
});

// ROUTE #9 
app.get('/*', (req,res) => {
    log('ROUTE 9');
    res.status(404).send('Not Found');
});

// SEND http status code 400 
function badRequest(res, err = '') {
    res.status(400).send(`Bad Request`);
}

// SEND http status code 200
function OK(res) {
    res.status(200).send(`OK`);
}

// PASSTHROUGH function comment 1 line to disable console logging
function log(err) {
    console.log(`💥 -> ${err}`);
}

// Listen for request
app.listen(port);