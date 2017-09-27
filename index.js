// const express = require('express')
// const app = express()
// app.get('/', (req, res) => {
//   res.send('HEY!')
// })
// app.listen(3000, () => console.log('Server running on port 3000'))

const express = require('express')
const app = express()

app.use(express.static('build'))
app.listen(3000, () => console.log('Server running on port 3000'))