function createForm(title){
  let fields = [];
  let addFeild = (name,type,id,label) => {
    fields.push({name,id,type,label});
  };

  let removeFeild = (name)=>{
    fields = fields.filter(field => field.name !== name );
  };

  let generateHTML = () => {
    let html = `<form><h2>${title}</h2>`
    fields.forEach(field => {
      html += `<label for='${field.id}'>${field.label}</label>`;
      html += `<input type='${field.type}' id ='${field.id}' name ='${field.name}'><br>`;
    });
    html += `<button type="submit">Submit</button></form>`
    return html
  };

  let getTitle = ()=> title;
  let getFeilds = ()=> fields;

  return {
    getTitle,
    getFeilds,
    addFeild,
    removeFeild,
    generateHTML
  }
}

let html1 = createForm('SOME DATA');
html1.addFeild('email','email','user_email','Email: ');
html1.addFeild('password','password','user_password','Password: ');

console.table(html1.getFeilds());
console.log(html1.generateHTML());