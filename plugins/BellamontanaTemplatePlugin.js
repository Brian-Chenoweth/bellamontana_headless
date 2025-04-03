export class BellamontanaTemplatePlugin {
constructor() {}

apply(hooks) {
    hooks.addFilter('possibleTemplatesList', 'faust', (templates, data) => {
    if (data?.seedNode?.__typename === 'Bellamontanahome') {
        return Array.from(new Set(['bellamontanahome', ...templates]));
    }
    return templates;
    });
}
}
