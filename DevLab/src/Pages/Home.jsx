import Nav_bar from "../Components/Nav_bar";
import Div from "../Components/BodyStyled";
import Svg from "../Components/Animation_Home";
import "../Styles/home.style.css"
import Footer from "../Components/FooterStyled";
import NavFooter from "../Components/NavFooter";
import Logo from "../Components/LogoStyle";


const Home = () => {
    return(
        <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <Nav_bar />
        <Div>
                <wrapper className="Wrapper-animation" style={{display: "flex",justifyContent: "space-around", width: "100%"}}>
                    <div className="Animation_home" style={{width: "50%"}}>
                        <Svg/>
                    </div>
                    <div className="Wrapper-text" style={{width: "100%", display:"flex", justifyContent:"center", alignItems: "center", flexDirection: "column", fontSize: "1.3rem", padding: "40px", gap: "1rem"}}>
                        <h1>Wellcome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur impedit accusamus quis animi dolorum soluta laborum velit praesentium, possimus debitis est adipisci, consectetur accusantium minus omnis labore! Accusantium, harum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi deleniti minus ab laboriosam, aspernatur nam dicta iste possimus in delectus ipsa, accusantium ducimus itaque libero. Corporis necessitatibus dicta impedit.
                        </p>
                    </div>
                </wrapper>
          </Div>
                <Footer className="Footer">
                    <div className="logo" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem"}}>
                        <Logo />
                        <h1>DevLab</h1>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae esse explicabo architecto exercitationem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aliquid nihil impedit amet modi. Labore minus perferendis quisquam nisi esse quos voluptatem temporibus aliquid iste quia mollitia similique, ad omnis! possimus labore repudiandae aut perspiciatis ipsa illum, omnis perferendis?</p>
                    <div className="Social_Midia">
                    <NavFooter />
                    </div>
                    <div className="copy" style={{display: "flex", justifyContent: "space-between",alignItems: "center", width: "100%",height: "30%", background: "#2c3fad"}}>
                        <div className="copy" style={{padding:"0 20px", display: "flex", alignItems: "center"}}>
                            <Logo style={{width: "32px",}}/>
                            <h3>DevLab</h3>
                        </div>
                        <div className="navfooter" >
                            <ul style={{display: "flex", gap : ".8rem", textAlign: "center", padding: "0 3rem", height: "3rem", alignItems: "center"}}>
                                <li style={{listStyle: "none", }}>About</li>
                                <li style={{listStyle: "none", }}>Help</li>
                                <li style={{listStyle: "none", }}>Blog</li>
                            </ul>
                        </div>
                    </div>
                </Footer>
        </div>
    );
};
export default Home;