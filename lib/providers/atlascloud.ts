/**
 * Atlas Cloud provider plugin
 *
 * 文档：https://atlascloud.ai/docs
 */

/** @type {import('../../core/provider-registry.ts').ProviderPlugin} */
export const atlascloudPlugin = {
  id: "atlascloud",
  displayName: "Atlas Cloud",
  authType: "api-key",
  defaultBaseUrl: "https://api.atlascloud.ai/v1",
  defaultApi: "openai-completions",
};
