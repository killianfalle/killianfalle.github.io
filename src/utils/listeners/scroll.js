import { useContext, useEffect } from "react";
import { sectionsList } from "../../components/section/list";
import { Context } from "../../utils/context/context";

const windowHeight = window.innerHeight;
const useScrollListener = () => {
    const {
        sectionRefs,
        setActiveSection,
        revealScrollTop,
        setRevealScrollTop
    } = useContext(Context);

    const scrollFunction = () => {
        const documentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        sectionsList
            .filter(section => !section.isStandalone)
            .map((section, index) => {
                if(window.location.pathname !== "/") return;

                if(documentScrollTop <= (sectionRefs.current[0].offsetTop - (windowHeight / 2.5)))
                    return setActiveSection('Overview')

                if(documentScrollTop >= (sectionRefs.current[index].offsetTop - (windowHeight / 2.5)))
                    return setActiveSection(section.name)
            });

        if (documentScrollTop > 500)
            setRevealScrollTop(revealScrollTop ? false : true)
        else
            setRevealScrollTop(!revealScrollTop ? false : true)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction)
    }, []);
};

export default useScrollListener;