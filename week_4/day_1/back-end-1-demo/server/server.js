const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req,res)=>{
  
   if(req.query.item){
    let items = req.query.item.split(',')

    let filteredItems = inventory.filter(e => {

        for(let i = 0; i < items.length; i++){
            if(e.toLowerCase() === items[i].toLowerCase()){
                return true
            }
        }
    })
    res.status(200).send(filteredItems)

   }else{
       res.status(200).send(inventory)
   }

})

app.get('/api/inventory/:id', (req,res)=>{
    let {id} = req.params
    res.status(200).send(inventory[id])
})



app.listen(5050, ()=>{console.log(`server running on port 5050`)})