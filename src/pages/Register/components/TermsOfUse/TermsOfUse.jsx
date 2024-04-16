import { Link, useNavigate } from "react-router-dom";
import "./TermsOfUse.css";
import { useToken } from "../../../../config/TokenContext";

const TermsOfUse = ({ onClose }) => {
    const handleCloseTerms = () => {
        onClose();
    };

    const navigate = useNavigate();
    const { clearToken } = useToken();

    const handleLogout = () => {
        clearToken();
        navigate("/");
    };

    return (
        <div className="termsOverlay">
            <div className="termsWrapper">
                <style
                    dangerouslySetInnerHTML={{
                        __html: "\n  [data-custom-class='body'], [data-custom-class='body'] * {\n          background: transparent !important;\n        }\n[data-custom-class='title'], [data-custom-class='title'] * {\n          font-family: Arial !important;\nfont-size: 26px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {\n          font-family: Arial !important;\ncolor: #595959 !important;\nfont-size: 14px !important;\n        }\n[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {\n          font-family: Arial !important;\nfont-size: 19px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {\n          font-family: Arial !important;\nfont-size: 17px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='body_text'], [data-custom-class='body_text'] * {\n          color: #595959 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\n        }\n[data-custom-class='link'], [data-custom-class='link'] * {\n          color: #3030F1 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\nword-break: break-word !important;\n        }\n",
                    }}
                />
                <div data-custom-class="body">
                    <div>
                        <strong>
                            <span style={{ fontSize: 26 }}>
                                <span data-custom-class="title">
                                    <bdt className="block-component" />
                                    <bdt className="question">
                                        PRIVACY NOTICE
                                    </bdt>
                                    <bdt className="statement-end-if-in-editor" />
                                </span>
                            </span>
                        </strong>
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        <span style={{ color: "rgb(127, 127, 127)" }}>
                            <strong>
                                <span style={{ fontSize: 15 }}>
                                    <span data-custom-class="subtitle">
                                        Last updated{" "}
                                        <bdt className="question">
                                            April 16, 2024
                                        </bdt>
                                    </span>
                                </span>
                            </strong>
                        </span>
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ color: "rgb(127, 127, 127)" }}>
                            <span
                                style={{
                                    color: "rgb(89, 89, 89)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    This privacy notice for{" "}
                                    <bdt className="question">
                                        musictaste.me
                                        <bdt className="block-component" />
                                    </bdt>{" "}
                                    (<bdt className="block-component" />"
                                    <strong>we</strong>," "<strong>us</strong>,"
                                    or "<strong>our</strong>"
                                    <bdt className="statement-end-if-in-editor" />
                                </span>
                                <span data-custom-class="body_text">
                                    ), describes how and why we might collect,
                                    store, use, and/or share (
                                    <bdt className="block-component" />"
                                    <strong>process</strong>"
                                    <bdt className="statement-end-if-in-editor" />
                                    ) your information when you use our services
                                    (<bdt className="block-component" />"
                                    <strong>Services</strong>"
                                    <bdt className="statement-end-if-in-editor" />
                                    ), such as when you:
                                </span>
                            </span>
                        </span>
                        <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span data-custom-class="body_text">
                                    <span style={{ color: "rgb(89, 89, 89)" }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <ul>
                        <li style={{ lineHeight: "1.5" }}>
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        Visit our website
                                        <bdt className="block-component" /> at{" "}
                                        <span
                                            style={{ color: "rgb(0, 58, 250)" }}
                                        >
                                            <bdt className="question">
                                                <a
                                                    href="https://musictaste.me"
                                                    target="_blank"
                                                    data-custom-class="link"
                                                >
                                                    https://musictaste.me
                                                </a>
                                            </bdt>
                                        </span>
                                        <span style={{ fontSize: 15 }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{ fontSize: 15 }}
                                                    >
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <bdt className="statement-end-if-in-editor">
                                                                , or any website
                                                                of ours that
                                                                links to this
                                                                privacy notice
                                                            </bdt>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div>
                        <bdt className="block-component">
                            <span style={{ fontSize: 15 }}>
                                <span style={{ fontSize: 15 }}>
                                    <span
                                        style={{ color: "rgb(127, 127, 127)" }}
                                    >
                                        <span data-custom-class="body_text">
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <bdt className="block-component" />
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </bdt>
                    </div>
                    <ul>
                        <li style={{ lineHeight: "1.5" }}>
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        Download and use
                                        <bdt className="block-component" /> our
                                        mobile application
                                        <bdt className="block-component" /> (
                                        <bdt className="question">
                                            musictaste.me)
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <span data-custom-class="body_text">
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span data-custom-class="body_text">
                                                                    <span
                                                                        style={{
                                                                            fontSize: 15,
                                                                        }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                color: "rgb(89, 89, 89)",
                                                                            }}
                                                                        >
                                                                            <bdt className="statement-end-if-in-editor">
                                                                                ,
                                                                            </bdt>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </bdt>
                                    </span>
                                    <span data-custom-class="body_text">
                                        <span style={{ fontSize: 15 }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{ fontSize: 15 }}
                                                    >
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <bdt className="statement-end-if-in-editor">
                                                                <bdt className="block-component">
                                                                    {" "}
                                                                    or any other
                                                                    application
                                                                    of ours that
                                                                    links to
                                                                    this privacy
                                                                    notice
                                                                </bdt>
                                                            </bdt>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span data-custom-class="body_text">
                                    <span style={{ color: "rgb(89, 89, 89)" }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <ul>
                        <li style={{ lineHeight: "1.5" }}>
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        Engage with us in other related ways,
                                        including any sales, marketing, or
                                        events
                                        <span style={{ fontSize: 15 }}>
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{ fontSize: 15 }}
                                                    >
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <bdt className="statement-end-if-in-editor" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span data-custom-class="body_text">
                                    <strong>
                                        Questions or concerns?&nbsp;
                                    </strong>
                                    Reading this privacy notice will help you
                                    understand your privacy rights and choices.
                                    If you do not agree with our policies and
                                    practices, please do not use our Services.
                                    <bdt className="block-component" /> If you
                                    still have any questions or concerns, please
                                    contact us at{" "}
                                    <bdt className="question">
                                        cdbpineda02@gmail.com
                                    </bdt>
                                    .
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <strong>
                            <span style={{ fontSize: 15 }}>
                                <span data-custom-class="heading_1">
                                    SUMMARY OF KEY POINTS
                                </span>
                            </span>
                        </strong>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    <em>
                                        This summary provides key points from
                                        our privacy notice, but you can find out
                                        more details about any of these topics
                                        by clicking the link following each key
                                        point or by using our&nbsp;
                                    </em>
                                </strong>
                            </span>
                        </span>
                        <a data-custom-class="link" href="#toc">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <strong>
                                        <em>table of contents</em>
                                    </strong>
                                </span>
                            </span>
                        </a>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    <em>
                                        &nbsp;below to find the section you are
                                        looking for.
                                    </em>
                                </strong>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    What personal information do we process?
                                </strong>{" "}
                                When you visit, use, or navigate our Services,
                                we may process personal information depending on
                                how you interact with us and the Services, the
                                choices you make, and the products and features
                                you use. Learn more about&nbsp;
                            </span>
                        </span>
                        <a data-custom-class="link" href="#personalinfo">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    personal information you disclose to us
                                </span>
                            </span>
                        </a>
                        <span data-custom-class="body_text">.</span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    Do we process any sensitive personal
                                    information?
                                </strong>{" "}
                                <bdt className="block-component" />
                                We do not process sensitive personal
                                information.
                                <bdt className="else-block" />
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    Do we receive any information from third
                                    parties?
                                </strong>{" "}
                                <bdt className="block-component" />
                                We do not receive any information from third
                                parties.
                                <bdt className="else-block" />
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    How do we process your information?
                                </strong>{" "}
                                We process your information to provide, improve,
                                and administer our Services, communicate with
                                you, for security and fraud prevention, and to
                                comply with law. We may also process your
                                information for other purposes with your
                                consent. We process your information only when
                                we have a valid legal reason to do so. Learn
                                more about&nbsp;
                            </span>
                        </span>
                        <a data-custom-class="link" href="#infouse">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    how we process your information
                                </span>
                            </span>
                        </a>
                        <span data-custom-class="body_text">.</span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    In what situations and with which{" "}
                                    <bdt className="block-component" />
                                    types of{" "}
                                    <bdt className="statement-end-if-in-editor" />
                                    parties do we share personal information?
                                </strong>{" "}
                                We may share information in specific situations
                                and with specific{" "}
                                <bdt className="block-component" />
                                categories of{" "}
                                <bdt className="statement-end-if-in-editor" />
                                third parties. Learn more about&nbsp;
                            </span>
                        </span>
                        <a data-custom-class="link" href="#whoshare">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    when and with whom we share your personal
                                    information
                                </span>
                            </span>
                        </a>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                .<bdt className="block-component" />
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    How do we keep your information safe?
                                </strong>{" "}
                                We have <bdt className="block-component" />
                                organizational
                                <bdt className="statement-end-if-in-editor" />{" "}
                                and technical processes and procedures in place
                                to protect your personal information. However,
                                no electronic transmission over the internet or
                                information storage technology can be guaranteed
                                to be 100% secure, so we cannot promise or
                                guarantee that hackers, cybercriminals, or other{" "}
                                <bdt className="block-component" />
                                unauthorized
                                <bdt className="statement-end-if-in-editor" />{" "}
                                third parties will not be able to defeat our
                                security and improperly collect, access, steal,
                                or modify your information. Learn more
                                about&nbsp;
                            </span>
                        </span>
                        <a data-custom-class="link" href="#infosafe">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    how we keep your information safe
                                </span>
                            </span>
                        </a>
                        <span data-custom-class="body_text">.</span>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <bdt className="statement-end-if-in-editor" />
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>What are your rights?</strong> Depending
                                on where you are located geographically, the
                                applicable privacy law may mean you have certain
                                rights regarding your personal information.
                                Learn more about&nbsp;
                            </span>
                        </span>
                        <a data-custom-class="link" href="#privacyrights">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    your privacy rights
                                </span>
                            </span>
                        </a>
                        <span data-custom-class="body_text">.</span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>
                                    How do you exercise your rights?
                                </strong>{" "}
                                The easiest way to exercise your rights is by{" "}
                                <bdt className="block-component" />
                                visiting{" "}
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    <bdt className="question">
                                        <a
                                            href="https://musictaste.me/profile"
                                            target="_blank"
                                            data-custom-class="link"
                                        >
                                            https://musictaste.me/profile
                                        </a>
                                    </bdt>
                                </span>
                                <bdt className="else-block" />, or by contacting
                                us. We will consider and act upon any request in
                                accordance with applicable data protection laws.
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                Want to learn more about what we do with any
                                information we collect?&nbsp;
                            </span>
                        </span>
                        <a data-custom-class="link" href="#toc">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                <span data-custom-class="body_text">
                                    Review the privacy notice in full
                                </span>
                            </span>
                        </a>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">.</span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div id="toc" style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span style={{ color: "rgb(0, 0, 0)" }}>
                                    <strong>
                                        <span data-custom-class="heading_1">
                                            TABLE OF CONTENTS
                                        </span>
                                    </strong>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <a data-custom-class="link" href="#infocollect">
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    1. WHAT INFORMATION DO WE COLLECT?
                                </span>
                            </a>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <a data-custom-class="link" href="#infouse">
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    2. HOW DO WE PROCESS YOUR INFORMATION?
                                    <bdt className="block-component" />
                                </span>
                            </a>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(0, 58, 250)" }}>
                                <a data-custom-class="link" href="#whoshare">
                                    3. WHEN AND WITH WHOM DO WE SHARE YOUR
                                    PERSONAL INFORMATION?
                                </a>
                            </span>
                            <span data-custom-class="body_text">
                                <bdt className="block-component" />
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ color: "rgb(0, 58, 250)", fontSize: 15 }}
                        >
                            <a data-custom-class="link" href="#3pwebsites">
                                4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                                <bdt className="statement-end-if-in-editor" />
                            </a>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{ color: "rgb(89, 89, 89)" }}
                                        >
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{ color: "rgb(89, 89, 89)" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <bdt className="block-component" />
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <a data-custom-class="link" href="#sociallogins">
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    <span style={{ color: "rgb(0, 58, 250)" }}>
                                        <span
                                            style={{ color: "rgb(0, 58, 250)" }}
                                        >
                                            5. HOW DO WE HANDLE YOUR SOCIAL
                                            LOGINS?
                                        </span>
                                    </span>
                                </span>
                            </a>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{ color: "rgb(89, 89, 89)" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <bdt className="statement-end-if-in-editor" />
                                                </span>
                                            </span>
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <a data-custom-class="link" href="#inforetain">
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    6. HOW LONG DO WE KEEP YOUR INFORMATION?
                                </span>
                            </a>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{ color: "rgb(89, 89, 89)" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <a data-custom-class="link" href="#infosafe">
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                                </span>
                            </a>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{ color: "rgb(89, 89, 89)" }}
                                        >
                                            <bdt className="statement-end-if-in-editor" />
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(0, 58, 250)" }}>
                                <a
                                    data-custom-class="link"
                                    href="#privacyrights"
                                >
                                    8. WHAT ARE YOUR PRIVACY RIGHTS?
                                </a>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <a data-custom-class="link" href="#DNT">
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    9. CONTROLS FOR DO-NOT-TRACK FEATURES
                                    <bdt className="block-component" />
                                </span>
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text" />
                                    </span>
                                </bdt>
                            </a>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <a data-custom-class="link" href="#DNT">
                            <bdt className="block-component">
                                <span style={{ fontSize: 15 }} />
                            </bdt>
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                        </a>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <a data-custom-class="link" href="#DNT">
                            <span style={{ fontSize: 15 }} />
                        </a>
                        <a data-custom-class="link" href="#policyupdates">
                            <span style={{ color: "rgb(0, 58, 250)" }}>
                                10. DO WE MAKE UPDATES TO THIS NOTICE?
                            </span>
                        </a>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <a data-custom-class="link" href="#contact">
                            <span
                                style={{
                                    color: "rgb(0, 58, 250)",
                                    fontSize: 15,
                                }}
                            >
                                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                            </span>
                        </a>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <a data-custom-class="link" href="#request">
                            <span style={{ color: "rgb(0, 58, 250)" }}>
                                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE
                                DATA WE COLLECT FROM YOU?
                            </span>
                        </a>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div id="infocollect" style={{ lineHeight: "1.5" }}>
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                            <span
                                style={{ color: "rgb(0, 0, 0)", fontSize: 15 }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        color: "rgb(0, 0, 0)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: 15,
                                            color: "rgb(0, 0, 0)",
                                        }}
                                    >
                                        <span
                                            id="control"
                                            style={{ color: "rgb(0, 0, 0)" }}
                                        >
                                            <strong>
                                                <span data-custom-class="heading_1">
                                                    1. WHAT INFORMATION DO WE
                                                    COLLECT?
                                                </span>
                                            </strong>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div id="personalinfo" style={{ lineHeight: "1.5" }}>
                        <span
                            data-custom-class="heading_2"
                            style={{ color: "rgb(0, 0, 0)" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <strong>
                                    Personal information you disclose to us
                                </strong>
                            </span>
                        </span>
                    </div>
                    <div>
                        <div>
                            <br />
                        </div>
                        <div style={{ lineHeight: "1.5" }}>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <strong>
                                                        <em>In Short:</em>
                                                    </strong>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <strong>
                                                        <em>&nbsp;</em>
                                                    </strong>
                                                    <em>
                                                        We collect personal
                                                        information that you
                                                        provide to us.
                                                    </em>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    We collect personal information that you
                                    voluntarily provide to us when you{" "}
                                    <span style={{ fontSize: 15 }}>
                                        <bdt className="block-component" />
                                    </span>
                                    register on the Services,&nbsp;
                                </span>
                                <span style={{ fontSize: 15 }}>
                                    <span data-custom-class="body_text">
                                        <span style={{ fontSize: 15 }}>
                                            <bdt className="statement-end-if-in-editor" />
                                        </span>
                                    </span>
                                    <span data-custom-class="body_text">
                                        express an interest in obtaining
                                        information about us or our products and
                                        Services, when you participate in
                                        activities on the Services, or otherwise
                                        when you contact us.
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <strong>
                                        Personal Information Provided by You.
                                    </strong>{" "}
                                    The personal information that we collect
                                    depends on the context of your interactions
                                    with us and the Services, the choices you
                                    make, and the products and features you use.
                                    The personal information we collect may
                                    include the following:
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="forloop-component" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <ul>
                        <li style={{ lineHeight: "1.5" }}>
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                                <bdt className="question">
                                                    usernames
                                                </bdt>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="forloop-component" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <ul>
                        <li style={{ lineHeight: "1.5" }}>
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                                <bdt className="question">
                                                    age
                                                </bdt>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="forloop-component" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <ul>
                        <li style={{ lineHeight: "1.5" }}>
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 15,
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text">
                                                <bdt className="question">
                                                    gender
                                                </bdt>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="forloop-component" />
                                        </span>
                                        <span data-custom-class="body_text">
                                            <bdt className="statement-end-if-in-editor" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div id="sensitiveinfo" style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <strong>Sensitive Information.</strong>{" "}
                                <bdt className="block-component" />
                                We do not process sensitive information.
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15 }}>
                            <span data-custom-class="body_text">
                                <bdt className="else-block" />
                            </span>
                        </span>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component">
                                                <bdt className="block-component" />
                                            </bdt>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <strong>
                                        Social Media Login Data.&nbsp;
                                    </strong>
                                    We may provide you with the option to
                                    register with us using your existing social
                                    media account details, like your Facebook,
                                    Twitter, or other social media account. If
                                    you choose to register in this way, we will
                                    collect the information described in the
                                    section called{" "}
                                    <bdt className="block-component" />"
                                    <bdt className="statement-end-if-in-editor" />
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <span style={{ fontSize: 15 }}>
                                                <span
                                                    style={{
                                                        color: "rgb(0, 58, 250)",
                                                    }}
                                                >
                                                    <a
                                                        data-custom-class="link"
                                                        href="#sociallogins"
                                                    >
                                                        HOW DO WE HANDLE YOUR
                                                        SOCIAL LOGINS?
                                                    </a>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <bdt className="block-component" />"
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    below.
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                        <bdt className="statement-end-if-in-editor">
                                            <bdt className="statement-end-if-in-editor" />
                                        </bdt>
                                    </span>
                                </span>
                            </span>
                        </span>
                        <bdt className="block-component">
                            <bdt className="block-component" />
                        </bdt>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    All personal information that you provide to
                                    us must be true, complete, and accurate, and
                                    you must notify us of any changes to such
                                    personal information.
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <bdt className="block-component" />
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            data-custom-class="heading_2"
                            style={{ color: "rgb(0, 0, 0)" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <strong>
                                    Information automatically collected
                                </strong>
                            </span>
                        </span>
                    </div>
                    <div>
                        <div>
                            <br />
                        </div>
                        <div style={{ lineHeight: "1.5" }}>
                            <span style={{ color: "rgb(127, 127, 127)" }}>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <strong>
                                                        <em>In Short:</em>
                                                    </strong>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span data-custom-class="body_text">
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <strong>
                                                        <em>&nbsp;</em>
                                                    </strong>
                                                    <em>
                                                        Some information — such
                                                        as your Internet
                                                        Protocol (IP) address
                                                        and/or browser and
                                                        device characteristics —
                                                        is collected
                                                        automatically when you
                                                        visit our Services.
                                                    </em>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    We automatically collect certain information
                                    when you visit, use, or navigate the
                                    Services. This information does not reveal
                                    your specific identity (like your name or
                                    contact information) but may include device
                                    and usage information, such as your IP
                                    address, browser and device characteristics,
                                    operating system, language preferences,
                                    referring URLs, device name, country,
                                    location, information about how and when you
                                    use our Services, and other technical
                                    information. This information is primarily
                                    needed to maintain the security and
                                    operation of our Services, and for our
                                    internal analytics and reporting purposes.
                                </span>
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    <bdt className="block-component" />
                                </span>
                            </span>
                            <span data-custom-class="body_text">
                                <bdt className="block-component" />
                            </span>
                        </span>
                    </div>
                    <div style={{ lineHeight: "1.5" }}>
                        <span
                            style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}
                        >
                            <span
                                style={{
                                    fontSize: 15,
                                    color: "rgb(89, 89, 89)",
                                }}
                            >
                                <span data-custom-class="body_text">
                                    The information we collect includes:
                                    <bdt className="block-component" />
                                </span>
                            </span>
                        </span>
                        <div style={{ lineHeight: "1.5" }}>
                            <bdt className="block-component">
                                <span style={{ fontSize: 15 }}>
                                    <span data-custom-class="body_text" />
                                </span>
                            </bdt>
                            <div style={{ lineHeight: "1.5" }}>
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text" />
                                    </span>
                                </bdt>
                                <div>
                                    <bdt className="block-component">
                                        <span style={{ fontSize: 15 }} />
                                    </bdt>
                                    <bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                            <bdt className="block-component">
                                                <bdt className="forloop-component">
                                                    <span
                                                        style={{ fontSize: 15 }}
                                                    />
                                                </bdt>
                                            </bdt>
                                        </span>
                                    </bdt>
                                </div>
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <em>
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontSize: 15,
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span data-custom-class="body_text">
                                                                    <bdt className="question">
                                                                        <em>
                                                                            Music
                                                                            Personality
                                                                            Result
                                                                        </em>
                                                                    </bdt>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </em>
                                                    .{" "}
                                                    <span
                                                        style={{
                                                            fontSize: 15,
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span data-custom-class="body_text">
                                                                <bdt className="question">
                                                                    The result
                                                                    that is used
                                                                    to keep
                                                                    statistical
                                                                    count of the
                                                                    users who
                                                                    got the
                                                                    personality.
                                                                </bdt>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div style={{ lineHeight: "1.5" }}>
                                    <span
                                        style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span data-custom-class="body_text">
                                                <bdt className="forloop-component">
                                                    <bdt className="statement-end-if-in-editor">
                                                        <bdt className="statement-end-if-in-editor">
                                                            <span
                                                                style={{
                                                                    fontSize: 15,
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    <span data-custom-class="body_text">
                                                                        <bdt className="question">
                                                                            <span
                                                                                style={{
                                                                                    fontSize: 15,
                                                                                    color: "rgb(89, 89, 89)",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize: 15,
                                                                                        color: "rgb(89, 89, 89)",
                                                                                    }}
                                                                                >
                                                                                    <span data-custom-class="body_text">
                                                                                        <bdt className="forloop-component" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </bdt>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </bdt>
                                                    </bdt>
                                                </bdt>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <em>
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontSize: 15,
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span data-custom-class="body_text">
                                                                    <bdt className="question">
                                                                        <em>
                                                                            Music
                                                                            Taste
                                                                            Result
                                                                        </em>
                                                                    </bdt>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </em>
                                                    .{" "}
                                                    <span
                                                        style={{
                                                            fontSize: 15,
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span data-custom-class="body_text">
                                                                <bdt className="question">
                                                                    The result
                                                                    is used to
                                                                    keep track
                                                                    of the
                                                                    history of
                                                                    the users
                                                                    with regards
                                                                    to the
                                                                    results they
                                                                    got from the
                                                                    app.
                                                                </bdt>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div style={{ lineHeight: "1.5" }}>
                                    <span
                                        style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span data-custom-class="body_text">
                                                <bdt className="forloop-component">
                                                    <bdt className="statement-end-if-in-editor">
                                                        <bdt className="statement-end-if-in-editor">
                                                            <span
                                                                style={{
                                                                    fontSize: 15,
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    <span data-custom-class="body_text">
                                                                        <bdt className="question">
                                                                            <span
                                                                                style={{
                                                                                    fontSize: 15,
                                                                                    color: "rgb(89, 89, 89)",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize: 15,
                                                                                        color: "rgb(89, 89, 89)",
                                                                                    }}
                                                                                >
                                                                                    <span data-custom-class="body_text">
                                                                                        <bdt className="forloop-component" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </bdt>
                                                                    </span>
                                                                </span>
                                                                &nbsp;
                                                            </span>
                                                        </bdt>
                                                    </bdt>
                                                    <bdt className="statement-end-if-in-editor" />
                                                </bdt>
                                            </span>
                                            <span data-custom-class="body_text">
                                                <span
                                                    style={{
                                                        color: "rgb(89, 89, 89)",
                                                        fontSize: 15,
                                                    }}
                                                >
                                                    <span data-custom-class="body_text">
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                                fontSize: 15,
                                                            }}
                                                        >
                                                            <span data-custom-class="body_text">
                                                                <bdt className="statement-end-if-in-editor">
                                                                    <bdt className="block-component" />
                                                                </bdt>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <bdt className="block-component" />
                                        </span>
                                    </span>
                                </div>
                                <div style={{ lineHeight: "1.5" }}>
                                    <br />
                                </div>
                                <div id="infouse" style={{ lineHeight: "1.5" }}>
                                    <span
                                        style={{ color: "rgb(127, 127, 127)" }}
                                    >
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: 15,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <span
                                                        id="control"
                                                        style={{
                                                            color: "rgb(0, 0, 0)",
                                                        }}
                                                    >
                                                        <strong>
                                                            <span data-custom-class="heading_1">
                                                                2. HOW DO WE
                                                                PROCESS YOUR
                                                                INFORMATION?
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <div style={{ lineHeight: "1.5" }}>
                                        <br />
                                    </div>
                                    <div style={{ lineHeight: "1.5" }}>
                                        <span
                                            style={{
                                                color: "rgb(127, 127, 127)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                    fontSize: 15,
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <span
                                                        style={{
                                                            fontSize: 15,
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span data-custom-class="body_text">
                                                                <strong>
                                                                    <em>
                                                                        In
                                                                        Short:&nbsp;
                                                                    </em>
                                                                </strong>
                                                                <em>
                                                                    We process
                                                                    your
                                                                    information
                                                                    to provide,
                                                                    improve, and
                                                                    administer
                                                                    our
                                                                    Services,
                                                                    communicate
                                                                    with you,
                                                                    for security
                                                                    and fraud
                                                                    prevention,
                                                                    and to
                                                                    comply with
                                                                    law. We may
                                                                    also process
                                                                    your
                                                                    information
                                                                    for other
                                                                    purposes
                                                                    with your
                                                                    consent.
                                                                </em>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ lineHeight: "1.5" }}>
                                    <br />
                                </div>
                                <div style={{ lineHeight: "1.5" }}>
                                    <span
                                        style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span data-custom-class="body_text">
                                                <strong>
                                                    We process your personal
                                                    information for a variety of
                                                    reasons, depending on how
                                                    you interact with our
                                                    Services, including:
                                                </strong>
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <strong>
                                                        To facilitate account
                                                        creation and
                                                        authentication and
                                                        otherwise manage user
                                                        accounts.&nbsp;
                                                    </strong>
                                                    We may process your
                                                    information so you can
                                                    create and log in to your
                                                    account, as well as keep
                                                    your account in working
                                                    order.
                                                    <span
                                                        style={{
                                                            fontSize: 15,
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span data-custom-class="body_text">
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}
                                                                    >
                                                                        <span data-custom-class="body_text">
                                                                            <span
                                                                                style={{
                                                                                    fontSize: 15,
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: "rgb(89, 89, 89)",
                                                                                    }}
                                                                                >
                                                                                    <span data-custom-class="body_text">
                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div style={{ lineHeight: "1.5" }}>
                                    <span
                                        style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <ul>
                                    <li style={{ lineHeight: "1.5" }}>
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <strong>
                                                        To deliver and
                                                        facilitate delivery of
                                                        services to the
                                                        user.&nbsp;
                                                    </strong>
                                                    We may process your
                                                    information to provide you
                                                    with the requested service.
                                                    <span
                                                        style={{
                                                            fontSize: 15,
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span data-custom-class="body_text">
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontSize: 15,
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}
                                                                    >
                                                                        <span data-custom-class="body_text">
                                                                            <span
                                                                                style={{
                                                                                    fontSize: 15,
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: "rgb(89, 89, 89)",
                                                                                    }}
                                                                                >
                                                                                    <span data-custom-class="body_text">
                                                                                        <span
                                                                                            style={{
                                                                                                fontSize: 15,
                                                                                            }}
                                                                                        >
                                                                                            <span
                                                                                                style={{
                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                }}
                                                                                            >
                                                                                                <span data-custom-class="body_text">
                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                </span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <div style={{ lineHeight: "1.5" }}>
                                    <span
                                        style={{
                                            fontSize: 15,
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span data-custom-class="body_text">
                                                <bdt className="block-component" />
                                            </span>
                                        </span>
                                    </span>
                                    <div style={{ lineHeight: "1.5" }}>
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <bdt className="block-component" />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <ul>
                                        <li style={{ lineHeight: "1.5" }}>
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <span data-custom-class="body_text">
                                                        <strong>
                                                            To respond to user
                                                            inquiries/offer
                                                            support to
                                                            users.&nbsp;
                                                        </strong>
                                                        We may process your
                                                        information to respond
                                                        to your inquiries and
                                                        solve any potential
                                                        issues you might have
                                                        with the requested
                                                        service.
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontSize: 15,
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span data-custom-class="body_text">
                                                                    <span
                                                                        style={{
                                                                            fontSize: 15,
                                                                        }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                color: "rgb(89, 89, 89)",
                                                                            }}
                                                                        >
                                                                            <span data-custom-class="body_text">
                                                                                <span
                                                                                    style={{
                                                                                        fontSize: 15,
                                                                                    }}
                                                                                >
                                                                                    <span
                                                                                        style={{
                                                                                            color: "rgb(89, 89, 89)",
                                                                                        }}
                                                                                    >
                                                                                        <span data-custom-class="body_text">
                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                    <div style={{ lineHeight: "1.5" }}>
                                        <span
                                            style={{
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span data-custom-class="body_text">
                                                    <bdt className="block-component" />
                                                </span>
                                            </span>
                                        </span>
                                        <div style={{ lineHeight: "1.5" }}>
                                            <bdt className="block-component">
                                                <span
                                                    style={{ fontSize: 15 }}
                                                />
                                            </bdt>
                                            <div style={{ lineHeight: "1.5" }}>
                                                <bdt className="block-component">
                                                    <span
                                                        style={{ fontSize: 15 }}
                                                    />
                                                </bdt>
                                                <div
                                                    style={{
                                                        lineHeight: "1.5",
                                                    }}
                                                >
                                                    <bdt className="block-component">
                                                        <span
                                                            style={{
                                                                fontSize: 15,
                                                            }}
                                                        />
                                                    </bdt>
                                                    <div
                                                        style={{
                                                            lineHeight: "1.5",
                                                        }}
                                                    >
                                                        <bdt className="block-component">
                                                            <span
                                                                style={{
                                                                    fontSize: 15,
                                                                }}
                                                            >
                                                                <span data-custom-class="body_text" />
                                                            </span>
                                                        </bdt>
                                                        <p
                                                            style={{
                                                                fontSize: 15,
                                                                lineHeight:
                                                                    "1.5",
                                                            }}
                                                        >
                                                            <bdt className="block-component">
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                    }}
                                                                />
                                                            </bdt>
                                                        </p>
                                                        <p
                                                            style={{
                                                                fontSize: 15,
                                                                lineHeight:
                                                                    "1.5",
                                                            }}
                                                        >
                                                            <bdt className="block-component">
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                    }}
                                                                />
                                                            </bdt>
                                                        </p>
                                                        <p
                                                            style={{
                                                                fontSize: 15,
                                                                lineHeight:
                                                                    "1.5",
                                                            }}
                                                        >
                                                            <bdt className="block-component" />
                                                        </p>
                                                        <ul>
                                                            <li
                                                                style={{
                                                                    lineHeight:
                                                                        "1.5",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                color: "rgb(89, 89, 89)",
                                                                            }}
                                                                        >
                                                                            <span data-custom-class="body_text">
                                                                                <strong>
                                                                                    To
                                                                                    request
                                                                                    feedback.&nbsp;
                                                                                </strong>
                                                                                We
                                                                                may
                                                                                process
                                                                                your
                                                                                information
                                                                                when
                                                                                necessary
                                                                                to
                                                                                request
                                                                                feedback
                                                                                and
                                                                                to
                                                                                contact
                                                                                you
                                                                                about
                                                                                your
                                                                                use
                                                                                of
                                                                                our
                                                                                Services.
                                                                                <span
                                                                                    style={{
                                                                                        color: "rgb(89, 89, 89)",
                                                                                    }}
                                                                                >
                                                                                    <span
                                                                                        style={{
                                                                                            color: "rgb(89, 89, 89)",
                                                                                        }}
                                                                                    >
                                                                                        <span data-custom-class="body_text">
                                                                                            <span
                                                                                                style={{
                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                }}
                                                                                            >
                                                                                                <span data-custom-class="body_text">
                                                                                                    <span
                                                                                                        style={{
                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                        }}
                                                                                                    >
                                                                                                        <span data-custom-class="body_text">
                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <p
                                                            style={{
                                                                fontSize: 15,
                                                                lineHeight:
                                                                    "1.5",
                                                            }}
                                                        >
                                                            <bdt className="block-component" />
                                                        </p>
                                                        <div
                                                            style={{
                                                                lineHeight:
                                                                    "1.5",
                                                            }}
                                                        >
                                                            <bdt className="block-component">
                                                                <span
                                                                    style={{
                                                                        fontSize: 15,
                                                                    }}
                                                                >
                                                                    <span data-custom-class="body_text" />
                                                                </span>
                                                            </bdt>
                                                            <div
                                                                style={{
                                                                    lineHeight:
                                                                        "1.5",
                                                                }}
                                                            >
                                                                <bdt className="block-component">
                                                                    <span
                                                                        style={{
                                                                            fontSize: 15,
                                                                        }}
                                                                    />
                                                                </bdt>
                                                                <div
                                                                    style={{
                                                                        lineHeight:
                                                                            "1.5",
                                                                    }}
                                                                >
                                                                    <bdt className="block-component">
                                                                        <span
                                                                            style={{
                                                                                fontSize: 15,
                                                                            }}
                                                                        />
                                                                    </bdt>
                                                                    <div
                                                                        style={{
                                                                            lineHeight:
                                                                                "1.5",
                                                                        }}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                fontSize: 15,
                                                                            }}
                                                                        >
                                                                            <bdt className="block-component">
                                                                                <span data-custom-class="body_text" />
                                                                            </bdt>
                                                                        </span>
                                                                        <div
                                                                            style={{
                                                                                lineHeight:
                                                                                    "1.5",
                                                                            }}
                                                                        >
                                                                            <bdt className="block-component">
                                                                                <span
                                                                                    style={{
                                                                                        fontSize: 15,
                                                                                    }}
                                                                                >
                                                                                    <span data-custom-class="body_text" />
                                                                                </span>
                                                                            </bdt>
                                                                            <div
                                                                                style={{
                                                                                    lineHeight:
                                                                                        "1.5",
                                                                                }}
                                                                            >
                                                                                <bdt className="block-component">
                                                                                    <span
                                                                                        style={{
                                                                                            fontSize: 15,
                                                                                        }}
                                                                                    >
                                                                                        <span data-custom-class="body_text" />
                                                                                    </span>
                                                                                </bdt>
                                                                                <div
                                                                                    style={{
                                                                                        lineHeight:
                                                                                            "1.5",
                                                                                    }}
                                                                                >
                                                                                    <bdt className="block-component">
                                                                                        <span
                                                                                            style={{
                                                                                                fontSize: 15,
                                                                                            }}
                                                                                        >
                                                                                            <span data-custom-class="body_text" />
                                                                                        </span>
                                                                                    </bdt>
                                                                                    <div
                                                                                        style={{
                                                                                            lineHeight:
                                                                                                "1.5",
                                                                                        }}
                                                                                    >
                                                                                        <bdt className="block-component">
                                                                                            <span
                                                                                                style={{
                                                                                                    fontSize: 15,
                                                                                                }}
                                                                                            >
                                                                                                <span data-custom-class="body_text" />
                                                                                            </span>
                                                                                        </bdt>
                                                                                        <div
                                                                                            style={{
                                                                                                lineHeight:
                                                                                                    "1.5",
                                                                                            }}
                                                                                        >
                                                                                            <bdt className="block-component">
                                                                                                <span
                                                                                                    style={{
                                                                                                        fontSize: 15,
                                                                                                    }}
                                                                                                >
                                                                                                    <span data-custom-class="body_text" />
                                                                                                </span>
                                                                                            </bdt>
                                                                                            <div
                                                                                                style={{
                                                                                                    lineHeight:
                                                                                                        "1.5",
                                                                                                }}
                                                                                            >
                                                                                                <bdt className="block-component">
                                                                                                    <span
                                                                                                        style={{
                                                                                                            fontSize: 15,
                                                                                                        }}
                                                                                                    >
                                                                                                        <span data-custom-class="body_text" />
                                                                                                    </span>
                                                                                                </bdt>
                                                                                                <div
                                                                                                    style={{
                                                                                                        lineHeight:
                                                                                                            "1.5",
                                                                                                    }}
                                                                                                >
                                                                                                    <bdt className="block-component">
                                                                                                        <span
                                                                                                            style={{
                                                                                                                fontSize: 15,
                                                                                                            }}
                                                                                                        >
                                                                                                            <span data-custom-class="body_text" />
                                                                                                        </span>
                                                                                                    </bdt>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            lineHeight:
                                                                                                                "1.5",
                                                                                                        }}
                                                                                                    >
                                                                                                        <bdt className="block-component">
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    fontSize: 15,
                                                                                                                }}
                                                                                                            >
                                                                                                                <span data-custom-class="body_text" />
                                                                                                            </span>
                                                                                                        </bdt>
                                                                                                        <div
                                                                                                            style={{
                                                                                                                lineHeight:
                                                                                                                    "1.5",
                                                                                                            }}
                                                                                                        >
                                                                                                            <bdt className="block-component">
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        fontSize: 15,
                                                                                                                    }}
                                                                                                                >
                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                </span>
                                                                                                            </bdt>
                                                                                                            <div
                                                                                                                style={{
                                                                                                                    lineHeight:
                                                                                                                        "1.5",
                                                                                                                }}
                                                                                                            >
                                                                                                                <bdt className="block-component">
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            fontSize: 15,
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <span data-custom-class="body_text" />
                                                                                                                    </span>
                                                                                                                </bdt>
                                                                                                                <div
                                                                                                                    style={{
                                                                                                                        lineHeight:
                                                                                                                            "1.5",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    <bdt className="block-component">
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                        </span>
                                                                                                                    </bdt>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <bdt className="block-component">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                            </span>
                                                                                                                        </bdt>
                                                                                                                        <bdt className="block-component">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                            </span>
                                                                                                                        </bdt>
                                                                                                                        <bdt className="block-component">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                            </span>
                                                                                                                        </bdt>
                                                                                                                        <bdt className="block-component">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                            </span>
                                                                                                                        </bdt>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <br />
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        id="whoshare"
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                color: "rgb(127, 127, 127)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            fontSize: 15,
                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <span
                                                                                                                                            id="control"
                                                                                                                                            style={{
                                                                                                                                                color: "rgb(0, 0, 0)",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <strong>
                                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                                    3.
                                                                                                                                                    WHEN
                                                                                                                                                    AND
                                                                                                                                                    WITH
                                                                                                                                                    WHOM
                                                                                                                                                    DO
                                                                                                                                                    WE
                                                                                                                                                    SHARE
                                                                                                                                                    YOUR
                                                                                                                                                    PERSONAL
                                                                                                                                                    INFORMATION?
                                                                                                                                                </span>
                                                                                                                                            </strong>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <br />
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <strong>
                                                                                                                                        <em>
                                                                                                                                            In
                                                                                                                                            Short:
                                                                                                                                        </em>
                                                                                                                                    </strong>
                                                                                                                                    <em>
                                                                                                                                        &nbsp;We
                                                                                                                                        may
                                                                                                                                        share
                                                                                                                                        information
                                                                                                                                        in
                                                                                                                                        specific
                                                                                                                                        situations
                                                                                                                                        described
                                                                                                                                        in
                                                                                                                                        this
                                                                                                                                        section
                                                                                                                                        and/or
                                                                                                                                        with
                                                                                                                                        the
                                                                                                                                        following{" "}
                                                                                                                                        <bdt className="block-component" />
                                                                                                                                        categories
                                                                                                                                        of{" "}
                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                        third
                                                                                                                                        parties.
                                                                                                                                    </em>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <bdt className="block-component" />
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <br />
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                <strong>
                                                                                                                                    Vendors,
                                                                                                                                    Consultants,
                                                                                                                                    and
                                                                                                                                    Other
                                                                                                                                    Third-Party
                                                                                                                                    Service
                                                                                                                                    Providers.
                                                                                                                                </strong>{" "}
                                                                                                                                We
                                                                                                                                may
                                                                                                                                share
                                                                                                                                your
                                                                                                                                data
                                                                                                                                with
                                                                                                                                third-party
                                                                                                                                vendors,
                                                                                                                                service
                                                                                                                                providers,
                                                                                                                                contractors,
                                                                                                                                or
                                                                                                                                agents
                                                                                                                                (
                                                                                                                                <bdt className="block-component" />

                                                                                                                                "
                                                                                                                                <strong>
                                                                                                                                    third
                                                                                                                                    parties
                                                                                                                                </strong>
                                                                                                                                "
                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                )
                                                                                                                                who
                                                                                                                                perform
                                                                                                                                services
                                                                                                                                for
                                                                                                                                us
                                                                                                                                or
                                                                                                                                on
                                                                                                                                our
                                                                                                                                behalf
                                                                                                                                and
                                                                                                                                require
                                                                                                                                access
                                                                                                                                to
                                                                                                                                such
                                                                                                                                information
                                                                                                                                to
                                                                                                                                do
                                                                                                                                that
                                                                                                                                work.{" "}
                                                                                                                                <bdt className="block-component" />
                                                                                                                                The{" "}
                                                                                                                                <bdt className="block-component" />
                                                                                                                                categories
                                                                                                                                of{" "}
                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                third
                                                                                                                                parties
                                                                                                                                we
                                                                                                                                may
                                                                                                                                share
                                                                                                                                personal
                                                                                                                                information
                                                                                                                                with
                                                                                                                                are
                                                                                                                                as
                                                                                                                                follows:
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <bdt className="block-component" />
                                                                                                                                    <bdt className="forloop-component" />
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <ul>
                                                                                                                        <li
                                                                                                                            style={{
                                                                                                                                lineHeight:
                                                                                                                                    "1.5",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        <bdt className="question">
                                                                                                                                            Ad
                                                                                                                                            Networks
                                                                                                                                        </bdt>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                    <div>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            fontSize: 15,
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="forloop-component" />
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <ul>
                                                                                                                        <li
                                                                                                                            style={{
                                                                                                                                lineHeight:
                                                                                                                                    "1.5",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        <bdt className="question">
                                                                                                                                            Data
                                                                                                                                            Storage
                                                                                                                                            Service
                                                                                                                                            Providers
                                                                                                                                        </bdt>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                    <div>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            fontSize: 15,
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="forloop-component" />
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <ul>
                                                                                                                        <li
                                                                                                                            style={{
                                                                                                                                lineHeight:
                                                                                                                                    "1.5",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        <bdt className="question">
                                                                                                                                            Cloud
                                                                                                                                            Computing
                                                                                                                                            Services
                                                                                                                                        </bdt>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                    <div>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            fontSize: 15,
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="forloop-component" />
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <ul>
                                                                                                                        <li
                                                                                                                            style={{
                                                                                                                                lineHeight:
                                                                                                                                    "1.5",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        <bdt className="question">
                                                                                                                                            Website
                                                                                                                                            Hosting
                                                                                                                                            Service
                                                                                                                                            Providers
                                                                                                                                        </bdt>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                    <div>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            fontSize: 15,
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="forloop-component" />
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <ul>
                                                                                                                        <li
                                                                                                                            style={{
                                                                                                                                lineHeight:
                                                                                                                                    "1.5",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        <bdt className="question">
                                                                                                                                            User
                                                                                                                                            Account
                                                                                                                                            Registration
                                                                                                                                            &amp;
                                                                                                                                            Authentication
                                                                                                                                            Services
                                                                                                                                        </bdt>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                    <div>
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <span
                                                                                                                                        style={{
                                                                                                                                            fontSize: 15,
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="forloop-component">
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                                }}
                                                                                                                                                                            >
                                                                                                                                                                                <span
                                                                                                                                                                                    style={{
                                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                                    }}
                                                                                                                                                                                >
                                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                                        <span
                                                                                                                                                                                            style={{
                                                                                                                                                                                                fontSize: 15,
                                                                                                                                                                                            }}
                                                                                                                                                                                        >
                                                                                                                                                                                            <span
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                                                }}
                                                                                                                                                                                            >
                                                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                                                    <span
                                                                                                                                                                                                        style={{
                                                                                                                                                                                                            fontSize: 15,
                                                                                                                                                                                                        }}
                                                                                                                                                                                                    >
                                                                                                                                                                                                        <span
                                                                                                                                                                                                            style={{
                                                                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                                                            }}
                                                                                                                                                                                                        >
                                                                                                                                                                                                            <span
                                                                                                                                                                                                                style={{
                                                                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                                                                }}
                                                                                                                                                                                                            >
                                                                                                                                                                                                                <span
                                                                                                                                                                                                                    style={{
                                                                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                >
                                                                                                                                                                                                                    <span
                                                                                                                                                                                                                        style={{
                                                                                                                                                                                                                            fontSize: 15,
                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                    >
                                                                                                                                                                                                                        <span
                                                                                                                                                                                                                            style={{
                                                                                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                                                                            }}
                                                                                                                                                                                                                        >
                                                                                                                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                                                                        </span>
                                                                                                                                                                                                                    </span>
                                                                                                                                                                                                                </span>
                                                                                                                                                                                                            </span>
                                                                                                                                                                                                        </span>
                                                                                                                                                                                                    </span>
                                                                                                                                                                                                </span>
                                                                                                                                                                                            </span>
                                                                                                                                                                                        </span>
                                                                                                                                                                                    </span>
                                                                                                                                                                                </span>
                                                                                                                                                                            </span>
                                                                                                                                                                        </bdt>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <bdt className="block-component" />
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <bdt className="block-component" />
                                                                                                                        <span data-custom-class="body_text" />
                                                                                                                        <span data-custom-class="body_text" />
                                                                                                                        <span data-custom-class="body_text" />
                                                                                                                        <span data-custom-class="body_text" />
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <br />
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <span
                                                                                                                            style={{
                                                                                                                                fontSize: 15,
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                We{" "}
                                                                                                                                <bdt className="block-component" />
                                                                                                                                also{" "}
                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                may
                                                                                                                                need
                                                                                                                                to
                                                                                                                                share
                                                                                                                                your
                                                                                                                                personal
                                                                                                                                information
                                                                                                                                in
                                                                                                                                the
                                                                                                                                following
                                                                                                                                situations:
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <ul>
                                                                                                                        <li
                                                                                                                            style={{
                                                                                                                                lineHeight:
                                                                                                                                    "1.5",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <strong>
                                                                                                                                        Business
                                                                                                                                        Transfers.
                                                                                                                                    </strong>{" "}
                                                                                                                                    We
                                                                                                                                    may
                                                                                                                                    share
                                                                                                                                    or
                                                                                                                                    transfer
                                                                                                                                    your
                                                                                                                                    information
                                                                                                                                    in
                                                                                                                                    connection
                                                                                                                                    with,
                                                                                                                                    or
                                                                                                                                    during
                                                                                                                                    negotiations
                                                                                                                                    of,
                                                                                                                                    any
                                                                                                                                    merger,
                                                                                                                                    sale
                                                                                                                                    of
                                                                                                                                    company
                                                                                                                                    assets,
                                                                                                                                    financing,
                                                                                                                                    or
                                                                                                                                    acquisition
                                                                                                                                    of
                                                                                                                                    all
                                                                                                                                    or
                                                                                                                                    a
                                                                                                                                    portion
                                                                                                                                    of
                                                                                                                                    our
                                                                                                                                    business
                                                                                                                                    to
                                                                                                                                    another
                                                                                                                                    company.
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                    <div
                                                                                                                        style={{
                                                                                                                            lineHeight:
                                                                                                                                "1.5",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <bdt className="block-component">
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            />
                                                                                                                        </bdt>
                                                                                                                        <div
                                                                                                                            style={{
                                                                                                                                lineHeight:
                                                                                                                                    "1.5",
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <span
                                                                                                                                style={{
                                                                                                                                    fontSize: 15,
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    <bdt className="block-component" />
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                            <div
                                                                                                                                style={{
                                                                                                                                    lineHeight:
                                                                                                                                        "1.5",
                                                                                                                                }}
                                                                                                                            >
                                                                                                                                <span
                                                                                                                                    style={{
                                                                                                                                        fontSize: 15,
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <bdt className="block-component">
                                                                                                                                        <span data-custom-class="body_text" />
                                                                                                                                    </bdt>
                                                                                                                                </span>
                                                                                                                                <div
                                                                                                                                    style={{
                                                                                                                                        lineHeight:
                                                                                                                                            "1.5",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <bdt className="block-component">
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize: 15,
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                                        </span>
                                                                                                                                    </bdt>
                                                                                                                                </div>
                                                                                                                                <ul>
                                                                                                                                    <li
                                                                                                                                        style={{
                                                                                                                                            lineHeight:
                                                                                                                                                "1.5",
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <strong>
                                                                                                                                                    Business
                                                                                                                                                    Partners.
                                                                                                                                                </strong>{" "}
                                                                                                                                                We
                                                                                                                                                may
                                                                                                                                                share
                                                                                                                                                your
                                                                                                                                                information
                                                                                                                                                with
                                                                                                                                                our
                                                                                                                                                business
                                                                                                                                                partners
                                                                                                                                                to
                                                                                                                                                offer
                                                                                                                                                you
                                                                                                                                                certain
                                                                                                                                                products,
                                                                                                                                                services,
                                                                                                                                                or
                                                                                                                                                promotions.
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="statement-end-if-in-editor">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                                            </span>
                                                                                                                                        </bdt>
                                                                                                                                    </li>
                                                                                                                                </ul>
                                                                                                                                <div
                                                                                                                                    style={{
                                                                                                                                        lineHeight:
                                                                                                                                            "1.5",
                                                                                                                                    }}
                                                                                                                                >
                                                                                                                                    <bdt className="block-component">
                                                                                                                                        <span
                                                                                                                                            style={{
                                                                                                                                                fontSize: 15,
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text" />
                                                                                                                                        </span>
                                                                                                                                    </bdt>
                                                                                                                                    <div
                                                                                                                                        style={{
                                                                                                                                            lineHeight:
                                                                                                                                                "1.5",
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <bdt className="block-component">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                                            </span>
                                                                                                                                        </bdt>
                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <bdt className="block-component" />
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <bdt className="statement-end-if-in-editor">
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text" />
                                                                                                                                            </span>
                                                                                                                                        </bdt>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <bdt className="block-component">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                                </span>
                                                                                                                                            </bdt>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <strong>
                                                                                                                                                <span
                                                                                                                                                    id="3pwebsites"
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        4.
                                                                                                                                                        WHAT
                                                                                                                                                        IS
                                                                                                                                                        OUR
                                                                                                                                                        STANCE
                                                                                                                                                        ON
                                                                                                                                                        THIRD-PARTY
                                                                                                                                                        WEBSITES?
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </strong>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <strong>
                                                                                                                                                        <em>
                                                                                                                                                            In
                                                                                                                                                            Short:
                                                                                                                                                        </em>
                                                                                                                                                    </strong>
                                                                                                                                                    <em>
                                                                                                                                                        &nbsp;We
                                                                                                                                                        are
                                                                                                                                                        not
                                                                                                                                                        responsible
                                                                                                                                                        for
                                                                                                                                                        the
                                                                                                                                                        safety
                                                                                                                                                        of
                                                                                                                                                        any
                                                                                                                                                        information
                                                                                                                                                        that
                                                                                                                                                        you
                                                                                                                                                        share
                                                                                                                                                        with
                                                                                                                                                        third
                                                                                                                                                        parties
                                                                                                                                                        that
                                                                                                                                                        we
                                                                                                                                                        may
                                                                                                                                                        link
                                                                                                                                                        to
                                                                                                                                                        or
                                                                                                                                                        who
                                                                                                                                                        advertise
                                                                                                                                                        on
                                                                                                                                                        our
                                                                                                                                                        Services,
                                                                                                                                                        but
                                                                                                                                                        are
                                                                                                                                                        not
                                                                                                                                                        affiliated
                                                                                                                                                        with,
                                                                                                                                                        our
                                                                                                                                                        Services.
                                                                                                                                                    </em>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    The
                                                                                                                                                    Services
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                    may
                                                                                                                                                    link
                                                                                                                                                    to
                                                                                                                                                    third-party
                                                                                                                                                    websites,
                                                                                                                                                    online
                                                                                                                                                    services,
                                                                                                                                                    or
                                                                                                                                                    mobile
                                                                                                                                                    applications
                                                                                                                                                    and/or
                                                                                                                                                    contain
                                                                                                                                                    advertisements
                                                                                                                                                    from
                                                                                                                                                    third
                                                                                                                                                    parties
                                                                                                                                                    that
                                                                                                                                                    are
                                                                                                                                                    not
                                                                                                                                                    affiliated
                                                                                                                                                    with
                                                                                                                                                    us
                                                                                                                                                    and
                                                                                                                                                    which
                                                                                                                                                    may
                                                                                                                                                    link
                                                                                                                                                    to
                                                                                                                                                    other
                                                                                                                                                    websites,
                                                                                                                                                    services,
                                                                                                                                                    or
                                                                                                                                                    applications.
                                                                                                                                                    Accordingly,
                                                                                                                                                    we
                                                                                                                                                    do
                                                                                                                                                    not
                                                                                                                                                    make
                                                                                                                                                    any
                                                                                                                                                    guarantee
                                                                                                                                                    regarding
                                                                                                                                                    any
                                                                                                                                                    such
                                                                                                                                                    third
                                                                                                                                                    parties,
                                                                                                                                                    and
                                                                                                                                                    we
                                                                                                                                                    will
                                                                                                                                                    not
                                                                                                                                                    be
                                                                                                                                                    liable
                                                                                                                                                    for
                                                                                                                                                    any
                                                                                                                                                    loss
                                                                                                                                                    or
                                                                                                                                                    damage
                                                                                                                                                    caused
                                                                                                                                                    by
                                                                                                                                                    the
                                                                                                                                                    use
                                                                                                                                                    of
                                                                                                                                                    such
                                                                                                                                                    third-party
                                                                                                                                                    websites,
                                                                                                                                                    services,
                                                                                                                                                    or
                                                                                                                                                    applications.
                                                                                                                                                    The
                                                                                                                                                    inclusion
                                                                                                                                                    of
                                                                                                                                                    a
                                                                                                                                                    link
                                                                                                                                                    towards
                                                                                                                                                    a
                                                                                                                                                    third-party
                                                                                                                                                    website,
                                                                                                                                                    service,
                                                                                                                                                    or
                                                                                                                                                    application
                                                                                                                                                    does
                                                                                                                                                    not
                                                                                                                                                    imply
                                                                                                                                                    an
                                                                                                                                                    endorsement
                                                                                                                                                    by
                                                                                                                                                    us.
                                                                                                                                                    We
                                                                                                                                                    cannot
                                                                                                                                                    guarantee
                                                                                                                                                    the
                                                                                                                                                    safety
                                                                                                                                                    and
                                                                                                                                                    privacy
                                                                                                                                                    of
                                                                                                                                                    data
                                                                                                                                                    you
                                                                                                                                                    provide
                                                                                                                                                    to
                                                                                                                                                    any
                                                                                                                                                    third
                                                                                                                                                    parties.
                                                                                                                                                    Any
                                                                                                                                                    data
                                                                                                                                                    collected
                                                                                                                                                    by
                                                                                                                                                    third
                                                                                                                                                    parties
                                                                                                                                                    is
                                                                                                                                                    not
                                                                                                                                                    covered
                                                                                                                                                    by
                                                                                                                                                    this
                                                                                                                                                    privacy
                                                                                                                                                    notice.
                                                                                                                                                    We
                                                                                                                                                    are
                                                                                                                                                    not
                                                                                                                                                    responsible
                                                                                                                                                    for
                                                                                                                                                    the
                                                                                                                                                    content
                                                                                                                                                    or
                                                                                                                                                    privacy
                                                                                                                                                    and
                                                                                                                                                    security
                                                                                                                                                    practices
                                                                                                                                                    and
                                                                                                                                                    policies
                                                                                                                                                    of
                                                                                                                                                    any
                                                                                                                                                    third
                                                                                                                                                    parties,
                                                                                                                                                    including
                                                                                                                                                    other
                                                                                                                                                    websites,
                                                                                                                                                    services,
                                                                                                                                                    or
                                                                                                                                                    applications
                                                                                                                                                    that
                                                                                                                                                    may
                                                                                                                                                    be
                                                                                                                                                    linked
                                                                                                                                                    to
                                                                                                                                                    or
                                                                                                                                                    from
                                                                                                                                                    the
                                                                                                                                                    Services.
                                                                                                                                                    You
                                                                                                                                                    should
                                                                                                                                                    review
                                                                                                                                                    the
                                                                                                                                                    policies
                                                                                                                                                    of
                                                                                                                                                    such
                                                                                                                                                    third
                                                                                                                                                    parties
                                                                                                                                                    and
                                                                                                                                                    contact
                                                                                                                                                    them
                                                                                                                                                    directly
                                                                                                                                                    to
                                                                                                                                                    respond
                                                                                                                                                    to
                                                                                                                                                    your
                                                                                                                                                    questions.
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <bdt className="statement-end-if-in-editor">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                                </span>
                                                                                                                                            </bdt>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <bdt className="block-component">
                                                                                                                                                                    <span data-custom-class="heading_1" />
                                                                                                                                                                </bdt>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                            fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span
                                                                                                                                                                        style={{
                                                                                                                                                                            fontSize: 15,
                                                                                                                                                                        }}
                                                                                                                                                                    >
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                            }}
                                                                                                                                                                        >
                                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="sociallogins"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        5.
                                                                                                                                                                        HOW
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        HANDLE
                                                                                                                                                                        YOUR
                                                                                                                                                                        SOCIAL
                                                                                                                                                                        LOGINS?
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <strong>
                                                                                                                                                            <em>
                                                                                                                                                                In
                                                                                                                                                                Short:&nbsp;
                                                                                                                                                            </em>
                                                                                                                                                        </strong>
                                                                                                                                                        <em>
                                                                                                                                                            If
                                                                                                                                                            you
                                                                                                                                                            choose
                                                                                                                                                            to
                                                                                                                                                            register
                                                                                                                                                            or
                                                                                                                                                            log
                                                                                                                                                            in
                                                                                                                                                            to
                                                                                                                                                            our
                                                                                                                                                            Services
                                                                                                                                                            using
                                                                                                                                                            a
                                                                                                                                                            social
                                                                                                                                                            media
                                                                                                                                                            account,
                                                                                                                                                            we
                                                                                                                                                            may
                                                                                                                                                            have
                                                                                                                                                            access
                                                                                                                                                            to
                                                                                                                                                            certain
                                                                                                                                                            information
                                                                                                                                                            about
                                                                                                                                                            you.
                                                                                                                                                        </em>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Our
                                                                                                                                                        Services
                                                                                                                                                        offer
                                                                                                                                                        you
                                                                                                                                                        the
                                                                                                                                                        ability
                                                                                                                                                        to
                                                                                                                                                        register
                                                                                                                                                        and
                                                                                                                                                        log
                                                                                                                                                        in
                                                                                                                                                        using
                                                                                                                                                        your
                                                                                                                                                        third-party
                                                                                                                                                        social
                                                                                                                                                        media
                                                                                                                                                        account
                                                                                                                                                        details
                                                                                                                                                        (like
                                                                                                                                                        your
                                                                                                                                                        Facebook
                                                                                                                                                        or
                                                                                                                                                        Twitter
                                                                                                                                                        logins).
                                                                                                                                                        Where
                                                                                                                                                        you
                                                                                                                                                        choose
                                                                                                                                                        to
                                                                                                                                                        do
                                                                                                                                                        this,
                                                                                                                                                        we
                                                                                                                                                        will
                                                                                                                                                        receive
                                                                                                                                                        certain
                                                                                                                                                        profile
                                                                                                                                                        information
                                                                                                                                                        about
                                                                                                                                                        you
                                                                                                                                                        from
                                                                                                                                                        your
                                                                                                                                                        social
                                                                                                                                                        media
                                                                                                                                                        provider.
                                                                                                                                                        The
                                                                                                                                                        profile
                                                                                                                                                        information
                                                                                                                                                        we
                                                                                                                                                        receive
                                                                                                                                                        may
                                                                                                                                                        vary
                                                                                                                                                        depending
                                                                                                                                                        on
                                                                                                                                                        the
                                                                                                                                                        social
                                                                                                                                                        media
                                                                                                                                                        provider
                                                                                                                                                        concerned,
                                                                                                                                                        but
                                                                                                                                                        will
                                                                                                                                                        often
                                                                                                                                                        include
                                                                                                                                                        your
                                                                                                                                                        name,
                                                                                                                                                        email
                                                                                                                                                        address,
                                                                                                                                                        friends
                                                                                                                                                        list,
                                                                                                                                                        and
                                                                                                                                                        profile
                                                                                                                                                        picture,
                                                                                                                                                        as
                                                                                                                                                        well
                                                                                                                                                        as
                                                                                                                                                        other
                                                                                                                                                        information
                                                                                                                                                        you
                                                                                                                                                        choose
                                                                                                                                                        to
                                                                                                                                                        make
                                                                                                                                                        public
                                                                                                                                                        on
                                                                                                                                                        such
                                                                                                                                                        a
                                                                                                                                                        social
                                                                                                                                                        media
                                                                                                                                                        platform.
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        We
                                                                                                                                                        will
                                                                                                                                                        use
                                                                                                                                                        the
                                                                                                                                                        information
                                                                                                                                                        we
                                                                                                                                                        receive
                                                                                                                                                        only
                                                                                                                                                        for
                                                                                                                                                        the
                                                                                                                                                        purposes
                                                                                                                                                        that
                                                                                                                                                        are
                                                                                                                                                        described
                                                                                                                                                        in
                                                                                                                                                        this
                                                                                                                                                        privacy
                                                                                                                                                        notice
                                                                                                                                                        or
                                                                                                                                                        that
                                                                                                                                                        are
                                                                                                                                                        otherwise
                                                                                                                                                        made
                                                                                                                                                        clear
                                                                                                                                                        to
                                                                                                                                                        you
                                                                                                                                                        on
                                                                                                                                                        the
                                                                                                                                                        relevant
                                                                                                                                                        Services.
                                                                                                                                                        Please
                                                                                                                                                        note
                                                                                                                                                        that
                                                                                                                                                        we
                                                                                                                                                        do
                                                                                                                                                        not
                                                                                                                                                        control,
                                                                                                                                                        and
                                                                                                                                                        are
                                                                                                                                                        not
                                                                                                                                                        responsible
                                                                                                                                                        for,
                                                                                                                                                        other
                                                                                                                                                        uses
                                                                                                                                                        of
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        by
                                                                                                                                                        your
                                                                                                                                                        third-party
                                                                                                                                                        social
                                                                                                                                                        media
                                                                                                                                                        provider.
                                                                                                                                                        We
                                                                                                                                                        recommend
                                                                                                                                                        that
                                                                                                                                                        you
                                                                                                                                                        review
                                                                                                                                                        their
                                                                                                                                                        privacy
                                                                                                                                                        notice
                                                                                                                                                        to
                                                                                                                                                        understand
                                                                                                                                                        how
                                                                                                                                                        they
                                                                                                                                                        collect,
                                                                                                                                                        use,
                                                                                                                                                        and
                                                                                                                                                        share
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information,
                                                                                                                                                        and
                                                                                                                                                        how
                                                                                                                                                        you
                                                                                                                                                        can
                                                                                                                                                        set
                                                                                                                                                        your
                                                                                                                                                        privacy
                                                                                                                                                        preferences
                                                                                                                                                        on
                                                                                                                                                        their
                                                                                                                                                        sites
                                                                                                                                                        and
                                                                                                                                                        apps.
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span
                                                                                                                                                                        style={{
                                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                                            fontSize: 15,
                                                                                                                                                                        }}
                                                                                                                                                                    >
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                fontSize: 15,
                                                                                                                                                                            }}
                                                                                                                                                                        >
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                                }}
                                                                                                                                                                            >
                                                                                                                                                                                <span
                                                                                                                                                                                    style={{
                                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                                    }}
                                                                                                                                                                                >
                                                                                                                                                                                    <span
                                                                                                                                                                                        style={{
                                                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                                                        }}
                                                                                                                                                                                    >
                                                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                                        </span>
                                                                                                                                                                                        <bdt className="block-component">
                                                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                                                            </span>
                                                                                                                                                                                        </bdt>
                                                                                                                                                                                    </span>
                                                                                                                                                                                </span>
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="inforetain"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        6.
                                                                                                                                                                        HOW
                                                                                                                                                                        LONG
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        KEEP
                                                                                                                                                                        YOUR
                                                                                                                                                                        INFORMATION?
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <strong>
                                                                                                                                                            <em>
                                                                                                                                                                In
                                                                                                                                                                Short:&nbsp;
                                                                                                                                                            </em>
                                                                                                                                                        </strong>
                                                                                                                                                        <em>
                                                                                                                                                            We
                                                                                                                                                            keep
                                                                                                                                                            your
                                                                                                                                                            information
                                                                                                                                                            for
                                                                                                                                                            as
                                                                                                                                                            long
                                                                                                                                                            as
                                                                                                                                                            necessary
                                                                                                                                                            to{" "}
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            fulfill
                                                                                                                                                            <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                            the
                                                                                                                                                            purposes
                                                                                                                                                            outlined
                                                                                                                                                            in
                                                                                                                                                            this
                                                                                                                                                            privacy
                                                                                                                                                            notice
                                                                                                                                                            unless
                                                                                                                                                            otherwise
                                                                                                                                                            required
                                                                                                                                                            by
                                                                                                                                                            law.
                                                                                                                                                        </em>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        We
                                                                                                                                                        will
                                                                                                                                                        only
                                                                                                                                                        keep
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        for
                                                                                                                                                        as
                                                                                                                                                        long
                                                                                                                                                        as
                                                                                                                                                        it
                                                                                                                                                        is
                                                                                                                                                        necessary
                                                                                                                                                        for
                                                                                                                                                        the
                                                                                                                                                        purposes
                                                                                                                                                        set
                                                                                                                                                        out
                                                                                                                                                        in
                                                                                                                                                        this
                                                                                                                                                        privacy
                                                                                                                                                        notice,
                                                                                                                                                        unless
                                                                                                                                                        a
                                                                                                                                                        longer
                                                                                                                                                        retention
                                                                                                                                                        period
                                                                                                                                                        is
                                                                                                                                                        required
                                                                                                                                                        or
                                                                                                                                                        permitted
                                                                                                                                                        by
                                                                                                                                                        law
                                                                                                                                                        (such
                                                                                                                                                        as
                                                                                                                                                        tax,
                                                                                                                                                        accounting,
                                                                                                                                                        or
                                                                                                                                                        other
                                                                                                                                                        legal
                                                                                                                                                        requirements).
                                                                                                                                                        <bdt className="block-component" />{" "}
                                                                                                                                                        No
                                                                                                                                                        purpose
                                                                                                                                                        in
                                                                                                                                                        this
                                                                                                                                                        notice
                                                                                                                                                        will
                                                                                                                                                        require
                                                                                                                                                        us
                                                                                                                                                        keeping
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        for
                                                                                                                                                        longer
                                                                                                                                                        than{" "}
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                            &nbsp;
                                                                                                                                                        </span>{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        <bdt className="question">
                                                                                                                                                            one
                                                                                                                                                            (1)
                                                                                                                                                        </bdt>{" "}
                                                                                                                                                        months
                                                                                                                                                        past
                                                                                                                                                        the
                                                                                                                                                        termination
                                                                                                                                                        of
                                                                                                                                                        the
                                                                                                                                                        user's
                                                                                                                                                        account
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    <bdt className="else-block" />
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>

                                                                                                                                                        .
                                                                                                                                                    </span>
                                                                                                                                                    &nbsp;
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        When
                                                                                                                                                        we
                                                                                                                                                        have
                                                                                                                                                        no
                                                                                                                                                        ongoing
                                                                                                                                                        legitimate
                                                                                                                                                        business
                                                                                                                                                        need
                                                                                                                                                        to
                                                                                                                                                        process
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information,
                                                                                                                                                        we
                                                                                                                                                        will
                                                                                                                                                        either
                                                                                                                                                        delete
                                                                                                                                                        or{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        anonymize
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                        such
                                                                                                                                                        information,
                                                                                                                                                        or,
                                                                                                                                                        if
                                                                                                                                                        this
                                                                                                                                                        is
                                                                                                                                                        not
                                                                                                                                                        possible
                                                                                                                                                        (for
                                                                                                                                                        example,
                                                                                                                                                        because
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        has
                                                                                                                                                        been
                                                                                                                                                        stored
                                                                                                                                                        in
                                                                                                                                                        backup
                                                                                                                                                        archives),
                                                                                                                                                        then
                                                                                                                                                        we
                                                                                                                                                        will
                                                                                                                                                        securely
                                                                                                                                                        store
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        and
                                                                                                                                                        isolate
                                                                                                                                                        it
                                                                                                                                                        from
                                                                                                                                                        any
                                                                                                                                                        further
                                                                                                                                                        processing
                                                                                                                                                        until
                                                                                                                                                        deletion
                                                                                                                                                        is
                                                                                                                                                        possible.
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="infosafe"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        7.
                                                                                                                                                                        HOW
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        KEEP
                                                                                                                                                                        YOUR
                                                                                                                                                                        INFORMATION
                                                                                                                                                                        SAFE?
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <strong>
                                                                                                                                                            <em>
                                                                                                                                                                In
                                                                                                                                                                Short:&nbsp;
                                                                                                                                                            </em>
                                                                                                                                                        </strong>
                                                                                                                                                        <em>
                                                                                                                                                            We
                                                                                                                                                            aim
                                                                                                                                                            to
                                                                                                                                                            protect
                                                                                                                                                            your
                                                                                                                                                            personal
                                                                                                                                                            information
                                                                                                                                                            through
                                                                                                                                                            a
                                                                                                                                                            system
                                                                                                                                                            of{" "}
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            organizational
                                                                                                                                                            <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                            and
                                                                                                                                                            technical
                                                                                                                                                            security
                                                                                                                                                            measures.
                                                                                                                                                        </em>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        We
                                                                                                                                                        have
                                                                                                                                                        implemented
                                                                                                                                                        appropriate
                                                                                                                                                        and
                                                                                                                                                        reasonable
                                                                                                                                                        technical
                                                                                                                                                        and{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        organizational
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                        security
                                                                                                                                                        measures
                                                                                                                                                        designed
                                                                                                                                                        to
                                                                                                                                                        protect
                                                                                                                                                        the
                                                                                                                                                        security
                                                                                                                                                        of
                                                                                                                                                        any
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        we
                                                                                                                                                        process.
                                                                                                                                                        However,
                                                                                                                                                        despite
                                                                                                                                                        our
                                                                                                                                                        safeguards
                                                                                                                                                        and
                                                                                                                                                        efforts
                                                                                                                                                        to
                                                                                                                                                        secure
                                                                                                                                                        your
                                                                                                                                                        information,
                                                                                                                                                        no
                                                                                                                                                        electronic
                                                                                                                                                        transmission
                                                                                                                                                        over
                                                                                                                                                        the
                                                                                                                                                        Internet
                                                                                                                                                        or
                                                                                                                                                        information
                                                                                                                                                        storage
                                                                                                                                                        technology
                                                                                                                                                        can
                                                                                                                                                        be
                                                                                                                                                        guaranteed
                                                                                                                                                        to
                                                                                                                                                        be
                                                                                                                                                        100%
                                                                                                                                                        secure,
                                                                                                                                                        so
                                                                                                                                                        we
                                                                                                                                                        cannot
                                                                                                                                                        promise
                                                                                                                                                        or
                                                                                                                                                        guarantee
                                                                                                                                                        that
                                                                                                                                                        hackers,
                                                                                                                                                        cybercriminals,
                                                                                                                                                        or
                                                                                                                                                        other{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        unauthorized
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                        third
                                                                                                                                                        parties
                                                                                                                                                        will
                                                                                                                                                        not
                                                                                                                                                        be
                                                                                                                                                        able
                                                                                                                                                        to
                                                                                                                                                        defeat
                                                                                                                                                        our
                                                                                                                                                        security
                                                                                                                                                        and
                                                                                                                                                        improperly
                                                                                                                                                        collect,
                                                                                                                                                        access,
                                                                                                                                                        steal,
                                                                                                                                                        or
                                                                                                                                                        modify
                                                                                                                                                        your
                                                                                                                                                        information.
                                                                                                                                                        Although
                                                                                                                                                        we
                                                                                                                                                        will
                                                                                                                                                        do
                                                                                                                                                        our
                                                                                                                                                        best
                                                                                                                                                        to
                                                                                                                                                        protect
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information,
                                                                                                                                                        transmission
                                                                                                                                                        of
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        to
                                                                                                                                                        and
                                                                                                                                                        from
                                                                                                                                                        our
                                                                                                                                                        Services
                                                                                                                                                        is
                                                                                                                                                        at
                                                                                                                                                        your
                                                                                                                                                        own
                                                                                                                                                        risk.
                                                                                                                                                        You
                                                                                                                                                        should
                                                                                                                                                        only
                                                                                                                                                        access
                                                                                                                                                        the
                                                                                                                                                        Services
                                                                                                                                                        within
                                                                                                                                                        a
                                                                                                                                                        secure
                                                                                                                                                        environment.
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                                                        </span>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="privacyrights"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        8.
                                                                                                                                                                        WHAT
                                                                                                                                                                        ARE
                                                                                                                                                                        YOUR
                                                                                                                                                                        PRIVACY
                                                                                                                                                                        RIGHTS?
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <strong>
                                                                                                                                                            <em>
                                                                                                                                                                In
                                                                                                                                                                Short:
                                                                                                                                                            </em>
                                                                                                                                                        </strong>
                                                                                                                                                        <em>
                                                                                                                                                            &nbsp;
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <em>
                                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                                        </em>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                                &nbsp;
                                                                                                                                                            </span>
                                                                                                                                                            You
                                                                                                                                                            may
                                                                                                                                                            review,
                                                                                                                                                            change,
                                                                                                                                                            or
                                                                                                                                                            terminate
                                                                                                                                                            your
                                                                                                                                                            account
                                                                                                                                                            at
                                                                                                                                                            any
                                                                                                                                                            time.
                                                                                                                                                        </em>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <bdt className="block-component">
                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                </bdt>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="withdrawconsent"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <strong>
                                                                                                                                                            <u>
                                                                                                                                                                Withdrawing
                                                                                                                                                                your
                                                                                                                                                                consent:
                                                                                                                                                            </u>
                                                                                                                                                        </strong>{" "}
                                                                                                                                                        If
                                                                                                                                                        we
                                                                                                                                                        are
                                                                                                                                                        relying
                                                                                                                                                        on
                                                                                                                                                        your
                                                                                                                                                        consent
                                                                                                                                                        to
                                                                                                                                                        process
                                                                                                                                                        your
                                                                                                                                                        personal
                                                                                                                                                        information,
                                                                                                                                                        <bdt className="block-component" />{" "}
                                                                                                                                                        which
                                                                                                                                                        may
                                                                                                                                                        be
                                                                                                                                                        express
                                                                                                                                                        and/or
                                                                                                                                                        implied
                                                                                                                                                        consent
                                                                                                                                                        depending
                                                                                                                                                        on
                                                                                                                                                        the
                                                                                                                                                        applicable
                                                                                                                                                        law,
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                        you
                                                                                                                                                        have
                                                                                                                                                        the
                                                                                                                                                        right
                                                                                                                                                        to
                                                                                                                                                        withdraw
                                                                                                                                                        your
                                                                                                                                                        consent
                                                                                                                                                        at
                                                                                                                                                        any
                                                                                                                                                        time.
                                                                                                                                                        You
                                                                                                                                                        can
                                                                                                                                                        withdraw
                                                                                                                                                        your
                                                                                                                                                        consent
                                                                                                                                                        at
                                                                                                                                                        any
                                                                                                                                                        time
                                                                                                                                                        by
                                                                                                                                                        contacting
                                                                                                                                                        us
                                                                                                                                                        by
                                                                                                                                                        using
                                                                                                                                                        the
                                                                                                                                                        contact
                                                                                                                                                        details
                                                                                                                                                        provided
                                                                                                                                                        in
                                                                                                                                                        the
                                                                                                                                                        section{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        "
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <a
                                                                                                                                                data-custom-class="link"
                                                                                                                                                href="#contact"
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(0, 58, 250)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(0, 58, 250)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            HOW
                                                                                                                                                            CAN
                                                                                                                                                            YOU
                                                                                                                                                            CONTACT
                                                                                                                                                            US
                                                                                                                                                            ABOUT
                                                                                                                                                            THIS
                                                                                                                                                            NOTICE?
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </a>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        "
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                        below
                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                        .
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    However,
                                                                                                                                                    please
                                                                                                                                                    note
                                                                                                                                                    that
                                                                                                                                                    this
                                                                                                                                                    will
                                                                                                                                                    not
                                                                                                                                                    affect
                                                                                                                                                    the
                                                                                                                                                    lawfulness
                                                                                                                                                    of
                                                                                                                                                    the
                                                                                                                                                    processing
                                                                                                                                                    before
                                                                                                                                                    its
                                                                                                                                                    withdrawal
                                                                                                                                                    nor,
                                                                                                                                                    <bdt className="block-component" />{" "}
                                                                                                                                                    when
                                                                                                                                                    applicable
                                                                                                                                                    law
                                                                                                                                                    allows,
                                                                                                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                    will
                                                                                                                                                    it
                                                                                                                                                    affect
                                                                                                                                                    the
                                                                                                                                                    processing
                                                                                                                                                    of
                                                                                                                                                    your
                                                                                                                                                    personal
                                                                                                                                                    information
                                                                                                                                                    conducted
                                                                                                                                                    in
                                                                                                                                                    reliance
                                                                                                                                                    on
                                                                                                                                                    lawful
                                                                                                                                                    processing
                                                                                                                                                    grounds
                                                                                                                                                    other
                                                                                                                                                    than
                                                                                                                                                    consent.
                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <bdt className="block-component">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                                </span>
                                                                                                                                            </bdt>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="heading_2">
                                                                                                                                                    <strong>
                                                                                                                                                        Account
                                                                                                                                                        Information
                                                                                                                                                    </strong>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    If
                                                                                                                                                    you
                                                                                                                                                    would
                                                                                                                                                    at
                                                                                                                                                    any
                                                                                                                                                    time
                                                                                                                                                    like
                                                                                                                                                    to
                                                                                                                                                    review
                                                                                                                                                    or
                                                                                                                                                    change
                                                                                                                                                    the
                                                                                                                                                    information
                                                                                                                                                    in
                                                                                                                                                    your
                                                                                                                                                    account
                                                                                                                                                    or
                                                                                                                                                    terminate
                                                                                                                                                    your
                                                                                                                                                    account,
                                                                                                                                                    you
                                                                                                                                                    can:
                                                                                                                                                    <bdt className="forloop-component" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <ul>
                                                                                                                                            <li
                                                                                                                                                style={{
                                                                                                                                                    lineHeight:
                                                                                                                                                        "1.5",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <bdt className="question">
                                                                                                                                                            Log
                                                                                                                                                            in
                                                                                                                                                            to
                                                                                                                                                            your
                                                                                                                                                            account
                                                                                                                                                            settings
                                                                                                                                                            and
                                                                                                                                                            update
                                                                                                                                                            your
                                                                                                                                                            user
                                                                                                                                                            account.
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </li>
                                                                                                                                        </ul>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <bdt className="forloop-component" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <ul>
                                                                                                                                            <li
                                                                                                                                                style={{
                                                                                                                                                    lineHeight:
                                                                                                                                                        "1.5",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <bdt className="question">
                                                                                                                                                            Contact
                                                                                                                                                            us
                                                                                                                                                            using
                                                                                                                                                            the
                                                                                                                                                            contact
                                                                                                                                                            information
                                                                                                                                                            provided.
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </li>
                                                                                                                                        </ul>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <bdt className="forloop-component" />
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    Upon
                                                                                                                                                    your
                                                                                                                                                    request
                                                                                                                                                    to
                                                                                                                                                    terminate
                                                                                                                                                    your
                                                                                                                                                    account,
                                                                                                                                                    we
                                                                                                                                                    will
                                                                                                                                                    deactivate
                                                                                                                                                    or
                                                                                                                                                    delete
                                                                                                                                                    your
                                                                                                                                                    account
                                                                                                                                                    and
                                                                                                                                                    information
                                                                                                                                                    from
                                                                                                                                                    our
                                                                                                                                                    active
                                                                                                                                                    databases.
                                                                                                                                                    However,
                                                                                                                                                    we
                                                                                                                                                    may
                                                                                                                                                    retain
                                                                                                                                                    some
                                                                                                                                                    information
                                                                                                                                                    in
                                                                                                                                                    our
                                                                                                                                                    files
                                                                                                                                                    to
                                                                                                                                                    prevent
                                                                                                                                                    fraud,
                                                                                                                                                    troubleshoot
                                                                                                                                                    problems,
                                                                                                                                                    assist
                                                                                                                                                    with
                                                                                                                                                    any
                                                                                                                                                    investigations,
                                                                                                                                                    enforce
                                                                                                                                                    our
                                                                                                                                                    legal
                                                                                                                                                    terms
                                                                                                                                                    and/or
                                                                                                                                                    comply
                                                                                                                                                    with
                                                                                                                                                    applicable
                                                                                                                                                    legal
                                                                                                                                                    requirements.
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <bdt className="statement-end-if-in-editor">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                                </span>
                                                                                                                                            </bdt>
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span
                                                                                                                                                                        style={{
                                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                                        }}
                                                                                                                                                                    >
                                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                                }}
                                                                                                                                                                            >
                                                                                                                                                                                <span
                                                                                                                                                                                    style={{
                                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                                    }}
                                                                                                                                                                                >
                                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                                </span>
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <bdt className="block-component">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                                </span>
                                                                                                                                            </bdt>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    If
                                                                                                                                                    you
                                                                                                                                                    have
                                                                                                                                                    questions
                                                                                                                                                    or
                                                                                                                                                    comments
                                                                                                                                                    about
                                                                                                                                                    your
                                                                                                                                                    privacy
                                                                                                                                                    rights,
                                                                                                                                                    you
                                                                                                                                                    may
                                                                                                                                                    email
                                                                                                                                                    us
                                                                                                                                                    at{" "}
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        cdbpineda02@gmail.com
                                                                                                                                                    </bdt>

                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <bdt className="statement-end-if-in-editor">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text" />
                                                                                                                                                </span>
                                                                                                                                            </bdt>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="DNT"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        9.
                                                                                                                                                                        CONTROLS
                                                                                                                                                                        FOR
                                                                                                                                                                        DO-NOT-TRACK
                                                                                                                                                                        FEATURES
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Most
                                                                                                                                                        web
                                                                                                                                                        browsers
                                                                                                                                                        and
                                                                                                                                                        some
                                                                                                                                                        mobile
                                                                                                                                                        operating
                                                                                                                                                        systems
                                                                                                                                                        and
                                                                                                                                                        mobile
                                                                                                                                                        applications
                                                                                                                                                        include
                                                                                                                                                        a
                                                                                                                                                        Do-Not-Track
                                                                                                                                                        (
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        "DNT"
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                        )
                                                                                                                                                        feature
                                                                                                                                                        or
                                                                                                                                                        setting
                                                                                                                                                        you
                                                                                                                                                        can
                                                                                                                                                        activate
                                                                                                                                                        to
                                                                                                                                                        signal
                                                                                                                                                        your
                                                                                                                                                        privacy
                                                                                                                                                        preference
                                                                                                                                                        not
                                                                                                                                                        to
                                                                                                                                                        have
                                                                                                                                                        data
                                                                                                                                                        about
                                                                                                                                                        your
                                                                                                                                                        online
                                                                                                                                                        browsing
                                                                                                                                                        activities
                                                                                                                                                        monitored
                                                                                                                                                        and
                                                                                                                                                        collected.
                                                                                                                                                        At
                                                                                                                                                        this
                                                                                                                                                        stage
                                                                                                                                                        no
                                                                                                                                                        uniform
                                                                                                                                                        technology
                                                                                                                                                        standard
                                                                                                                                                        for{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        recognizing
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                        and
                                                                                                                                                        implementing
                                                                                                                                                        DNT
                                                                                                                                                        signals
                                                                                                                                                        has
                                                                                                                                                        been{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        finalized
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                                        .
                                                                                                                                                        As
                                                                                                                                                        such,
                                                                                                                                                        we
                                                                                                                                                        do
                                                                                                                                                        not
                                                                                                                                                        currently
                                                                                                                                                        respond
                                                                                                                                                        to
                                                                                                                                                        DNT
                                                                                                                                                        browser
                                                                                                                                                        signals
                                                                                                                                                        or
                                                                                                                                                        any
                                                                                                                                                        other
                                                                                                                                                        mechanism
                                                                                                                                                        that
                                                                                                                                                        automatically
                                                                                                                                                        communicates
                                                                                                                                                        your
                                                                                                                                                        choice
                                                                                                                                                        not
                                                                                                                                                        to
                                                                                                                                                        be
                                                                                                                                                        tracked
                                                                                                                                                        online.
                                                                                                                                                        If
                                                                                                                                                        a
                                                                                                                                                        standard
                                                                                                                                                        for
                                                                                                                                                        online
                                                                                                                                                        tracking
                                                                                                                                                        is
                                                                                                                                                        adopted
                                                                                                                                                        that
                                                                                                                                                        we
                                                                                                                                                        must
                                                                                                                                                        follow
                                                                                                                                                        in
                                                                                                                                                        the
                                                                                                                                                        future,
                                                                                                                                                        we
                                                                                                                                                        will
                                                                                                                                                        inform
                                                                                                                                                        you
                                                                                                                                                        about
                                                                                                                                                        that
                                                                                                                                                        practice
                                                                                                                                                        in
                                                                                                                                                        a
                                                                                                                                                        revised
                                                                                                                                                        version
                                                                                                                                                        of
                                                                                                                                                        this
                                                                                                                                                        privacy
                                                                                                                                                        notice.
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                            <bdt className="block-component">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                />
                                                                                                                                            </bdt>
                                                                                                                                            <bdt className="block-component">
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                />
                                                                                                                                            </bdt>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="policyupdates"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        10.
                                                                                                                                                                        DO
                                                                                                                                                                        WE
                                                                                                                                                                        MAKE
                                                                                                                                                                        UPDATES
                                                                                                                                                                        TO
                                                                                                                                                                        THIS
                                                                                                                                                                        NOTICE?
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <em>
                                                                                                                                                            <strong>
                                                                                                                                                                In
                                                                                                                                                                Short:&nbsp;
                                                                                                                                                            </strong>
                                                                                                                                                            Yes,
                                                                                                                                                            we
                                                                                                                                                            will
                                                                                                                                                            update
                                                                                                                                                            this
                                                                                                                                                            notice
                                                                                                                                                            as
                                                                                                                                                            necessary
                                                                                                                                                            to
                                                                                                                                                            stay
                                                                                                                                                            compliant
                                                                                                                                                            with
                                                                                                                                                            relevant
                                                                                                                                                            laws.
                                                                                                                                                        </em>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        We
                                                                                                                                                        may
                                                                                                                                                        update
                                                                                                                                                        this
                                                                                                                                                        privacy
                                                                                                                                                        notice
                                                                                                                                                        from
                                                                                                                                                        time
                                                                                                                                                        to
                                                                                                                                                        time.
                                                                                                                                                        The
                                                                                                                                                        updated
                                                                                                                                                        version
                                                                                                                                                        will
                                                                                                                                                        be
                                                                                                                                                        indicated
                                                                                                                                                        by
                                                                                                                                                        an
                                                                                                                                                        updated{" "}
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        "Revised"
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                                                                                                                        date
                                                                                                                                                        and
                                                                                                                                                        the
                                                                                                                                                        updated
                                                                                                                                                        version
                                                                                                                                                        will
                                                                                                                                                        be
                                                                                                                                                        effective
                                                                                                                                                        as
                                                                                                                                                        soon
                                                                                                                                                        as
                                                                                                                                                        it
                                                                                                                                                        is
                                                                                                                                                        accessible.
                                                                                                                                                        If
                                                                                                                                                        we
                                                                                                                                                        make
                                                                                                                                                        material
                                                                                                                                                        changes
                                                                                                                                                        to
                                                                                                                                                        this
                                                                                                                                                        privacy
                                                                                                                                                        notice,
                                                                                                                                                        we
                                                                                                                                                        may
                                                                                                                                                        notify
                                                                                                                                                        you
                                                                                                                                                        either
                                                                                                                                                        by
                                                                                                                                                        prominently
                                                                                                                                                        posting
                                                                                                                                                        a
                                                                                                                                                        notice
                                                                                                                                                        of
                                                                                                                                                        such
                                                                                                                                                        changes
                                                                                                                                                        or
                                                                                                                                                        by
                                                                                                                                                        directly
                                                                                                                                                        sending
                                                                                                                                                        you
                                                                                                                                                        a
                                                                                                                                                        notification.
                                                                                                                                                        We
                                                                                                                                                        encourage
                                                                                                                                                        you
                                                                                                                                                        to
                                                                                                                                                        review
                                                                                                                                                        this
                                                                                                                                                        privacy
                                                                                                                                                        notice
                                                                                                                                                        frequently
                                                                                                                                                        to
                                                                                                                                                        be
                                                                                                                                                        informed
                                                                                                                                                        of
                                                                                                                                                        how
                                                                                                                                                        we
                                                                                                                                                        are
                                                                                                                                                        protecting
                                                                                                                                                        your
                                                                                                                                                        information.
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="contact"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        11.
                                                                                                                                                                        HOW
                                                                                                                                                                        CAN
                                                                                                                                                                        YOU
                                                                                                                                                                        CONTACT
                                                                                                                                                                        US
                                                                                                                                                                        ABOUT
                                                                                                                                                                        THIS
                                                                                                                                                                        NOTICE?
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        If
                                                                                                                                                        you
                                                                                                                                                        have
                                                                                                                                                        questions
                                                                                                                                                        or
                                                                                                                                                        comments
                                                                                                                                                        about
                                                                                                                                                        this
                                                                                                                                                        notice,
                                                                                                                                                        you
                                                                                                                                                        may{" "}
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                <bdt className="block-component">
                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                </bdt>
                                                                                                                                                                email
                                                                                                                                                                us
                                                                                                                                                                at{" "}
                                                                                                                                                                <bdt className="question">
                                                                                                                                                                    cdbpineda02@gmail.com
                                                                                                                                                                    or&nbsp;
                                                                                                                                                                </bdt>
                                                                                                                                                                <bdt className="statement-end-if-in-editor">
                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                </bdt>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                                    contact
                                                                                                                                                                    us
                                                                                                                                                                    by
                                                                                                                                                                    post
                                                                                                                                                                    at:
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="question">
                                                                                                                                                                            musictaste.me
                                                                                                                                                                        </bdt>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        Boni
                                                                                                                                                        Ave.
                                                                                                                                                    </bdt>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        Mandaluyong
                                                                                                                                                        City
                                                                                                                                                    </bdt>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <bdt className="block-component" />

                                                                                                                                                            ,{" "}
                                                                                                                                                            <bdt className="question">
                                                                                                                                                                Metro
                                                                                                                                                                Manila
                                                                                                                                                            </bdt>
                                                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                                                            <bdt className="block-component" />{" "}
                                                                                                                                                            <bdt className="question">
                                                                                                                                                                1550
                                                                                                                                                            </bdt>
                                                                                                                                                            <bdt className="statement-end-if-in-editor" />
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        Philippines
                                                                                                                                                    </bdt>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <bdt className="statement-end-if-in-editor">
                                                                                                                                                                    <span
                                                                                                                                                                        style={{
                                                                                                                                                                            fontSize: 15,
                                                                                                                                                                        }}
                                                                                                                                                                    >
                                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                                }}
                                                                                                                                                                            >
                                                                                                                                                                                <bdt className="statement-end-if-in-editor">
                                                                                                                                                                                    <span
                                                                                                                                                                                        style={{
                                                                                                                                                                                            fontSize: 15,
                                                                                                                                                                                        }}
                                                                                                                                                                                    >
                                                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                                                            <span
                                                                                                                                                                                                style={{
                                                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                                                }}
                                                                                                                                                                                            >
                                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                                            </span>
                                                                                                                                                                                        </span>
                                                                                                                                                                                    </span>
                                                                                                                                                                                </bdt>
                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                                            }}
                                                                                                                                                                        >
                                                                                                                                                                            <span
                                                                                                                                                                                style={{
                                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                                }}
                                                                                                                                                                            >
                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </bdt>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <bdt className="statement-end-if-in-editor">
                                                                                                                                                                    <span
                                                                                                                                                                        style={{
                                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                                        }}
                                                                                                                                                                    >
                                                                                                                                                                        <span
                                                                                                                                                                            style={{
                                                                                                                                                                                fontSize: 15,
                                                                                                                                                                            }}
                                                                                                                                                                        >
                                                                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                                                                <bdt className="block-component">
                                                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                                                </bdt>
                                                                                                                                                                            </span>
                                                                                                                                                                        </span>
                                                                                                                                                                    </span>
                                                                                                                                                                </bdt>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                    <bdt className="block-component">
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                            }}
                                                                                                                                                        />
                                                                                                                                                    </bdt>
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                                            <span
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                                    fontSize: 15,
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <span
                                                                                                                                                                    style={{
                                                                                                                                                                        fontSize: 15,
                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                                        <bdt className="statement-end-if-in-editor">
                                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                                        </bdt>
                                                                                                                                                                    </span>
                                                                                                                                                                </span>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            id="request"
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    color: "rgb(127, 127, 127)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                        fontSize: 15,
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span
                                                                                                                                                        style={{
                                                                                                                                                            fontSize: 15,
                                                                                                                                                            color: "rgb(89, 89, 89)",
                                                                                                                                                        }}
                                                                                                                                                    >
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                fontSize: 15,
                                                                                                                                                                color: "rgb(89, 89, 89)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <span
                                                                                                                                                                id="control"
                                                                                                                                                                style={{
                                                                                                                                                                    color: "rgb(0, 0, 0)",
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <strong>
                                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                                        12.
                                                                                                                                                                        HOW
                                                                                                                                                                        CAN
                                                                                                                                                                        YOU
                                                                                                                                                                        REVIEW,
                                                                                                                                                                        UPDATE,
                                                                                                                                                                        OR
                                                                                                                                                                        DELETE
                                                                                                                                                                        THE
                                                                                                                                                                        DATA
                                                                                                                                                                        WE
                                                                                                                                                                        COLLECT
                                                                                                                                                                        FROM
                                                                                                                                                                        YOU?
                                                                                                                                                                    </span>
                                                                                                                                                                </strong>
                                                                                                                                                            </span>
                                                                                                                                                        </span>
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <br />
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                            style={{
                                                                                                                                                lineHeight:
                                                                                                                                                    "1.5",
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <span
                                                                                                                                                style={{
                                                                                                                                                    fontSize: 15,
                                                                                                                                                    color: "rgb(89, 89, 89)",
                                                                                                                                                }}
                                                                                                                                            >
                                                                                                                                                <span
                                                                                                                                                    style={{
                                                                                                                                                        fontSize: 15,
                                                                                                                                                        color: "rgb(89, 89, 89)",
                                                                                                                                                    }}
                                                                                                                                                >
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        Based
                                                                                                                                                        on
                                                                                                                                                        the
                                                                                                                                                        applicable
                                                                                                                                                        laws
                                                                                                                                                        of
                                                                                                                                                        your
                                                                                                                                                        country,
                                                                                                                                                        you
                                                                                                                                                        may
                                                                                                                                                        have
                                                                                                                                                        the
                                                                                                                                                        right
                                                                                                                                                        to
                                                                                                                                                        request
                                                                                                                                                        access
                                                                                                                                                        to
                                                                                                                                                        the
                                                                                                                                                        personal
                                                                                                                                                        information
                                                                                                                                                        we
                                                                                                                                                        collect
                                                                                                                                                        from
                                                                                                                                                        you,
                                                                                                                                                        change
                                                                                                                                                        that
                                                                                                                                                        information,
                                                                                                                                                        or
                                                                                                                                                        delete
                                                                                                                                                        it.{" "}
                                                                                                                                                        <bdt className="else-block">
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                            To
                                                                                                                                                            request
                                                                                                                                                            to
                                                                                                                                                            review,
                                                                                                                                                            update,
                                                                                                                                                            or
                                                                                                                                                            delete
                                                                                                                                                            your
                                                                                                                                                            personal
                                                                                                                                                            information,
                                                                                                                                                            please{" "}
                                                                                                                                                            <bdt className="block-component" />
                                                                                                                                                        </bdt>
                                                                                                                                                    </span>
                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        visit:{" "}
                                                                                                                                                        <span
                                                                                                                                                            style={{
                                                                                                                                                                color: "rgb(0, 58, 250)",
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <bdt className="question">
                                                                                                                                                                <a
                                                                                                                                                                    href="https://musictaste.me/profile"
                                                                                                                                                                    target="_blank"
                                                                                                                                                                    data-custom-class="link"
                                                                                                                                                                >
                                                                                                                                                                    https://musictaste.me/profile
                                                                                                                                                                </a>
                                                                                                                                                            </bdt>
                                                                                                                                                        </span>
                                                                                                                                                        <bdt className="else-block" />
                                                                                                                                                    </span>
                                                                                                                                                </span>
                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    .
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </div>
                                                                                                                                        <style
                                                                                                                                            dangerouslySetInnerHTML={{
                                                                                                                                                __html: "\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    ",
                                                                                                                                            }}
                                                                                                                                        />
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="terms__button-wrapper">
                    <button onClick={handleCloseTerms} className="terms__agree">
                        I agree to the Terms of Use
                    </button>
                    <Link className="terms__disagree" onClick={handleLogout}>
                        I disagree to the Terms of Use
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
