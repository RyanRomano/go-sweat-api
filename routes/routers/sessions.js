const express = require('express')
const sessionsRouter = express.Router()
const sessions = require('../../models/sessions')

sessionsRouter.get('/', (req, res) => {
    //default values when no value entered
    let limit = 10;
    let offset = 0;

    // If limit value is entered in url bar (not blank)
    // //Validate the limit param
    if(typeof req.query.limit !== 'undefined') {
        // Check that limit is a number
        //if not break and send error message
        if(isNaN(req.query.limit)){
            res.status(400).send('Limit must be a number')
            return
        }
        //Make sure it's between 1 and 100 (arbitrary range)
        // if not break and send error message
        if( !(req.query.limit >= 1) || !(req.query.limit <= 100) ){
            res.status(400).send('Limit must be between 1 and 100')
            return
        }
        
        //Limit has passed validation
        limit = req.query.limit;
    }

    //If offset value is entered in url bar (not blank)
    //Validate the offset param
    if(typeof req.query.offset !== 'undefined'){
        // Check that offset is a number
        if(isNaN(req.query.offset)){
            res.status(400).send('Offset must be a number')
            return
        }
        // Check if offset greater than 0
        if(!(req.query.offset >= 0)){
            res.status(400).send('Offset must be greater than or equal to zero')
            return
        }
        // Offset is valid (passes our two tests at least..)
        offset = req.query.offset
    }

    // Limit and offset ok at this point
    //Try to fetch from
    sessions.fetchAll(limit, offset, (err, dbResp) => {
        // Verify theres no db error
        if(typeof err !== 'undefined'){
            res.status(500).send('Db error')
            return
        }
        res.status(200).send(dbResp.rows)
    })
});

sessionsRouter.get('/:id', (req, res) => {
    // Validate the id param
    const id = req.params.id
    if (isNaN(id)) {
        res.status(400).send("Session ID must be an integer.")
        return
    }

    // Try to fetch from database
    sessions.fetchExpanded(id, (err, session) => {
        // Verify we didn't get a database error
        if(typeof err !== 'undefined') {
            res.status(500).send('Db error')
            return
        }

        // Verify that the database returns our value
        if (session === null) {
            res.status(404).send('404: Session not found')
            return
        }

        // OK
        res.send(session)
    });
});

module.exports = sessionsRouter
