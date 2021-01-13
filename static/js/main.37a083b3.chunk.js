(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(1),i=s.n(n),r=s(7),c=s.n(r),l=(s(13),s(2)),o=s(3),d=s(5),h=s(4),u=(s(14),s(15),s(16),function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={title:t.title,task_id:t.taskId,completed:!1},a}return Object(o.a)(s,[{key:"complete",value:function(){var t=!this.state.completed;this.setState({completed:t}),this.props.onCompleted(t)}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"task",children:[Object(a.jsx)("input",{className:"title",type:"text",maxLength:"30",placeholder:this.state.title}),Object(a.jsx)("button",{style:{margin:"6px",alignSelf:"center",backgroundImage:"linear-gradient(148deg, rgba(82,82,82,1) 0%, rgba(42,42,42,1) 100%)"},onClick:function(){return t.complete()},children:Object(a.jsx)("h5",{style:{margin:"6px"},children:"Complete"})}),Object(a.jsx)("h5",{style:{margin:"6px",alignSelf:"center"},children:this.state.completed.toString()}),Object(a.jsx)("button",{style:{margin:"6px",backgroundImage:"linear-gradient(148deg, rgba(82,82,82,1) 0%, rgba(42,42,42,1) 100%)"},onClick:function(e,s){return t.props.onDeleted(t.state.task_id,t.state.completed)},children:Object(a.jsx)("h5",{style:{margin:"6px",alignSelf:"center"},children:"Delete"})})]})}}]),s}(i.a.Component)),k=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={show_tasks:!1,title:t.title,date:new Date(Date.now()).toDateString(),status:"Open",tasks_created:0,current_number_tasks:0,number_tasks_completed:0,percent:100,tasks:[]},a}return Object(o.a)(s,[{key:"add_task",value:function(){var t=this,e=Object(a.jsx)(u,{taskId:this.state.tasks_created,title:"Task "+this.state.tasks_created,onCompleted:function(e){return t.complete_task(e)},onDeleted:function(e,s){return t.delete_task(e,s)}},this.state.tasks_created),s=this.state.tasks;s.push(e);var n=this.state.tasks_created+1,i=this.state.current_number_tasks+1,r=Math.ceil(this.state.number_tasks_completed/i*100);this.setState({tasks_created:n,current_number_tasks:i,percent:r,tasks:s})}},{key:"delete_task",value:function(t,e){console.log(t);for(var s=this.state.tasks,a=this.state.number_tasks_completed,n=0;n<this.state.current_number_tasks;n++)if(t===s[n].props.taskId){e&&(a=this.state.number_tasks_completed-1),s.splice(n,1);break}var i=s.length;this.setState({current_number_tasks:i,number_tasks_completed:a,percent:Math.ceil(a/i*100),tasks:s})}},{key:"complete_task",value:function(t){var e=this.state.number_tasks_completed;e+=t?1:-1;var s=Math.ceil(e/this.state.current_number_tasks*100);this.setState({number_tasks_completed:e,percent:s})}},{key:"expand",value:function(){this.setState({show_tasks:!this.state.show_tasks})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"task_list",children:[Object(a.jsx)("input",{id:"title",type:"text",maxLength:"30",placeholder:this.state.title}),Object(a.jsx)("h4",{id:"date",children:this.state.date}),Object(a.jsxs)("h4",{id:"status",children:["Status: ",this.state.status]}),Object(a.jsx)("div",{id:"progress",children:Object(a.jsx)("div",{id:"progress-value",style:{height:"100%",width:this.state.percent+"%"}})}),Object(a.jsx)("h4",{id:"percent",children:this.state.percent+"%"}),Object(a.jsx)("button",{id:"expand",onClick:function(){return t.expand()},children:Object(a.jsx)("h6",{style:{margin:"0 auto"},children:"Show"})}),Object(a.jsxs)("div",{id:"tasks",style:this.state.show_tasks?{display:"initial"}:{display:"none"},children:[Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)("h4",{style:{margin:"6px"},children:"Header"}),Object(a.jsx)("button",{style:{borderRadius:"50%",margin:"6px",backgroundColor:"gray"},onClick:function(){return t.add_task()},children:Object(a.jsx)("h3",{style:{margin:"0 auto"},children:"+"})})]}),Object(a.jsx)("div",{children:this.state.tasks})]})]})}}]),s}(i.a.Component),b=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={task_lists_created:0,task_lists:[]},a}return Object(o.a)(s,[{key:"add_task_list",value:function(){var t=Object(a.jsx)(k,{title:"Task List "+this.state.task_lists_created},this.state.task_lists_created),e=this.state.task_lists;e.push(t),this.setState({task_lists_created:this.state.task_lists_created+1,task_lists:e})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"notebook",children:[Object(a.jsxs)("div",{className:"notebook-header",children:[Object(a.jsx)("h2",{style:{margin:"0"},children:"Todo - List"}),Object(a.jsx)("button",{onClick:function(){return t.add_task_list()},style:{margin:"0",height:"2rem",width:"2rem",borderRadius:"50%",backgroundColor:"gray"},children:Object(a.jsx)("h3",{style:{margin:"0 auto"},children:"+"})})]}),Object(a.jsx)("ol",{className:"notebook-body",children:this.state.task_lists})]})}}]),s}(i.a.Component);c.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.37a083b3.chunk.js.map