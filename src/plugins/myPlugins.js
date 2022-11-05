let myPlugin={}
myPlugin.install=function(Vue,options){
     Vue.directive(options.name,(element,parmas)=>{
         element.innerHTML=parmas.value.toUpperCase()
     })
}
export default myPlugin