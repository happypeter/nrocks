// Code repo address on GitHub
const gitHubRepo = 'https://github.com/happypeter/nrocks/blob/master';

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
const urlRoot = 'https://learning.nervos.org';

export { urlRoot, gitHubRepo };
