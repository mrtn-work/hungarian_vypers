import hu from './lang/hu'
import en from './lang/en'

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: 'hu',
    locale: 'en',
    messages: {
        hu,
        en,
    }
}))