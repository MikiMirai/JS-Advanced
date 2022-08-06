export function createTemplate(templateAsString) {
    const pattern = /{{(.+?)}}/g;

    return (data) => templateAsString.replace(pattern, (match, name) => {
        return data[name];
    });
}