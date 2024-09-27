import footerInfo from "../../api/footerData.json"
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";

export const Footer = () => {

    const footerIcon={
        MdLocationOn:<MdLocationOn />,
        MdCall:<MdCall />,
        MdEmail: <MdEmail/>

    }
    return (
        <footer className="section-footer">
            <div className="container grid grid-three--cols">
                {
                    footerInfo.map((curInfo, index) => {
                        const {icon, title, info} = curInfo
                        return (
                            <div className="footer-data" key={index}>
                                <div className="icon">{footerIcon[icon]}
                                </div>
                                <div className="footer-text">
                                    <p>{title}</p>
                                    <p>{info}</p>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </footer>
    );
}