import type { ESLintGlobalsPropValue, ESLintrc, ImportsFlatMap } from '../types'

interface ESLintConfigs {
  globals: Record<string, ESLintGlobalsPropValue>
}

// const __comment__ = 'Generated by `unplugin-auto-import`'

export function generateESLintConfigs(
  imports: ImportsFlatMap,
  resolvedImports: ImportsFlatMap = {},
  eslintrc: ESLintrc,
) {
  const eslintConfigs: ESLintConfigs = { globals: {} };

  [
    ...Object.entries(imports),
    ...Object.entries(resolvedImports),
  ]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([name]) => { eslintConfigs.globals[name] = eslintrc.globalsPropValue || true })
  const jsonBody = JSON.stringify(eslintConfigs, null, 2)
  return jsonBody
}
