import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about-container pb-4">
                <Container>
                    <div>
                        <div>
                            <h1 className="py-5 text-center text-dark fw-bold">About Us</h1>
                            <img className="about-img img-fluid" src="https://www.vroom.com.bd/wp-content/uploads/2021/09/khuje.png" alt="" />
                            <div className="about-body">

                                <p className="details py-3">Planning to buy a new vehicle? Register it after August 1, 2020, with the on-road prices on cars and two-wheelers set to reduce, as IRDAI reverses its decision for mandatory long-term motor vehicle insurance packages.
                                    <br />
                                    Buying a new car or a two-wheeler is all set to get slightly more affordable from August 1, 2020. The on-road prices for new vehicles will see a marginal reduction as a result of the Insurance Regulatory and Development Authority of India (IRDAI) withdrawing its long-term insurance package plans. The rule mandating long-term motor vehicle insurance for three or five years has been done away with, and the industry is now back to the mandatory one-year, own-damage insurance cover that is necessary when purchasing a new vehicle. With the rollback, the customer does not have an option to purchase a long-term own-damage policy even if they wanted to. That said, new vehicle owners need to buy a comprehensive cover for one year, while third-party insurance is still mandatory for three and five years for car and two-wheelers respectively.
                                    <br />
                                    Also Read: IRDAI Withdraws Long-Term Motor Vehicle Insurance Package Cover For New Cars & Two-Wheelers
                                    <br />
                                    Speaking to carandbike of the decision's impact on the buying sentiment, Nikunj Sanghi, MD, JS FourWheel Motors and Chairman, Automotive Skills Development Council, said, "It is a positive impact in the sense that anything that makes an impact on the buying decision, specifically in the present environment, it will be looked at as positive. It was more of a pain in terms of how it needs to be followed, how will the renewal be done. Once the first year of comprehensive cover is over and you want to change the insurance company, you already have a five-year lock-in with some other insurance company. So how do you port to another insurance company? So those were bigger challenges on how it would pan out."
                                    <br />
                                    IRDAI had originally notified its decision to withdraw the long-term motor vehicle insurance plans in June this year, after finding concerns related to the performance of these policies. The long-term insurance cover was introduced in September 2018 following the Supreme Court ruling, in a bid to make roads safer for motorists and pedestrians. The directive mandated buyers to purchase a combined (own-damage + third-party) insurance for a period of three years for cars, or five years in case of two-wheelers.
                                    <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default About;
