import "../../assets/styles/app-loader.scss";
import CodingLinesSVG from "../../assets/svgs/coding-lines";

const CodeEditorTab = () => (
    <div className="tabbar">
        <div className="button b1"/>
        <div className="button b2"/>
        <div className="button b3"/>
    </div>
)

const AppLoader = ({isFadingOut}) => {
  return (
    <div className="loader-content">
        <div className={`code-editor-container ${isFadingOut ? "fade-out" : ""}`}>
            <CodeEditorTab />

            <div className="col-xs-12 text-center loader-container">
                <CodingLinesSVG className="app-loader-svg" lineHeight="15" />
            </div>
        </div>
    </div>
  );
};

export default AppLoader;