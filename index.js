const app = require('./utils/app')
const articleRoutes = require('./routes/articles')
app.use('/', articleRoutes)

app.listen(3010, () => {
    console.log('server is connected at port 3010')
})