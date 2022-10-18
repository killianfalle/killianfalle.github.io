import PrimaryText from "../../components/primary-text/primary-text";

function Contact() {
    return (
        <div className="section-container left">
             <p className="section-title">
                <PrimaryText className="text-lg md:text-xl">{"<"}</PrimaryText>
                Contact
                <PrimaryText className="text-lg md:text-xl">{"/>"}</PrimaryText>
            </p>
        </div>
    );
}
  
export default Contact;