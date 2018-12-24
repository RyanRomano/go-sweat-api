const express = require('express')
const sessionsRouter = express.Router()
const sessions = require('../../models/sessions')

sessionsRouter.get('/', (req, res) => {
    let limit = 10
    let offset = 0

    //Validate the limit param
    if(typeof req.query.limit !== 'undefined') {
        // Check that limit is a number
        if(isNaN(req.query.limit)){
            res.status(400).send('Oh shit limit is fucked')
            return
        }
    } 
    // Check if limit between 1 and 100
    if( !(req.query.limit >= 1) || !(req.query.limit <= 100) ){
        res.status(400).send('Limit must be between 1 and 100')
        return
    }
    // Set limit if its valid
    limit = req.query.limit

    //Validate the offset param
    if(typeof req.query.offset !== 'undefined'){
        // Check that offset is a number
        if(isNaN(req.query.offset)){
            res.status(400).send('Offset is fucced')
            return
        }
    }
    // Check if offset greater than 0
    if(!(req.query.offset >= 0)){
        res.status(400).send('Offset must be greater than or equal to zero')
        return
    }
    // Set offset if valid
    offset = req.query.offset

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
})

module.exports = sessionsRouter
