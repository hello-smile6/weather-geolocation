let locationCheck={
    checkLocation: function(fetch) {
        
    }
};
let dontExportAbortController=new AbortController();
if(typeof window=="object") {
    if(typeof Window=="object") {
        if(window instanceof Window) {
            if(window?.weatherGeoCfg?.dontExport===true) {
                window.weatherLocation=locationCheck;
                dontExportAbortController.abort();
                // Workaround for avoiding export on web
            }
        }
    }
}
if(typeof String=="object") {
    // Just in case
    if(String?.weatherGeoCfg?.dontExport===true) {
        // Inspired by what faker.js used to do (extending String prototype), gives us a way to avoid errors with export
        module.exports=locationCheck;
        dontExportAbortController.abort();
    }

}
if(typeof process=="object") {
    if(process?.env?.dontExportWeatherGeo=="y") {
        // Last resort, you should be able to set process.env in nodejs for deps to read
        module.exports=locationCheck;
        dontExportAbortController.abort();
    }
}
process.on("uncaughtException",(...except)=>{
    console.error("Uncaught exception at:",except);
});
if(dontExportAbortController.signal.aborted) {
    // Log message that it's fine if there's an error
    console.log("If an error is thrown, it's fine. weather-geo uses export, but we can't avoid exporting, since `export` doesn't work in if/else statements or try/catch.");
    console.log("Here's the stack, for reference.");
    console.trace();
}
export default weatherLocation;