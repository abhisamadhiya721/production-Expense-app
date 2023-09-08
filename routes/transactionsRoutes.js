const express = require('express')
const { addTransaction, getAllTransaction, editTransaction,deleteTransaction} = require('../controllers/transactionCtrl')

const router = express.Router()

//routes
//user routes
//add transaction POST method endpoint add-transacction
router.post('/add-transaction',addTransaction)

//edit transaction POST method endpoint edit-transacction
router.post('/edit-transaction',editTransaction)

//add transaction POST method endpoint add-transacction
router.post('/delete-transaction',deleteTransaction)


//post transaction
router.post("/get-transaction",getAllTransaction)

module.exports = router