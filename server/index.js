const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


app.use(cors());
app.use(express.json());

// app.use(express.urlencoded({
//     extended:true
// }))



app.get('/', (req,res)=>{
    res.send('hello')
});

//create a todo 

app.post('/todos', async (req,res)=>{
  try {
    const {description} = req.body
    console.log(description);
    const newTodo = await pool.query (
        "INSERT INTO todo (description) VALUES($1) RETURNING *",[description]
    )
    res.json(newTodo)
  } catch (err) {
    console.error(err.message);
  }
    
});

//get ALL todos

app.get('/todos', async (req,res) =>{
try {
    const Alltodos = await pool.query(
        "SELECT * FROM todo"
    );
    res.json(Alltodos.rows)
} catch (err) {
    console.error(err.message);
}
});


// get a todo 

app.get('/todos/:id', async (req,res)=>{
  try {
    const {id} = req.params
    const getTodo = await pool.query(
        "SELECT * FROM todo WHERE todo_id = $1",[id]
    );
    res.json(getTodo.rows[0])
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo
app.put('/todos/:id', async(req,res)=>{
    try {
     const { id } = req.params;
     const { description } = req.body;
     console.log(id);
     console.log(description);
     const updateTodo = await pool.query(
         "UPDATE todo SET description = $1 WHERE todo_id = $2", [description , id ]
     );
     
     res.json("Todo was updated!")
    } catch (err) {
     console.error(message.err);
    }
 });
 
 //delete a todo
 
 app.delete('/todos/:id', async(req,res)=>{
 try {
     const { id } = req.params;
     const deleteTodo = await pool.query(
         "DELETE  FROM todo WHERE todo_id = $1", [id]
     )
     res.json('Deleted succesfully')
 } catch (err) {
     console.error(err.message);
 }
 });






// const PORT = env.process.PORT || 4000
// app.listen(PORT,() =>{
//     console.log('app is running in PORT : ' , PORT);
// })
app.listen(4000, ()=>{
    console.log('server is running!');
})

