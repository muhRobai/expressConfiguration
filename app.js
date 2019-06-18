const express = require('express');
const app = express();

app.use = (express.json());

const course = [
	{
		id : 1,
		name : 'course1'
	},
	{
		id : 2,
		name : 'course1'
	},
	{
		id : 3,
		name : 'course3'
	}
]

app.get('/', (req,res) => {
	res.send('Hello World');
});

app.get('/api/course',(req,res) => {
	res.send(course);
});

app.get('/api/course/:id', (req,res) =>{
	//res.send(req.params);
	//res.send(req.query);
	const courses = course.find(c => c.id === parseInt(req.params.id));
	if (!courses) res.status(404).send('the course with the given id was not found!');
	res.send(courses);
});

app.post('/api/course', (req, res) => {
	const courses = {
		id: course.length + 1,
	};

	course.push(courses);
	res.send(courses);
})

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Listen on port ${port}`);