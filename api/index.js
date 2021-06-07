const { response } = require('express');
const express = require('express');
const { async } = require('regenerator-runtime');
const app = express()
const port = 3000


const DB = require('./DB/db.js');
const ContentfulAPI = require('./contentful');


app.get('/', (req, res) => {
  res.send('<a href="/courses">Список курсов</a> <a href="/users">Пользователи</a>');
})

app.get('/users', async (req, res) => {
  let users = await DB.gg();
  res.send(`<textarea>${JSON.stringify(users)}</textarea>`);
})

app.get('/courses', async (req, res) => { 
  const courses = await ContentfulAPI.coursesList();
  const course1 = await ContentfulAPI.course1();
  const course2 = await ContentfulAPI.course2();
  const course3 = await ContentfulAPI.course3();
  const course4 = await ContentfulAPI.course4();
  res.writeHead(200, { 'Content-type': 'text/html'});
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
  </head>
  <body>
    <form id="form1" align='center'>
        <input type="text"  id="num"  placeholder="Номер курса" > 
        <input type="button" id="sub1" value="Найти" >
    </form>
    <textarea>${courses}</textarea>
    <textarea id="course"></textarea>
    <script>
        let sub = document.getElementById('sub1');
        let all = [];
        all.push('${course1}');
        all.push('${course2}');
        all.push('${course3}');
        all.push('${course4}');
        sub.addEventListener('click', function(){
          let inp = Number(document.forms['form1'].elements['num'].value);
          for (let i = 0; i < all.length; i++) {
            if (i+1 == inp) {
              document.getElementById('course').innerHTML = all[i];
              break;
            }
            if (i+1 !== inp) {
              document.getElementById('course').innerHTML = 'Такого курса нет!'; 
            }
          }
        });
        
    </script>
  </body>
  </html>
  `);
  
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
