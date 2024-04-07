const defaultLocale = 'en-US'
// A list of all locales that are supported
const langs = [defaultLocale, 'pt-BR'] as const
// const langs = [defaultLocale, 'de'] as const

const locales = langs as unknown as string[]
export const i18n = {
    // Used when no locale matches
    defaultLocale, 
    locales, 
    locateDetection: true
}

export type Locale = (typeof langs) [number]