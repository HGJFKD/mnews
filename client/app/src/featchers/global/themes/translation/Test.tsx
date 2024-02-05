import useTransitions from './../../hooks/useTranslations'

const Test = () => {

    const { t, changeLang } = useTransitions()
    return (
        <>
            {t("message")}
        </>
    )
}
export default Test