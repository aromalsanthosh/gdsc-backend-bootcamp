const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const routes = require('./routes/taskRoutes');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.engine('hbs', exphbs.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');

app.use('/',routes);

app.listen(port, () => {
    console.log('Server started on port 3000');
});
