import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { Locale } from 'vue-i18n'

export const i18n = createI18n({
  legacy: false,
  locale: '',
  messages: {},
  // i18n warn config
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false
})

const localesMap = Object.fromEntries(
  Object.entries(
    import.meta.glob('../../locales/*.yml')
  ).map(([path, loadLocale]) => [
    path.match(/([\w-]*)\.yml$/)?.[1],
    loadLocale
  ])
) as Record<
  Locale,
  () => Promise<{ default: Record<string, string> }>
>

export const availableLocales = Object.keys(localesMap)

const loadedLanguages: string[] = []

function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any
  if (typeof document !== 'undefined')
    document
      .querySelector('html')
      ?.setAttribute('lang', lang)
  return lang
}

export async function loadLanguageAsync(
  lang: string
): Promise<Locale> {
  // If the same language
  if (i18n.global.locale.value === lang)
    return setI18nLanguage(lang)

  // If the language was already loaded
  if (loadedLanguages.includes(lang))
    return setI18nLanguage(lang)

  // If the language hasn't been loaded yet
  const messages = await localesMap[lang]()
  i18n.global.setLocaleMessage(lang, messages.default)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

export function setupI18n(app: App) {
  const theme = useThemeStore()
  app.use(i18n)
  loadLanguageAsync(theme.language)
}
