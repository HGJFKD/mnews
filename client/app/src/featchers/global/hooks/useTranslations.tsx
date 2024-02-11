import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

const useTransitions = () => {

    const [t, i18n] = useTranslation("global")

    const changeLang: () => Promise<TFunction<"translation", undefined>> = i18n.changeLanguage

    return {
        t: t,
        changeLang: changeLang
    }

}

export default useTransitions