import { useTranslation } from 'react-i18next';

const useTransitions = (lang: string) => {

    const [t, i18n] = useTranslation("global")

    const changeLang = i18n.changeLanguage(lang)

    return {
        t: t,
        changeLang: changeLang
    }

}

export default useTransitions