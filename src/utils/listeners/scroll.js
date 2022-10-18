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

        sectionsList.map((section, index) => {
            if(documentScrollTop <= (sectionRefs.current[0].offsetTop - (windowHeight / 3))){
                return setActiveSection('Overview')
            }
            if(documentScrollTop >= (sectionRefs.current[index].offsetTop - (windowHeight / 3))){
                return setActiveSection(section.name)
            }
        });

        if (documentScrollTop > 500) {
            if(!revealScrollTop) setRevealScrollTop(true)
        } else {
            if(!revealScrollTop) setRevealScrollTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction)
    }, []);
};

export default useScrollListener;