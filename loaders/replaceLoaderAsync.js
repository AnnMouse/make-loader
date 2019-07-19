const loaderUtils =  require('loader-utils');

module.exports = function(source) {
    // options===this.query
    const options = loaderUtils.getOptions(this);
    // return == callback
    // return source.replace('dell',options.name);
    // const result=source.replace('dell',options.name);
    // this.callback(null,result);

    // 异步loader
    const callback=this.async();

    setTimeout(()=>{
        const result=source.replace('DellLee',options.name);
        callback(null,result); 
    },1000);
}