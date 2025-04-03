import { ProjectTemplatePlugin } from './plugins/ProjectTemplatePlugin';
import { RelayStylePaginationPlugin } from './plugins/RelayStylePaginationPlugin';
import { BellamontanaTemplatePlugin } from './plugins/BellamontanaTemplatePlugin';
import { setConfig } from '@faustwp/core';
import possibleTypes from './possibleTypes.json';
import templates from './wp-templates';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  experimentalPlugins: [
    new ProjectTemplatePlugin(),
    new BellamontanaTemplatePlugin(),
    new RelayStylePaginationPlugin(),
  ],
  possibleTypes,
  templates,
});
