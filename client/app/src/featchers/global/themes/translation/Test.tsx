import useTransitions from './../../hooks/useTranslations'

const Test = () => {

    const { t } = useTransitions()
    return (
        <>
            {t("message")}
        </>
    )
}
export default Test