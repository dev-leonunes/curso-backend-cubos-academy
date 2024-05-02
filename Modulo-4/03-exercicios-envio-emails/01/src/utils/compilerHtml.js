const fs = require('fs/promises');
const handlebars = require('handlebars');

const compilerHtml = async (template, context) => {
    const html = await fs.readFile(template);
    const compiler = handlebars.compile(html.toString());
    const htmlString = compiler(context);
    return htmlString;
}

module.exports = compilerHtml;