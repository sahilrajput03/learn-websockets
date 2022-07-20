// https://github.com/mde/ejs
// https://ejs.co/
// ejs has ^^^^^ amazing docs🥝︎🥝︎🥝︎.

let ejs = require('ejs')
let people = ['geddy', 'neil', 'alex']
let eg1 = '<%= people.join(", "); %>'
let eg2 = `<% if (user) { %>
  <h2><%=user.name%></h2>
<% } %>
<%console.log('boom', people[0])%>

<br/>

<%for(i = 0; i< 5; i++){%>
<li>I am <%=i%></li>
<%}%>
TIP: Use ejs 'ctrl+space' and expand the vscode snippet, OR use simply 'ejs' from snippy.
`
let html = ejs.render(eg2, {people: people, user: {name: 'Sahil'}})
console.log(html)
