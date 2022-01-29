const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const routes = require('./routes/taskRoutes');


app.use(express.static(__dirname + '/public'));

app.engine('hbs', exphbs.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');

app.use('/',routes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
