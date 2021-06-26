const { DateTime } = require("luxon");
module.exports = function(eleventyConfig){
    //this tells eleventy to take these files with it when it compiles.
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}