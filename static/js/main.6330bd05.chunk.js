(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),s=n(15),l=n(5),o=n(6),u=n(9),d=n(8),h=n(13),b=n(7),m=n(14),j=n.n(m),f=(n(28),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t}return Object(o.a)(n,[{key:"handleContactData",value:function(t){this.setState(Object(b.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e,n=Object(h.a)(this.props.contacts);try{for(n.s();!(e=n.n()).done;){var a=e.value.name;if(a===this.state.name)return void alert("".concat(a," is already in contacts"))}}catch(r){n.e(r)}finally{n.f()}var c={id:j.a.generate(),name:this.state.name,number:this.state.number};this.props.handleAddContact(c),this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),className:"add-form",children:[Object(f.jsxs)("label",{className:"form-label",children:["Name",Object(f.jsx)("input",{className:"form-input",value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleContactData.bind(this)})]}),Object(f.jsxs)("label",{className:"form-label",children:["Number",Object(f.jsx)("input",{className:"form-input",value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleContactData.bind(this)})]}),Object(f.jsx)("button",{type:"submit",className:"form-btn",children:"Add contact"})]})}}]),n}(a.Component),v=(n(30),function(t){var e=t.filterText,n=t.handleFilter;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{className:"filter-label",children:["Find contacts by name",Object(f.jsx)("input",{className:"filter-input",type:"text",value:e,onChange:function(t){var e=t.target;return n(e)}})]})})}),O=n(11),x=(n(31),function(t){var e=t.contacts,n=t.filterText,a=t.handleDelete,c=e.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{name:t.name.toLowerCase()})})).filter((function(t){return t.name.includes(n)}));return Object(f.jsx)("ul",{className:"contacts-list",children:c.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(f.jsxs)("li",{className:"contacts-item",children:[Object(f.jsxs)("p",{className:"contacts-name",children:[n,": ",c]}),Object(f.jsx)("button",{className:"contacts-btn",type:"button",onClick:function(){return a(e)},children:"Delete"})]},e)}))})}),y=(n(32),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(o.a)(n,[{key:"handleAddContact",value:function(t){var e=this.state.contacts;this.setState({contacts:[].concat(Object(s.a)(e),[t])})}},{key:"handleFilter",value:function(t){var e=t.value;this.setState({filter:e})}},{key:"handleDelete",value:function(t){var e=this.state.contacts.filter((function(e){return e.id!==t}));this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(f.jsxs)("div",{className:"main-container",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{handleAddContact:this.handleAddContact.bind(this),contacts:e}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{filterText:n,handleFilter:this.handleFilter.bind(this)}),Object(f.jsx)(x,{contacts:e,filterText:n,handleDelete:this.handleDelete.bind(this)})]})}}]),n}(a.Component));n(33);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6330bd05.chunk.js.map