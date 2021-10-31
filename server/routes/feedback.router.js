const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// GET feedback from database;
// router.get
// pool.query
// .then
// .catch
router.get('/', (req, res) => {
    console.log('req.body', req.body);
    
    const queryText = `
        SELECT     *
        FROM       "feedback"
        ORDER BY   "id" DESC;` ;
    
    pool.query(queryText)
        .then(response => {
            console.log('router.GET response', response);
            res.send(response.rows);
        })
        .catch(error => {
            console.log('router.GET /feedback ERROR', error);
            res.sendStatus(500);
        });
});



// POST feedback to database; 
// router.post
// pool.query
// .then
// .catch
router.post('/', (req, res) => {
    console.log('req.body', req.body);
    const newFeedback = req.body;

    let queryText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES 
            ($1, $2, $3, $4);` ;

    let values = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]

    pool.query(queryText, values)
        .then(result => {
            console.log('router.POST response', result);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('router.POST ERROR', error);
            res.sendStatus(500);
        })
})      



module.exports = router;