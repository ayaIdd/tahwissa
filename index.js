const express = require('express')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 6001;
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))



app.listen(PORT ,()=>{console.log(`server on port ${PORT}`)})
app.use('/api/articles' , require('./routes/articleRoutes'))

app.use(errorHandler)

//   /* MONGOOSE SETUP */
// console.log(`im on port ${PORT}`);
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ADD DATA ONE TIME */
//     // User.insertMany(users);
//     // Post.insertMany(posts);
//   })
//   .catch((error) => console.log(`${error} did not connect`)); 
