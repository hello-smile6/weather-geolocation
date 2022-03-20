let checkLocation=async function() {
    if(typeof fetch=="undefined") {
        const fetch=require("cross-fetch");
    }
        let req=await fetch("https://wttr.in/?format=3");
        let res=await req.text();
        let location=res.split(":")[0];
        if(location==="not found") {
            return {
                country: "unknown",
                city: "unknown"
            };
        }
        let country=location.split(",")[location.split(",").length-1];
        let city=location.split(",")[0];
        return {
            country: country,
            city: city
        };
}
module.exports=checkLocation;
try {
    export default checkLocation;
}
catch(e) {
    console.log(e);
}
