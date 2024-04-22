
// For backend and express 
const express = require('express');
const cors = require('cors'); 
const app = express(); 
app.use(express.json()); 
app.use(cors()); 

app.get('/', (req, resp) => { 
resp.send('App is Working'); 
}); 

// Register data to book hotelroom 
app.post('/register', async (req, resp) => { 
try { 
	const user = new RoomBooked(req.body); 
	let result = await user.save(); 
	result = result.toObject(); 
	if (result) { 
	delete result.password; 
	resp.send(req.body); 
	console.log(result); 
	} else { 
	console.log('User already register'); 
	} 
} catch (e) { 
	resp.send('Something Went Wrong'); 
} 
}); 

// Getting roombooked details 
app.get('/get-room-data', async (req, res) => { 
try { 
	const details = await RoomBooked.find({}); 
	res.send(details); 
} catch (error) { 
	console.log(error); 
} 
}); 

// Server setup 
app.listen(5000, () => { 
console.log('App listen at port 5000'); 
});



const mongoose = require ('mongoose');
const User = require('./models/userModel');

mongoose.connect('mongodb://localhost:27017/users').then(()=> {
    console.log('connected')
}).catch(()=> {
    console.log('connection error')
})

const user = new User({
    name:'sabi',
    email:'sabi@gmail.com',
    roomNo:'4'
    
}) ;

user.save().then(()=> {
    console.log('User saved')
})

