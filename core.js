let locationCheck={
    checkLocation: function(fetch) {
        
    }
};
if(typeof window=="object") {
    if(typeof Window=="object") {
        if(window instanceof Window) {
            if(window?.weatherGeoCfg?.dontExport===true) {
                window.weatherLocation=locationCheck;
                return;
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
        return;
    }

}
if(typeof process=="object") {
    if(process?.env?.dontExportWeatherGeo="y") {
        // Last resort, you should be able to set process.env in nodejs for deps to read
        module.exports=locationCheck;
        return;
    }
}
export default weatherLocation;