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
                        __html: "\n    [data-custom-class='body'], [data-custom-class='body'] * {\n            background: transparent !important;\n          }\n  [data-custom-class='title'], [data-custom-class='title'] * {\n            font-family: Arial !important;\n  font-size: 26px !important;\n  color: #000000 !important;\n          }\n  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {\n            font-family: Arial !important;\n  color: #595959 !important;\n  font-size: 14px !important;\n          }\n  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {\n            font-family: Arial !important;\n  font-size: 19px !important;\n  color: #000000 !important;\n          }\n  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {\n            font-family: Arial !important;\n  font-size: 17px !important;\n  color: #000000 !important;\n          }\n  [data-custom-class='body_text'], [data-custom-class='body_text'] * {\n            color: #595959 !important;\n  font-size: 14px !important;\n  font-family: Arial !important;\n          }\n  [data-custom-class='link'], [data-custom-class='link'] * {\n            color: #3030F1 !important;\n  font-size: 14px !important;\n  font-family: Arial !important;\n  word-break: break-word !important;\n          }\n  ",
                    }}
                />
                <div data-custom-class="body">
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="title"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component">
                                <span style={{ fontSize: 19 }} />
                            </bdt>
                            <bdt className="question">
                                <strong>TERMS OF USE FOR MUSICTASTE.ME</strong>
                            </bdt>
                            <bdt className="statement-end-if-in-editor" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="subtitle"
                            style={{ lineHeight: "1.5" }}
                        >
                            <strong>Last updated</strong>{" "}
                            <bdt className="question">
                                <strong>April 15, 2024</strong>
                            </bdt>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.1" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "115%" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "115%" }}
                        >
                            <br />
                        </div>
                        <div style={{ lineHeight: "1.5" }}>
                            <strong>
                                <span data-custom-class="heading_1">
                                    AGREEMENT TO OUR LEGAL TERMS
                                </span>
                            </strong>
                        </div>
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            id="agreement"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a name="_6aa3gkhykvst" />
                        </div>
                    </div>
                    <div align="center" style={{ lineHeight: 1 }}>
                        <br />
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                We are{" "}
                                <bdt
                                    className="block-container question question-in-editor"
                                    data-id="9d459c4e-c548-e5cb-7729-a118548965d2"
                                    data-type="question"
                                >
                                    musictaste.me
                                </bdt>
                                <bdt className="block-component" /> (
                                <bdt className="block-component" />"
                                <strong>Company</strong>," "<strong>we</strong>
                                ," "<strong>us</strong>," "<strong>our</strong>"
                                <bdt className="statement-end-if-in-editor" />)
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        msoFareastFontFamily: "Calibri",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11.0pt",
                                            lineHeight: "115%",
                                            msoFareastFontFamily: "Calibri",
                                            color: "#595959",
                                            msoThemecolor: "text1",
                                            msoThemetint: 166,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11.0pt",
                                                lineHeight: "115%",
                                                msoFareastFontFamily: "Calibri",
                                                color: "#595959",
                                                msoThemecolor: "text1",
                                                msoThemetint: 166,
                                            }}
                                        >
                                            <bdt className="question">
                                                <bdt className="block-component" />
                                            </bdt>
                                            <span
                                                style={{
                                                    fontSize: "11.0pt",
                                                    lineHeight: "115%",
                                                    msoFareastFontFamily:
                                                        "Calibri",
                                                    color: "#595959",
                                                    msoThemecolor: "text1",
                                                    msoThemetint: 166,
                                                }}
                                            >
                                                <bdt className="block-component" />
                                            </span>
                                            , a company registered in
                                            <bdt className="block-component" />
                                            <bdt className="block-component" />{" "}
                                            the{" "}
                                            <span
                                                style={{
                                                    fontSize: "11.0pt",
                                                    lineHeight: "115%",
                                                    msoFareastFontFamily:
                                                        "Calibri",
                                                    color: "#595959",
                                                    msoThemecolor: "text1",
                                                    msoThemetint: 166,
                                                }}
                                            >
                                                <bdt className="question">
                                                    Philippines
                                                </bdt>
                                            </span>
                                            <bdt className="block-component">
                                                <span
                                                    style={{
                                                        fontSize: "11.0pt",
                                                        lineHeight: "115%",
                                                        msoFareastFontFamily:
                                                            "Calibri",
                                                        color: "#595959",
                                                        msoThemecolor: "text1",
                                                        msoThemetint: 166,
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "11.0pt",
                                                            lineHeight: "115%",
                                                            msoFareastFontFamily:
                                                                "Calibri",
                                                            color: "#595959",
                                                            msoThemecolor:
                                                                "text1",
                                                            msoThemetint: 166,
                                                        }}
                                                    >
                                                        <bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                </span>
                                            </bdt>
                                        </span>
                                    </span>{" "}
                                    at <bdt className="question">Boni Ave.</bdt>
                                    <bdt className="block-component" />
                                </span>
                            </span>
                            , <bdt className="question">Mandaluyong City</bdt>
                            <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text">
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <bdt className="block-component" />
                                                ,{" "}
                                                <bdt className="question">
                                                    Metro Manila
                                                </bdt>
                                                <bdt className="statement-end-if-in-editor" />
                                                <bdt className="block-component" />{" "}
                                                <bdt className="question">
                                                    1550
                                                </bdt>
                                                <bdt className="statement-end-if-in-editor" />
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    msoFareastFontFamily: "Calibri",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        msoFareastFontFamily: "Calibri",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    <bdt className="else-block" />
                                </span>
                            </span>
                            <bdt className="statement-end-if-in-editor">.</bdt>
                            <bdt className="block-component" />
                        </div>
                    </div>
                    <div align="center" style={{ lineHeight: 1 }}>
                        <br />
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                We operate <bdt className="block-component" />
                                the website{" "}
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    <bdt className="question">
                                        <a
                                            href="https://musictaste.me"
                                            target="_blank"
                                            data-custom-class="link"
                                        >
                                            https://musictaste.me
                                        </a>
                                    </bdt>
                                </span>{" "}
                                (the <bdt className="block-component" />"
                                <strong>Site</strong>"
                                <bdt className="statement-end-if-in-editor" />)
                                <bdt className="block-component" />,{" "}
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="block-component" />
                                the mobile application{" "}
                                <bdt className="question">
                                    musictaste.me
                                </bdt>{" "}
                                (the <bdt className="block-component" />"
                                <strong>App</strong>"
                                <bdt className="statement-end-if-in-editor" />)
                                <bdt className="statement-end-if-in-editor" />,
                                as well as any other related products and
                                services that refer or link to these legal terms
                                (the <bdt className="block-component" />"
                                <strong>Legal Terms</strong>"
                                <bdt className="statement-end-if-in-editor" />)
                                (collectively, the{" "}
                                <bdt className="block-component" />"
                                <strong>Services</strong>"
                                <bdt className="statement-end-if-in-editor" />
                                ).
                                <bdt className="block-component" />
                            </span>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1 }}>
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="question">
                                musictaste.me aims to identify the user's music
                                taste and music personality based on the user
                                input
                            </bdt>
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                <bdt className="statement-end-if-in-editor" />
                            </span>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1 }}>
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                You can contact us by{" "}
                                <bdt className="block-component" />
                                phone at{" "}
                                <bdt className="question">09491926132</bdt>,
                                email at{" "}
                                <bdt className="question">
                                    cdbpineda@rtu.edu.ph
                                </bdt>
                                <bdt className="block-component" />,
                                <bdt className="statement-end-if-in-editor" />{" "}
                                or by mail to{" "}
                                <bdt className="question">Boni Ave.</bdt>
                                <bdt className="block-component" />,{" "}
                                <bdt className="question">Mandaluyong City</bdt>
                                <bdt className="block-component" />,{" "}
                                <bdt className="question">Metro Manila</bdt>
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="block-component" />{" "}
                                <bdt className="question">1550</bdt>
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="block-component">
                                    <bdt className="block-component">
                                        ,&nbsp;
                                    </bdt>
                                    <bdt className="question">Philippines</bdt>
                                    <bdt className="statement-end-if-in-editor" />
                                </bdt>
                                .
                            </span>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1 }}>
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                These Legal Terms constitute a legally binding
                                agreement made between you, whether personally
                                or on behalf of an entity (
                                <bdt className="block-component" />"
                                <strong>you</strong>"
                                <bdt className="statement-end-if-in-editor" />
                                ), and{" "}
                                <bdt className="question">musictaste.me</bdt>,
                                concerning your access to and use of the
                                Services. You agree that by accessing the
                                Services, you have read, understood, and agreed
                                to be bound by all of these Legal Terms. IF YOU
                                DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN
                                YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                                SERVICES AND YOU MUST DISCONTINUE USE
                                IMMEDIATELY.
                                <bdt className="block-component" />
                            </span>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1 }}>
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                Supplemental terms and conditions or documents
                                that may be posted on the Services from time to
                                time are hereby expressly incorporated herein by
                                reference. We reserve the right, in our sole
                                discretion, to make changes or modifications to
                                these Legal Terms{" "}
                                <bdt className="block-component" />
                                at any time and for any reason
                                <bdt className="statement-end-if-in-editor" />.
                                We will alert you about any changes by updating
                                the <bdt className="block-component" />
                                "Last updated"
                                <bdt className="statement-end-if-in-editor" />{" "}
                                date of these Legal Terms, and you waive any
                                right to receive specific notice of each such
                                change. It is your responsibility to
                                periodically review these Legal Terms to stay
                                informed of updates. You will be subject to, and
                                will be deemed to have been made aware of and to
                                have accepted, the changes in any revised Legal
                                Terms by your continued use of the Services
                                after the date such revised Legal Terms are
                                posted.
                                <bdt className="else-block" />
                            </span>
                        </div>
                    </div>
                    <div align="center" style={{ lineHeight: 1 }}>
                        <br />
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt
                                className="block-container if"
                                data-type="if"
                                id="a2595956-7028-dbe5-123e-d3d3a93ed076"
                            >
                                <bdt data-type="conditional-block">
                                    <bdt data-type="body">
                                        <span
                                            style={{
                                                fontSize: "11.0pt",
                                                lineHeight: "115%",
                                                fontFamily: "Arial",
                                                color: "#595959",
                                                msoThemecolor: "text1",
                                                msoThemetint: 166,
                                            }}
                                        >
                                            <bdt className="block-component" />
                                            <bdt
                                                className="block-container if"
                                                data-type="if"
                                                id="a2595956-7028-dbe5-123e-d3d3a93ed076"
                                            >
                                                <bdt data-type="conditional-block">
                                                    <bdt data-type="body">
                                                        <span
                                                            style={{
                                                                color: "rgb(89, 89, 89)",
                                                                fontSize:
                                                                    "14.6667px",
                                                            }}
                                                        >
                                                            All users who are
                                                            minors in the
                                                            jurisdiction in
                                                            which they reside
                                                            (generally under the
                                                            age of 18) must have
                                                            the permission of,
                                                            and be directly
                                                            supervised by, their
                                                            parent or guardian
                                                            to use the Services.
                                                            If you are a minor,
                                                            you must have your
                                                            parent or guardian
                                                            read and agree to
                                                            these Legal Terms
                                                            prior to you using
                                                            the Services.
                                                        </span>
                                                    </bdt>
                                                </bdt>
                                            </bdt>
                                        </span>
                                    </bdt>
                                </bdt>
                                <bdt
                                    className="statement-end-if-in-editor"
                                    data-type="close"
                                />
                            </bdt>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1 }}>
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            We recommend that you print a copy of these Legal
                            Terms for your records.
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="heading_1"
                            style={{ lineHeight: "1.5" }}
                        >
                            <strong>TABLE OF CONTENTS</strong>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a href="#services">
                                <span data-custom-class="link">
                                    <span
                                        style={{
                                            color: "rgb(0, 58, 250)",
                                            fontSize: 15,
                                        }}
                                    >
                                        <span data-custom-class="body_text">
                                            1. OUR SERVICES
                                        </span>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#ip">
                                <span style={{ color: "rgb(0, 58, 250)" }}>
                                    <span data-custom-class="body_text">
                                        2. INTELLECTUAL PROPERTY RIGHTS
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#userreps" />
                            <a data-custom-class="link" href="#userreps">
                                <span
                                    style={{
                                        color: "rbg(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        3. USER REPRESENTATIONS
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text">
                                    <bdt className="block-component" />
                                </span>
                            </span>
                            <a data-custom-class="link" href="#userreg">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        4. USER REGISTRATION
                                    </span>
                                </span>
                            </a>
                            <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text">
                                    <bdt className="statement-end-if-in-editor" />
                                </span>
                            </span>{" "}
                            <a data-custom-class="link" href="#products" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#products">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                        <bdt className="block-component" />
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#purchases" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#purchases">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </a>
                            <bdt className="block-component">
                                <span style={{ fontSize: 15 }} />
                            </bdt>
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text">
                                    <bdt className="block-component" />
                                </span>
                            </span>{" "}
                            <a data-custom-class="link" href="#software" />{" "}
                            <a data-custom-class="link" href="#software" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#software">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#prohibited" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#prohibited">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        5. PROHIBITED ACTIVITIES
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#ugc" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#ugc">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        6. USER GENERATED CONTRIBUTIONS
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#license" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#license">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        7. CONTRIBUTION{" "}
                                        <bdt className="block-component" />
                                        LICENSE
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#reviews" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#reviews">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                        8. GUIDELINES FOR REVIEWS
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#mobile" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#mobile">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                        9. MOBILE APPLICATION{" "}
                                        <bdt className="block-component" />
                                        LICENSE
                                        <bdt className="statement-end-if-in-editor" />
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#socialmedia" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#socialmedia">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                        10. SOCIAL MEDIA
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#thirdparty" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#thirdparty">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                        11. THIRD-PARTY WEBSITES AND CONTENT
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#advertisers" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#advertisers">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                        12. ADVERTISERS
                                        <bdt className="statement-end-if-in-editor" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#sitemanage" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#sitemanage">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        13. SERVICES MANAGEMENT
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#ppyes" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#ppyes">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#ppno" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#ppno">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#dmca" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#dmca">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text">
                                    <bdt className="block-component" />
                                    <bdt className="block-component" />
                                    <bdt className="statement-end-if-in-editor" />
                                </span>
                            </span>{" "}
                            <a data-custom-class="link" href="#terms" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#terms">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        14. TERM AND TERMINATION
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#modifications" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#modifications">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        15. MODIFICATIONS AND INTERRUPTIONS
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#law" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#law">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        16. GOVERNING LAW
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#disputes" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#disputes">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        17. DISPUTE RESOLUTION
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#corrections" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#corrections">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        18. CORRECTIONS
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#disclaimer" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#disclaimer">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        19. DISCLAIMER
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#liability" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#liability">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        20. LIMITATIONS OF LIABILITY
                                    </span>
                                </span>
                            </a>{" "}
                            <a
                                data-custom-class="link"
                                href="#indemnification"
                            />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#indemnification">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        21. INDEMNIFICATION
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#userdata" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#userdata">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        22. USER DATA
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#electronic" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#electronic">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        23. ELECTRONIC COMMUNICATIONS,
                                        TRANSACTIONS, AND SIGNATURES
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#california" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component">
                                <span style={{ fontSize: 15 }} />
                            </bdt>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#california">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#misc" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#misc">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        24. MISCELLANEOUS
                                    </span>
                                </span>
                            </a>{" "}
                            <a data-custom-class="link" href="#contact" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a data-custom-class="link" href="#contact">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        25. CONTACT US
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="heading_1"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a name="_b6y29mp52qvx" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="heading_1"
                            id="services"
                            style={{ lineHeight: "1.5" }}
                        >
                            <strong>
                                <span style={{ fontSize: 19 }}>
                                    1. OUR SERVICES
                                </span>
                            </strong>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                The information provided when using the Services
                                is not intended for distribution to or use by
                                any person or entity in any jurisdiction or
                                country where such distribution or use would be
                                contrary to law or regulation or which would
                                subject us to any registration requirement
                                within such jurisdiction or country.
                                Accordingly, those persons who choose to access
                                the Services from other locations do so on their
                                own initiative and are solely responsible for
                                compliance with local laws, if and to the extent
                                local laws are applicable.
                                <bdt className="block-component" />
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                    </div>
                    <div
                        align="center"
                        data-custom-class="heading_1"
                        style={{ textAlign: "left", lineHeight: "1.5" }}
                    >
                        <strong>
                            <span id="ip" style={{ fontSize: 19 }}>
                                2. INTELLECTUAL PROPERTY RIGHTS
                            </span>
                        </strong>
                    </div>
                    <div align="center" style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="heading_2"
                            style={{ lineHeight: "1.5" }}
                        >
                            <strong>Our intellectual property</strong>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                We are the owner or the licensee of all
                                intellectual property rights in our Services,
                                including all source code, databases,
                                functionality, software, website designs, audio,
                                video, text, photographs, and graphics in the
                                Services (collectively, the{" "}
                                <bdt className="block-component" />
                                "Content"
                                <bdt className="statement-end-if-in-editor" />
                                ), as well as the trademarks, service marks, and
                                logos contained therein (the{" "}
                                <bdt className="block-component" />
                                "Marks"
                                <bdt className="statement-end-if-in-editor" />
                                ).
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                Our Content and Marks are protected by copyright
                                and trademark laws (and various other
                                intellectual property rights and unfair
                                competition laws) and treaties in the United
                                States and around the world.
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                The Content and Marks are provided in or through
                                the Services <bdt className="block-component" />
                                "AS IS"
                                <bdt className="statement-end-if-in-editor" />{" "}
                                for your <bdt className="block-component" />
                                personal, non-commercial use or internal
                                business purpose
                                <bdt className="statement-end-if-in-editor" />{" "}
                                only.
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="heading_2"
                            style={{ lineHeight: "1.5" }}
                        >
                            <strong>Your use of our Services</strong>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                Subject to your compliance with these Legal
                                Terms, including the{" "}
                                <bdt className="block-component" />"
                                <bdt className="statement-end-if-in-editor" />
                            </span>
                            <a data-custom-class="link" href="#prohibited">
                                <span
                                    style={{
                                        color: "rgb(0, 58, 250)",
                                        fontSize: 15,
                                    }}
                                >
                                    PROHIBITED ACTIVITIES
                                </span>
                            </a>
                            <span style={{ fontSize: 15 }}>
                                <bdt className="block-component" />"
                                <bdt className="statement-end-if-in-editor" />{" "}
                                section below, we grant you a non-exclusive,
                                non-transferable, revocable{" "}
                                <bdt className="block-component" />
                                license
                                <bdt className="statement-end-if-in-editor" />{" "}
                                to:
                            </span>
                        </div>
                        <ul>
                            <li
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    access the Services; and
                                </span>
                            </li>
                            <li
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    download or print a copy of any portion of
                                    the Content to which you have properly
                                    gained access.
                                </span>
                            </li>
                        </ul>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                solely for your{" "}
                                <bdt className="block-component" />
                                personal, non-commercial use or internal
                                business purpose
                                <bdt className="statement-end-if-in-editor" />.
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                Except as set out in this section or elsewhere
                                in our Legal Terms, no part of the Services and
                                no Content or Marks may be copied, reproduced,
                                aggregated, republished, uploaded, posted,
                                publicly displayed, encoded, translated,
                                transmitted, distributed, sold, licensed, or
                                otherwise exploited for any commercial purpose
                                whatsoever, without our express prior written
                                permission.
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                If you wish to make any use of the Services,
                                Content, or Marks other than as set out in this
                                section or elsewhere in our Legal Terms, please
                                address your request to:{" "}
                                <bdt className="question">
                                    cdbpineda@rtu.edu.ph
                                </bdt>
                                . If we ever grant you the permission to post,
                                reproduce, or publicly display any part of our
                                Services or Content, you must identify us as the
                                owners or licensors of the Services, Content, or
                                Marks and ensure that any copyright or
                                proprietary notice appears or is visible on
                                posting, reproducing, or displaying our Content.
                            </span>
                        </div>
                    </div>
                    <div align="center" style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                We reserve all rights not expressly granted to
                                you in and to the Services, Content, and Marks.
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                Any breach of these Intellectual Property Rights
                                will constitute a material breach of our Legal
                                Terms and your right to use our Services will
                                terminate immediately.
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="heading_2"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                <strong>
                                    Your submissions
                                    <bdt className="block-component" />
                                </strong>
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                Please review this section and the{" "}
                                <bdt className="block-component" />
                                "<bdt className="statement-end-if-in-editor" />
                                <a data-custom-class="link" href="#prohibited">
                                    <span style={{ color: "rgb(0, 58, 250)" }}>
                                        PROHIBITED ACTIVITIES
                                    </span>
                                </a>
                                <bdt className="block-component" />"
                                <bdt className="statement-end-if-in-editor" />{" "}
                                section carefully prior to using our Services to
                                understand the (a) rights you give us and (b)
                                obligations you have when you post or upload any
                                content through the Services.
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <strong>Submissions:</strong> By directly
                                sending us any question, comment, suggestion,
                                idea, feedback, or other information about the
                                Services (<bdt className="block-component" />
                                "Submissions"
                                <bdt className="statement-end-if-in-editor" />
                                ), you agree to assign to us all intellectual
                                property rights in such Submission. You agree
                                that we shall own this Submission and be
                                entitled to its unrestricted use and
                                dissemination for any lawful purpose, commercial
                                or otherwise, without acknowledgment or
                                compensation to you.
                                <bdt className="block-component" />
                            </span>
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <strong>
                                    You are responsible for what you post or
                                    upload:
                                </strong>{" "}
                                By sending us Submissions
                                <bdt className="block-component" /> through any
                                part of the Services
                                <bdt className="block-component" /> you:
                            </span>
                        </div>
                        <ul>
                            <li
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    confirm that you have read and agree with
                                    our <bdt className="block-component" />"
                                    <bdt className="statement-end-if-in-editor" />
                                </span>
                                <a data-custom-class="link" href="#prohibited">
                                    <span
                                        style={{
                                            color: "rgb(0, 58, 250)",
                                            fontSize: 15,
                                        }}
                                    >
                                        PROHIBITED ACTIVITIES
                                    </span>
                                </a>
                                <span style={{ fontSize: 15 }}>
                                    <bdt className="block-component" />"
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    and will not post, send, publish, upload, or
                                    transmit through the Services any Submission
                                    <bdt className="block-component" /> that is
                                    illegal, harassing, hateful, harmful,
                                    defamatory, obscene, bullying, abusive,
                                    discriminatory, threatening to any person or
                                    group, sexually explicit, false, inaccurate,
                                    deceitful, or misleading;
                                </span>
                            </li>
                            <li
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    to the extent permissible by applicable law,
                                    waive any and all moral rights to any such
                                    Submission
                                    <bdt className="block-component" />;
                                </span>
                            </li>
                            <li
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    warrant that any such Submission
                                    <bdt className="block-component" /> are
                                    original to you or that you have the
                                    necessary rights and{" "}
                                    <bdt className="block-component" />
                                    licenses
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    to submit such Submissions
                                    <bdt className="block-component" /> and that
                                    you have full authority to grant us the
                                    above-mentioned rights in relation to your
                                    Submissions
                                    <bdt className="block-component" />; and
                                </span>
                            </li>
                            <li
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    warrant and represent that your Submissions
                                    <bdt className="block-component" /> do not
                                    constitute confidential information.
                                </span>
                            </li>
                        </ul>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            You are solely responsible for your Submissions{" "}
                            <bdt className="block-component" /> and you
                            expressly agree to reimburse us for any and all
                            losses that we may suffer because of your breach of
                            (a) this section, (b) any third party’s intellectual
                            property rights, or (c) applicable law.
                            <bdt className="block-component" />
                            <bdt className="block-component" />
                        </div>
                        <div
                            className="MsoNormal"
                            style={{ lineHeight: "1.5" }}
                        >
                            <br />
                        </div>
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="heading_1"
                            id="userreps"
                            style={{ lineHeight: "1.5" }}
                        >
                            <a name="_5hg7kgyv9l8z" />
                            <strong>
                                <span
                                    style={{
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        fontSize: 19,
                                    }}
                                >
                                    <strong>
                                        <span
                                            style={{
                                                lineHeight: "115%",
                                                fontFamily: "Arial",
                                                fontSize: 19,
                                            }}
                                        >
                                            <strong>
                                                <span
                                                    style={{
                                                        lineHeight: "115%",
                                                        fontFamily: "Arial",
                                                        fontSize: 19,
                                                    }}
                                                >
                                                    <strong>
                                                        <span
                                                            style={{
                                                                lineHeight:
                                                                    "115%",
                                                                fontFamily:
                                                                    "Arial",
                                                                fontSize: 19,
                                                            }}
                                                        >
                                                            3.
                                                        </span>
                                                    </strong>
                                                </span>
                                                &nbsp;
                                            </strong>
                                        </span>
                                    </strong>
                                    USER REPRESENTATIONS
                                </span>
                            </strong>
                        </div>
                    </div>
                    <div align="center" style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span
                                style={{
                                    fontSize: "11.0pt",
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    color: "#595959",
                                    msoThemecolor: "text1",
                                    msoThemetint: 166,
                                }}
                            >
                                By using the Services, you represent and warrant
                                that:
                            </span>
                            <bdt
                                className="block-container if"
                                data-type="if"
                                id="d2d82ca8-275f-3f86-8149-8a5ef8054af6"
                            >
                                <bdt data-type="conditional-block">
                                    <bdt
                                        className="block-component"
                                        data-record-question-key="user_account_option"
                                        data-type="statement"
                                    />{" "}
                                    <bdt data-type="body">
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "11pt",
                                            }}
                                        >
                                            (
                                        </span>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "14.6667px",
                                            }}
                                        >
                                            1
                                        </span>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "11pt",
                                            }}
                                        >
                                            ) all registration information you
                                            submit will be true, accurate,
                                            current, and complete; (
                                        </span>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "14.6667px",
                                            }}
                                        >
                                            2
                                        </span>
                                        <span
                                            style={{
                                                color: "rgb(89, 89, 89)",
                                                fontSize: "11pt",
                                            }}
                                        >
                                            ) you will maintain the accuracy of
                                            such information and promptly update
                                            such registration information as
                                            necessary;
                                        </span>
                                    </bdt>
                                </bdt>
                                <bdt
                                    className="statement-end-if-in-editor"
                                    data-type="close"
                                />
                                &nbsp;
                            </bdt>
                            <span
                                style={{
                                    color: "rgb(89, 89, 89)",
                                    fontSize: "11pt",
                                }}
                            >
                                (
                            </span>
                            <span
                                style={{
                                    color: "rgb(89, 89, 89)",
                                    fontSize: "14.6667px",
                                }}
                            >
                                3
                            </span>
                            <span
                                style={{
                                    color: "rgb(89, 89, 89)",
                                    fontSize: "11pt",
                                }}
                            >
                                ) you have the legal capacity and you agree to
                                comply with these Legal Terms;
                            </span>
                            <bdt
                                className="block-container if"
                                data-type="if"
                                id="8d4c883b-bc2c-f0b4-da3e-6d0ee51aca13"
                            >
                                <bdt data-type="conditional-block">
                                    <bdt
                                        className="block-component"
                                        data-record-question-key="user_u13_option"
                                        data-type="statement"
                                    />
                                    &nbsp;
                                </bdt>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "11pt",
                                    }}
                                >
                                    (
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "14.6667px",
                                    }}
                                >
                                    4
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "11pt",
                                    }}
                                >
                                    ) you are not a minor in the jurisdiction in
                                    which you reside
                                    <bdt
                                        className="block-container if"
                                        data-type="if"
                                        id="76948fab-ec9e-266a-bb91-948929c050c9"
                                    >
                                        <bdt data-type="conditional-block">
                                            <bdt
                                                className="block-component"
                                                data-record-question-key="user_o18_option"
                                                data-type="statement"
                                            />
                                            <bdt data-type="body">
                                                , or if a minor, you have
                                                received parental permission to
                                                use the Services
                                            </bdt>
                                        </bdt>
                                        <bdt
                                            className="statement-end-if-in-editor"
                                            data-type="close"
                                        />
                                    </bdt>
                                    ; (
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "14.6667px",
                                    }}
                                >
                                    5
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "11pt",
                                    }}
                                >
                                    ) you will not access the Services through
                                    automated or non-human means, whether
                                    through a bot, script or otherwise; (
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "14.6667px",
                                    }}
                                >
                                    6
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "11pt",
                                    }}
                                >
                                    ) you will not use the Services for any
                                    illegal or{" "}
                                    <bdt className="block-component" />
                                    unauthorized
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    purpose; and (
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "14.6667px",
                                    }}
                                >
                                    7
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "11pt",
                                    }}
                                >
                                    ) your use of the Services will not violate
                                    any applicable law or regulation.
                                </span>
                                <span
                                    style={{
                                        color: "rgb(89, 89, 89)",
                                        fontSize: "14.6667px",
                                    }}
                                />
                            </bdt>
                        </div>
                    </div>
                    <div align="center" style={{ lineHeight: "1.5" }}>
                        <br />
                    </div>
                    <div align="center" style={{ textAlign: "left" }}>
                        <div
                            className="MsoNormal"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                        >
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "17.25px" }}
                            >
                                <div
                                    className="MsoNormal"
                                    data-custom-class="body_text"
                                    style={{
                                        lineHeight: "1.5",
                                        textAlign: "left",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            lineHeight: "16.8667px",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        If you provide any information that is
                                        untrue, inaccurate, not current, or
                                        incomplete, we have the right to suspend
                                        or terminate your account and refuse any
                                        and all current or future use of the
                                        Services (or any portion thereof).
                                    </span>
                                </div>
                                <div
                                    className="MsoNormal"
                                    style={{
                                        lineHeight: "1.1",
                                        textAlign: "left",
                                    }}
                                >
                                    <bdt className="block-component" />
                                </div>
                                <div
                                    className="MsoNormal"
                                    style={{
                                        lineHeight: "1.5",
                                        textAlign: "left",
                                    }}
                                >
                                    <br />
                                </div>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: 1 }}
                            >
                                <bdt data-type="conditional-block">
                                    <bdt data-type="body">
                                        <div
                                            className="MsoNormal"
                                            data-custom-class="heading_1"
                                            id="userreg"
                                            style={{
                                                lineHeight: "1.5",
                                                textAlign: "left",
                                            }}
                                        >
                                            <strong>
                                                <span
                                                    style={{
                                                        lineHeight: "24.5333px",
                                                        fontSize: 19,
                                                    }}
                                                >
                                                    <strong>
                                                        <span
                                                            style={{
                                                                lineHeight:
                                                                    "115%",
                                                                fontFamily:
                                                                    "Arial",
                                                                fontSize: 19,
                                                            }}
                                                        >
                                                            <strong>
                                                                <span
                                                                    style={{
                                                                        lineHeight:
                                                                            "115%",
                                                                        fontFamily:
                                                                            "Arial",
                                                                        fontSize: 19,
                                                                    }}
                                                                >
                                                                    <strong>
                                                                        <span
                                                                            style={{
                                                                                lineHeight:
                                                                                    "115%",
                                                                                fontFamily:
                                                                                    "Arial",
                                                                                fontSize: 19,
                                                                            }}
                                                                        >
                                                                            4.
                                                                        </span>
                                                                    </strong>
                                                                </span>
                                                                &nbsp;
                                                            </strong>
                                                        </span>
                                                    </strong>
                                                    USER REGISTRATION
                                                </span>
                                            </strong>
                                        </div>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: 1 }}
                            >
                                <bdt data-type="conditional-block">
                                    <bdt data-type="body">
                                        <div
                                            className="MsoNormal"
                                            data-custom-class="body_text"
                                            style={{
                                                textAlign: "left",
                                                lineHeight: "1.5",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "11pt",
                                                    lineHeight: "16.8667px",
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                You may be required to register
                                                to use the Services. You agree
                                                to keep your password
                                                confidential and will be
                                                responsible for all use of your
                                                account and password. We reserve
                                                the right to remove, reclaim, or
                                                change a username you select if
                                                we determine, in our sole
                                                discretion, that such username
                                                is inappropriate, obscene, or
                                                otherwise objectionable.
                                                <bdt
                                                    className="statement-end-if-in-editor"
                                                    data-type="close"
                                                />
                                            </span>
                                        </div>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }} />
                                </bdt>
                                <span style={{ fontSize: 15 }}>
                                    <bdt className="block-component" />
                                    <bdt className="statement-end-if-in-editor" />
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }} />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }} />
                                </bdt>
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }} />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt className="block-component" />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{
                                    textAlign: "justify",
                                    lineHeight: "1.5",
                                }}
                            >
                                <span
                                    style={{
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <bdt
                                        data-type="conditional-block"
                                        style={{
                                            color: "rgb(10, 54, 90)",
                                            textAlign: "left",
                                        }}
                                    >
                                        <bdt data-type="body">
                                            <div
                                                className="MsoNormal"
                                                style={{
                                                    fontSize: 15,
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                <br />
                                            </div>
                                        </bdt>
                                    </bdt>
                                </span>
                                <div
                                    className="MsoNormal"
                                    data-custom-class="heading_1"
                                    id="prohibited"
                                    style={{
                                        textAlign: "left",
                                        lineHeight: "1.5",
                                    }}
                                >
                                    <strong>
                                        <span
                                            style={{
                                                lineHeight: "24.5333px",
                                                fontSize: 19,
                                            }}
                                        >
                                            <strong>
                                                <span
                                                    style={{
                                                        lineHeight: "115%",
                                                        fontFamily: "Arial",
                                                        fontSize: 19,
                                                    }}
                                                >
                                                    <strong>
                                                        <span
                                                            style={{
                                                                lineHeight:
                                                                    "115%",
                                                                fontFamily:
                                                                    "Arial",
                                                                fontSize: 19,
                                                            }}
                                                        >
                                                            <strong>
                                                                <span
                                                                    style={{
                                                                        lineHeight:
                                                                            "115%",
                                                                        fontFamily:
                                                                            "Arial",
                                                                        fontSize: 19,
                                                                    }}
                                                                >
                                                                    5.
                                                                </span>
                                                            </strong>
                                                        </span>
                                                    </strong>
                                                </span>
                                                &nbsp;
                                            </strong>
                                            PROHIBITED ACTIVITIES
                                        </span>
                                    </strong>
                                </div>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ textAlign: "justify", lineHeight: 1 }}
                            >
                                <div
                                    className="MsoNormal"
                                    data-custom-class="body_text"
                                    style={{
                                        lineHeight: "1.5",
                                        textAlign: "left",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            lineHeight: "16.8667px",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        You may not access or use the Services
                                        for any purpose other than that for
                                        which we make the Services available.
                                        The Services may not be used in
                                        connection with any commercial{" "}
                                        <bdt className="block-component" />
                                        endeavors
                                        <bdt className="statement-end-if-in-editor" />{" "}
                                        except those that are specifically
                                        endorsed or approved by us.
                                    </span>
                                </div>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ textAlign: "justify", lineHeight: 1 }}
                            >
                                <div
                                    className="MsoNormal"
                                    style={{ lineHeight: "17.25px" }}
                                >
                                    <div
                                        className="MsoNormal"
                                        style={{ lineHeight: "1.1" }}
                                    >
                                        <div
                                            className="MsoNormal"
                                            style={{ lineHeight: "17.25px" }}
                                        >
                                            <div
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        lineHeight: "16.8667px",
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    As a user of the Services,
                                                    you agree not to:
                                                </span>
                                            </div>
                                        </div>
                                        <ul>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        lineHeight: "16.8667px",
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "sans-serif",
                                                            fontSize: 15,
                                                            fontStyle: "normal",
                                                            fontVariantLigatures:
                                                                "normal",
                                                            fontVariantCaps:
                                                                "normal",
                                                            fontWeight: 400,
                                                            letterSpacing:
                                                                "normal",
                                                            orphans: 2,
                                                            textAlign:
                                                                "justify",
                                                            textIndent:
                                                                "-29.4px",
                                                            textTransform:
                                                                "none",
                                                            whiteSpace:
                                                                "normal",
                                                            widows: 2,
                                                            wordSpacing: 0,
                                                            WebkitTextStrokeWidth: 0,
                                                            backgroundColor:
                                                                "rgb(255, 255, 255)",
                                                            textDecorationStyle:
                                                                "initial",
                                                            textDecorationColor:
                                                                "initial",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        Systematically retrieve
                                                        data or other content
                                                        from the Services to
                                                        create or compile,
                                                        directly or indirectly,
                                                        a collection,
                                                        compilation, database,
                                                        or directory without
                                                        written permission from
                                                        us.
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Trick,
                                                                    defraud, or
                                                                    mislead us
                                                                    and other
                                                                    users,
                                                                    especially
                                                                    in any
                                                                    attempt to
                                                                    learn
                                                                    sensitive
                                                                    account
                                                                    information
                                                                    such as user
                                                                    passwords.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Circumvent,
                                                                    disable, or
                                                                    otherwise
                                                                    interfere
                                                                    with
                                                                    security-related
                                                                    features of
                                                                    the
                                                                    Services,
                                                                    including
                                                                    features
                                                                    that prevent
                                                                    or restrict
                                                                    the use or
                                                                    copying of
                                                                    any Content
                                                                    or enforce
                                                                    limitations
                                                                    on the use
                                                                    of the
                                                                    Services
                                                                    and/or the
                                                                    Content
                                                                    contained
                                                                    therein.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Disparage,
                                                                    tarnish, or
                                                                    otherwise
                                                                    harm, in our
                                                                    opinion, us
                                                                    and/or the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Use any
                                                                    information
                                                                    obtained
                                                                    from the
                                                                    Services in
                                                                    order to
                                                                    harass,
                                                                    abuse, or
                                                                    harm another
                                                                    person.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Make
                                                                    improper use
                                                                    of our
                                                                    support
                                                                    services or
                                                                    submit false
                                                                    reports of
                                                                    abuse or
                                                                    misconduct.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Use the
                                                                    Services in
                                                                    a manner
                                                                    inconsistent
                                                                    with any
                                                                    applicable
                                                                    laws or
                                                                    regulations.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Engage in{" "}
                                                                    <bdt className="block-component" />
                                                                    unauthorized
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    framing of
                                                                    or linking
                                                                    to the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Upload or
                                                                    transmit (or
                                                                    attempt to
                                                                    upload or to
                                                                    transmit)
                                                                    viruses,
                                                                    Trojan
                                                                    horses, or
                                                                    other
                                                                    material,
                                                                    including
                                                                    excessive
                                                                    use of
                                                                    capital
                                                                    letters and
                                                                    spamming
                                                                    (continuous
                                                                    posting of
                                                                    repetitive
                                                                    text), that
                                                                    interferes
                                                                    with any
                                                                    party’s
                                                                    uninterrupted
                                                                    use and
                                                                    enjoyment of
                                                                    the Services
                                                                    or modifies,
                                                                    impairs,
                                                                    disrupts,
                                                                    alters, or
                                                                    interferes
                                                                    with the
                                                                    use,
                                                                    features,
                                                                    functions,
                                                                    operation,
                                                                    or
                                                                    maintenance
                                                                    of the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Engage in
                                                                    any
                                                                    automated
                                                                    use of the
                                                                    system, such
                                                                    as using
                                                                    scripts to
                                                                    send
                                                                    comments or
                                                                    messages, or
                                                                    using any
                                                                    data mining,
                                                                    robots, or
                                                                    similar data
                                                                    gathering
                                                                    and
                                                                    extraction
                                                                    tools.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Delete the
                                                                    copyright or
                                                                    other
                                                                    proprietary
                                                                    rights
                                                                    notice from
                                                                    any Content.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Attempt to
                                                                    impersonate
                                                                    another user
                                                                    or person or
                                                                    use the
                                                                    username of
                                                                    another
                                                                    user.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Upload or
                                                                    transmit (or
                                                                    attempt to
                                                                    upload or to
                                                                    transmit)
                                                                    any material
                                                                    that acts as
                                                                    a passive or
                                                                    active
                                                                    information
                                                                    collection
                                                                    or
                                                                    transmission
                                                                    mechanism,
                                                                    including
                                                                    without
                                                                    limitation,
                                                                    clear
                                                                    graphics
                                                                    interchange
                                                                    formats (
                                                                    <bdt className="block-component" />
                                                                    "gifs"
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                    ), 1×1
                                                                    pixels, web
                                                                    bugs,
                                                                    cookies, or
                                                                    other
                                                                    similar
                                                                    devices
                                                                    (sometimes
                                                                    referred to
                                                                    as{" "}
                                                                    <bdt className="block-component" />
                                                                    "spyware" or
                                                                    "passive
                                                                    collection
                                                                    mechanisms"
                                                                    or "pcms"
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                    ).
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Interfere
                                                                    with,
                                                                    disrupt, or
                                                                    create an
                                                                    undue burden
                                                                    on the
                                                                    Services or
                                                                    the networks
                                                                    or services
                                                                    connected to
                                                                    the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Harass,
                                                                    annoy,
                                                                    intimidate,
                                                                    or threaten
                                                                    any of our
                                                                    employees or
                                                                    agents
                                                                    engaged in
                                                                    providing
                                                                    any portion
                                                                    of the
                                                                    Services to
                                                                    you.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Attempt to
                                                                    bypass any
                                                                    measures of
                                                                    the Services
                                                                    designed to
                                                                    prevent or
                                                                    restrict
                                                                    access to
                                                                    the
                                                                    Services, or
                                                                    any portion
                                                                    of the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Copy or
                                                                    adapt the
                                                                    Services'
                                                                    software,
                                                                    including
                                                                    but not
                                                                    limited to
                                                                    Flash, PHP,
                                                                    HTML,
                                                                    JavaScript,
                                                                    or other
                                                                    code.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Except as
                                                                    permitted by
                                                                    applicable
                                                                    law,
                                                                    decipher,
                                                                    decompile,
                                                                    disassemble,
                                                                    or reverse
                                                                    engineer any
                                                                    of the
                                                                    software
                                                                    comprising
                                                                    or in any
                                                                    way making
                                                                    up a part of
                                                                    the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Except as
                                                                    may be the
                                                                    result of
                                                                    standard
                                                                    search
                                                                    engine or
                                                                    Internet
                                                                    browser
                                                                    usage, use,
                                                                    launch,
                                                                    develop, or
                                                                    distribute
                                                                    any
                                                                    automated
                                                                    system,
                                                                    including
                                                                    without
                                                                    limitation,
                                                                    any spider,
                                                                    robot, cheat
                                                                    utility,
                                                                    scraper, or
                                                                    offline
                                                                    reader that
                                                                    accesses the
                                                                    Services, or
                                                                    use or
                                                                    launch any{" "}
                                                                    <bdt className="block-component" />
                                                                    unauthorized
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    script or
                                                                    other
                                                                    software.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Use a buying
                                                                    agent or
                                                                    purchasing
                                                                    agent to
                                                                    make
                                                                    purchases on
                                                                    the
                                                                    Services.
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Make any{" "}
                                                                    <bdt className="block-component" />
                                                                    unauthorized
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    use of the
                                                                    Services,
                                                                    including
                                                                    collecting
                                                                    usernames
                                                                    and/or email
                                                                    addresses of
                                                                    users by
                                                                    electronic
                                                                    or other
                                                                    means for
                                                                    the purpose
                                                                    of sending
                                                                    unsolicited
                                                                    email, or
                                                                    creating
                                                                    user
                                                                    accounts by
                                                                    automated
                                                                    means or
                                                                    under false{" "}
                                                                    <bdt className="block-component" />
                                                                    pretenses
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                    .
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span style={{ fontSize: 15 }}>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "16.8667px",
                                                            color: "rgb(89, 89, 89)",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "sans-serif",
                                                                fontStyle:
                                                                    "normal",
                                                                fontVariantLigatures:
                                                                    "normal",
                                                                fontVariantCaps:
                                                                    "normal",
                                                                fontWeight: 400,
                                                                letterSpacing:
                                                                    "normal",
                                                                orphans: 2,
                                                                textAlign:
                                                                    "justify",
                                                                textIndent:
                                                                    "-29.4px",
                                                                textTransform:
                                                                    "none",
                                                                whiteSpace:
                                                                    "normal",
                                                                widows: 2,
                                                                wordSpacing: 0,
                                                                WebkitTextStrokeWidth: 0,
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                textDecorationStyle:
                                                                    "initial",
                                                                textDecorationColor:
                                                                    "initial",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "16.8667px",
                                                                    color: "rgb(89, 89, 89)",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                        color: "rgb(89, 89, 89)",
                                                                    }}
                                                                >
                                                                    Use the
                                                                    Services as
                                                                    part of any
                                                                    effort to
                                                                    compete with
                                                                    us or
                                                                    otherwise
                                                                    use the
                                                                    Services
                                                                    and/or the
                                                                    Content for
                                                                    any
                                                                    revenue-generating{" "}
                                                                    <bdt className="block-component" />
                                                                    endeavor
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    or
                                                                    commercial
                                                                    enterprise.
                                                                </span>
                                                                <span
                                                                    style={{
                                                                        fontSize:
                                                                            "11pt",
                                                                        lineHeight:
                                                                            "16.8667px",
                                                                        color: "rgb(89, 89, 89)",
                                                                        fontFamily:
                                                                            "sans-serif",
                                                                        fontStyle:
                                                                            "normal",
                                                                        fontVariantLigatures:
                                                                            "normal",
                                                                        fontVariantCaps:
                                                                            "normal",
                                                                        fontWeight: 400,
                                                                        letterSpacing:
                                                                            "normal",
                                                                        orphans: 2,
                                                                        textAlign:
                                                                            "justify",
                                                                        textIndent:
                                                                            "-29.4px",
                                                                        textTransform:
                                                                            "none",
                                                                        whiteSpace:
                                                                            "normal",
                                                                        widows: 2,
                                                                        wordSpacing: 0,
                                                                        WebkitTextStrokeWidth: 0,
                                                                        backgroundColor:
                                                                            "rgb(255, 255, 255)",
                                                                        textDecorationStyle:
                                                                            "initial",
                                                                        textDecorationColor:
                                                                            "initial",
                                                                    }}
                                                                >
                                                                    <bdt className="forloop-component" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        lineHeight: "16.8667px",
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <bdt className="question">
                                                        Use the Services to
                                                        advertise or offer to
                                                        sell goods and services.
                                                    </bdt>
                                                    <bdt className="forloop-component" />
                                                </span>
                                            </li>
                                            <li
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{
                                                    lineHeight: "1.5",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        lineHeight: "16.8667px",
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    <bdt className="question">
                                                        Sell or otherwise
                                                        transfer your profile.
                                                    </bdt>
                                                    <bdt className="forloop-component" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="MsoNormal"
                                        style={{
                                            lineHeight: "1.5",
                                            textAlign: "left",
                                        }}
                                    >
                                        <br />
                                    </div>
                                </div>
                                <div
                                    className="MsoNormal"
                                    style={{ lineHeight: "17.25px" }}
                                >
                                    <div
                                        className="MsoNormal"
                                        style={{ lineHeight: 1 }}
                                    >
                                        <bdt
                                            className="block-container if"
                                            data-type="if"
                                            style={{ textAlign: "left" }}
                                        >
                                            <bdt data-type="conditional-block">
                                                <bdt data-type="body">
                                                    <div
                                                        className="MsoNormal"
                                                        data-custom-class="heading_1"
                                                        id="ugc"
                                                        style={{
                                                            lineHeight: "1.5",
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "24.5333px",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                <strong>
                                                                    <span
                                                                        style={{
                                                                            lineHeight:
                                                                                "24.5333px",
                                                                            fontSize: 19,
                                                                        }}
                                                                    >
                                                                        <strong>
                                                                            <span
                                                                                style={{
                                                                                    lineHeight:
                                                                                        "115%",
                                                                                    fontFamily:
                                                                                        "Arial",
                                                                                    fontSize: 19,
                                                                                }}
                                                                            >
                                                                                <strong>
                                                                                    <span
                                                                                        style={{
                                                                                            lineHeight:
                                                                                                "115%",
                                                                                            fontFamily:
                                                                                                "Arial",
                                                                                            fontSize: 19,
                                                                                        }}
                                                                                    >
                                                                                        6.
                                                                                    </span>
                                                                                </strong>
                                                                            </span>
                                                                        </strong>
                                                                    </span>
                                                                    &nbsp;
                                                                </strong>
                                                                USER GENERATED
                                                                CONTRIBUTIONS
                                                            </span>
                                                        </strong>
                                                    </div>
                                                </bdt>
                                            </bdt>
                                        </bdt>
                                    </div>
                                    <div
                                        className="MsoNormal"
                                        style={{
                                            lineHeight: "1.5",
                                            textAlign: "left",
                                        }}
                                    >
                                        <br />
                                    </div>
                                    <div
                                        className="MsoNormal"
                                        style={{ lineHeight: 1 }}
                                    >
                                        <bdt
                                            className="block-container if"
                                            data-type="if"
                                            style={{ textAlign: "left" }}
                                        >
                                            <bdt data-type="conditional-block">
                                                <bdt data-type="body">
                                                    <div
                                                        className="MsoNormal"
                                                        data-custom-class="body_text"
                                                        style={{
                                                            lineHeight: "1.5",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "11pt",
                                                                lineHeight:
                                                                    "16.8667px",
                                                                color: "rgb(89, 89, 89)",
                                                            }}
                                                        >
                                                            <bdt
                                                                className="block-container if"
                                                                data-type="if"
                                                                id="24327c5d-a34f-f7e7-88f1-65a2f788484f"
                                                                style={{
                                                                    textAlign:
                                                                        "left",
                                                                }}
                                                            >
                                                                <bdt data-type="conditional-block">
                                                                    <bdt
                                                                        className="block-component"
                                                                        data-record-question-key="user_post_content_option"
                                                                        data-type="statement"
                                                                    />
                                                                    <span
                                                                        style={{
                                                                            fontSize:
                                                                                "11pt",
                                                                            lineHeight:
                                                                                "16.8667px",
                                                                            color: "rgb(89, 89, 89)",
                                                                        }}
                                                                    >
                                                                        The
                                                                        Services
                                                                        does not
                                                                        offer
                                                                        users to
                                                                        submit
                                                                        or post
                                                                        content.
                                                                        <bdt className="block-component" />{" "}
                                                                        We may
                                                                        provide
                                                                        you with
                                                                        the
                                                                        opportunity
                                                                        to
                                                                        create,
                                                                        submit,
                                                                        post,
                                                                        display,
                                                                        transmit,
                                                                        perform,
                                                                        publish,
                                                                        distribute,
                                                                        or
                                                                        broadcast
                                                                        content
                                                                        and
                                                                        materials
                                                                        to us or
                                                                        on the
                                                                        Services,
                                                                        including
                                                                        but not
                                                                        limited
                                                                        to text,
                                                                        writings,
                                                                        video,
                                                                        audio,
                                                                        photographs,
                                                                        graphics,
                                                                        comments,
                                                                        suggestions,
                                                                        or
                                                                        personal
                                                                        information
                                                                        or other
                                                                        material
                                                                        (collectively,{" "}
                                                                        <bdt className="block-component" />
                                                                        "Contributions"
                                                                        <bdt className="statement-end-if-in-editor" />
                                                                        ).
                                                                        Contributions
                                                                        may be
                                                                        viewable
                                                                        by other
                                                                        users of
                                                                        the
                                                                        Services
                                                                        and
                                                                        through
                                                                        third-party
                                                                        websites.
                                                                        <bdt className="block-component" />{" "}
                                                                        When you
                                                                        create
                                                                        or make
                                                                        available
                                                                        any
                                                                        Contributions,
                                                                        you
                                                                        thereby
                                                                        represent
                                                                        and
                                                                        warrant
                                                                        that:
                                                                        <span
                                                                            style={{
                                                                                fontSize:
                                                                                    "11pt",
                                                                                lineHeight:
                                                                                    "16.8667px",
                                                                                color: "rgb(89, 89, 89)",
                                                                            }}
                                                                        >
                                                                            <bdt className="statement-end-if-in-editor">
                                                                                <bdt className="block-component" />
                                                                            </bdt>
                                                                        </span>
                                                                    </span>
                                                                </bdt>
                                                            </bdt>
                                                        </span>
                                                    </div>
                                                    &nbsp;
                                                </bdt>
                                                &nbsp;
                                            </bdt>
                                            &nbsp;
                                        </bdt>
                                    </div>
                                    <ul
                                        style={{
                                            fontSize: "medium",
                                            textAlign: "left",
                                        }}
                                    >
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        The creation,
                                                        distribution,
                                                        transmission, public
                                                        display, or performance,
                                                        and the accessing,
                                                        downloading, or copying
                                                        of your Contributions do
                                                        not and will not
                                                        infringe the proprietary
                                                        rights, including but
                                                        not limited to the
                                                        copyright, patent,
                                                        trademark, trade secret,
                                                        or moral rights of any
                                                        third party.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        You are the creator and
                                                        owner of or have the
                                                        necessary{" "}
                                                        <bdt className="block-component" />
                                                        licenses
                                                        <bdt className="statement-end-if-in-editor" />
                                                        , rights, consents,
                                                        releases, and
                                                        permissions to use and
                                                        to{" "}
                                                        <bdt className="block-component" />
                                                        authorize
                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                        us, the Services, and
                                                        other users of the
                                                        Services to use your
                                                        Contributions in any
                                                        manner contemplated by
                                                        the Services and these
                                                        Legal Terms.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        You have the written
                                                        consent, release, and/or
                                                        permission of each and
                                                        every identifiable
                                                        individual person in
                                                        your Contributions to
                                                        use the name or likeness
                                                        of each and every such
                                                        identifiable individual
                                                        person to enable
                                                        inclusion and use of
                                                        your Contributions in
                                                        any manner contemplated
                                                        by the Services and
                                                        these Legal Terms.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions are
                                                        not false, inaccurate,
                                                        or misleading.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions are
                                                        not unsolicited or{" "}
                                                        <bdt className="block-component" />
                                                        unauthorized
                                                        <bdt className="statement-end-if-in-editor" />{" "}
                                                        advertising, promotional
                                                        materials, pyramid
                                                        schemes, chain letters,
                                                        spam, mass mailings, or
                                                        other forms of
                                                        solicitation.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions are
                                                        not obscene, lewd,
                                                        lascivious, filthy,
                                                        violent, harassing,{" "}
                                                        <bdt className="block-component" />
                                                        libelous
                                                        <bdt className="statement-end-if-in-editor" />
                                                        , slanderous, or
                                                        otherwise objectionable
                                                        (as determined by us).
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions do
                                                        not ridicule, mock,
                                                        disparage, intimidate,
                                                        or abuse anyone.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions are
                                                        not used to harass or
                                                        threaten (in the legal
                                                        sense of those terms)
                                                        any other person and to
                                                        promote violence against
                                                        a specific person or
                                                        class of people.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions do
                                                        not violate any
                                                        applicable law,
                                                        regulation, or rule.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions do
                                                        not violate the privacy
                                                        or publicity rights of
                                                        any third party.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions do
                                                        not violate any
                                                        applicable law
                                                        concerning child
                                                        pornography, or
                                                        otherwise intended to
                                                        protect the health or
                                                        well-being of minors.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions do
                                                        not include any
                                                        offensive comments that
                                                        are connected to race,
                                                        national origin, gender,
                                                        sexual preference, or
                                                        physical handicap.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                        <li
                                            data-custom-class="body_text"
                                            style={{ lineHeight: "1.5" }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgb(89, 89, 89)",
                                                }}
                                            >
                                                <span style={{ fontSize: 14 }}>
                                                    <span data-custom-class="body_text">
                                                        Your Contributions do
                                                        not otherwise violate,
                                                        or link to material that
                                                        violates, any provision
                                                        of these Legal Terms, or
                                                        any applicable law or
                                                        regulation.
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{
                                    textAlign: "justify",
                                    lineHeight: "1.5",
                                }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt data-type="body">
                                            <div
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{ lineHeight: "1.5" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        lineHeight: "16.8667px",
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    Any use of the Services in
                                                    violation of the foregoing
                                                    violates these Legal Terms
                                                    and may result in, among
                                                    other things, termination or
                                                    suspension of your rights to
                                                    use the Services.
                                                </span>
                                            </div>
                                        </bdt>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ textAlign: "justify", lineHeight: 1 }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt data-type="body">
                                            <div
                                                className="MsoNormal"
                                                data-custom-class="heading_1"
                                                id="license"
                                                style={{ lineHeight: "1.5" }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight:
                                                                "24.5333px",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "24.5333px",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                <strong>
                                                                    <span
                                                                        style={{
                                                                            lineHeight:
                                                                                "115%",
                                                                            fontFamily:
                                                                                "Arial",
                                                                            fontSize: 19,
                                                                        }}
                                                                    >
                                                                        <strong>
                                                                            <span
                                                                                style={{
                                                                                    lineHeight:
                                                                                        "115%",
                                                                                    fontFamily:
                                                                                        "Arial",
                                                                                    fontSize: 19,
                                                                                }}
                                                                            >
                                                                                7.
                                                                            </span>
                                                                        </strong>
                                                                    </span>
                                                                </strong>
                                                            </span>
                                                            &nbsp;
                                                        </strong>
                                                        CONTRIBUTION{" "}
                                                        <bdt className="block-component" />
                                                        LICENSE
                                                        <bdt className="statement-end-if-in-editor" />
                                                    </span>
                                                </strong>
                                            </div>
                                        </bdt>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: 1 }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    id="a088ddfb-d8c1-9e58-6f21-958c3f4f0709"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="user_post_content_option"
                                            data-type="statement"
                                        />
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            lineHeight: "16.8667px",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        You and Services agree that we may
                                        access, store, process, and use any
                                        information and personal data that you
                                        provide
                                        <bdt className="block-component" /> and
                                        your choices (including settings).
                                    </span>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    By submitting suggestions or other feedback
                                    regarding the Services, you agree that we
                                    can use and share such feedback for any
                                    purpose without compensation to you.
                                    <bdt className="block-component" />
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    We do not assert any ownership over your
                                    Contributions. You retain full ownership of
                                    all of your Contributions and any
                                    intellectual property rights or other
                                    proprietary rights associated with your
                                    Contributions. We are not liable for any
                                    statements or representations in your
                                    Contributions provided by you in any area on
                                    the Services. You are solely responsible for
                                    your Contributions to the Services and you
                                    expressly agree to exonerate us from any and
                                    all responsibility and to refrain from any
                                    legal action against us regarding your
                                    Contributions.
                                    <bdt className="statement-end-if-in-editor" />
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            lineHeight: "16.8667px",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11pt",
                                                lineHeight: "16.8667px",
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <bdt
                                                className="block-container if"
                                                data-type="if"
                                                style={{ textAlign: "left" }}
                                            >
                                                <bdt
                                                    className="statement-end-if-in-editor"
                                                    data-type="close"
                                                />
                                            </bdt>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="review_option"
                                            data-type="statement"
                                        />
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="reviews"
                                style={{ lineHeight: "1.5" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "115%",
                                                    fontFamily: "Arial",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        8.
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                    </span>
                                    GUIDELINES FOR REVIEWS
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    We may provide you areas on the Services to
                                    leave reviews or ratings. When posting a
                                    review, you must comply with the following
                                    criteria: (1) you should have firsthand
                                    experience with the person/entity being
                                    reviewed; (2) your reviews should not
                                    contain offensive profanity, or abusive,
                                    racist, offensive, or hateful language; (3)
                                    your reviews should not contain
                                    discriminatory references based on religion,
                                    race, gender, national origin, age, marital
                                    status, sexual orientation, or disability;
                                    (4) your reviews should not contain
                                    references to illegal activity; (5) you
                                    should not be affiliated with competitors if
                                    posting negative reviews; (6) you should not
                                    make any conclusions as to the legality of
                                    conduct; (7) you may not post any false or
                                    misleading statements; and (8) you may not{" "}
                                    <bdt className="block-component" />
                                    organize
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    a campaign encouraging others to post
                                    reviews, whether positive or negative.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            lineHeight: "16.8667px",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        We may accept, reject, or remove reviews
                                        in our sole discretion. We have
                                        absolutely no obligation to screen
                                        reviews or to delete reviews, even if
                                        anyone considers reviews objectionable
                                        or inaccurate. Reviews are not endorsed
                                        by us, and do not necessarily represent
                                        our opinions or the views of any of our
                                        affiliates or partners. We do not assume
                                        liability for any review or for any
                                        claims, liabilities, or losses resulting
                                        from any review. By posting a review,
                                        you hereby grant to us a perpetual,
                                        non-exclusive, worldwide, royalty-free,
                                        fully paid, assignable, and
                                        sublicensable right and{" "}
                                        <bdt className="block-component" />
                                        license
                                        <bdt className="statement-end-if-in-editor" />{" "}
                                        to reproduce, modify, translate,
                                        transmit by any means, display, perform,
                                        and/or distribute all content relating
                                        to review.
                                    </span>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            lineHeight: "16.8667px",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11pt",
                                                lineHeight: "16.8667px",
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <bdt
                                                className="block-container if"
                                                data-type="if"
                                                style={{ textAlign: "left" }}
                                            >
                                                <bdt
                                                    className="statement-end-if-in-editor"
                                                    data-type="close"
                                                />
                                            </bdt>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="mobile_app_option"
                                            data-type="statement"
                                        />
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="mobile"
                                style={{ lineHeight: "1.5" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "115%",
                                                    fontFamily: "Arial",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        9.
                                                    </span>
                                                </strong>
                                            </span>
                                        </strong>
                                        &nbsp;
                                    </span>
                                    MOBILE APPLICATION{" "}
                                    <bdt className="block-component" />
                                    LICENSE
                                    <bdt className="statement-end-if-in-editor" />
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_2"
                                style={{ lineHeight: "1.5" }}
                            >
                                <strong>
                                    Use <bdt className="block-component" />
                                    License
                                    <bdt className="statement-end-if-in-editor" />
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    If you access the Services via the App, then
                                    we grant you a revocable, non-exclusive,
                                    non-transferable, limited right to install
                                    and use the App on wireless electronic
                                    devices owned or controlled by you, and to
                                    access and use the App on such devices
                                    strictly in accordance with the terms and
                                    conditions of this mobile application{" "}
                                    <bdt className="block-component" />
                                    license
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    contained in these Legal Terms. You shall
                                    not: (1) except as permitted by applicable
                                    law, decompile, reverse engineer,
                                    disassemble, attempt to derive the source
                                    code of, or decrypt the App; (2) make any
                                    modification, adaptation, improvement,
                                    enhancement, translation, or derivative work
                                    from the App; (3) violate any applicable
                                    laws, rules, or regulations in connection
                                    with your access or use of the App; (4)
                                    remove, alter, or obscure any proprietary
                                    notice (including any notice of copyright or
                                    trademark) posted by us or the licensors of
                                    the App; (5) use the App for any
                                    revenue-generating{" "}
                                    <bdt className="block-component" />
                                    endeavor
                                    <bdt className="statement-end-if-in-editor" />
                                    , commercial enterprise, or other purpose
                                    for which it is not designed or intended;
                                    (6) make the App available over a network or
                                    other environment permitting access or use
                                    by multiple devices or users at the same
                                    time; (7) use the App for creating a
                                    product, service, or software that is,
                                    directly or indirectly, competitive with or
                                    in any way a substitute for the App; (8) use
                                    the App to send automated queries to any
                                    website or to send any unsolicited
                                    commercial email; or (9) use any proprietary
                                    information or any of our interfaces or our
                                    other intellectual property in the design,
                                    development, manufacture, licensing, or
                                    distribution of any applications,
                                    accessories, or devices for use with the
                                    App.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_2"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <strong>Apple and Android Devices</strong>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    The following terms apply when you use the
                                    App obtained from either the Apple Store or
                                    Google Play (each an{" "}
                                    <bdt className="block-component" />
                                    "App Distributor"
                                    <bdt className="statement-end-if-in-editor" />
                                    ) to access the Services: (1) the{" "}
                                    <bdt className="block-component" />
                                    license
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    granted to you for our App is limited to a
                                    non-transferable{" "}
                                    <bdt className="block-component" />
                                    license
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    to use the application on a device that{" "}
                                    <bdt className="block-component" />
                                    utilizes
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    the Apple iOS or Android operating systems,
                                    as applicable, and in accordance with the
                                    usage rules set forth in the applicable App
                                    Distributor’s terms of service; (2) we are
                                    responsible for providing any maintenance
                                    and support services with respect to the App
                                    as specified in the terms and conditions of
                                    this mobile application{" "}
                                    <bdt className="block-component" />
                                    license
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    contained in these Legal Terms or as
                                    otherwise required under applicable law, and
                                    you acknowledge that each App Distributor
                                    has no obligation whatsoever to furnish any
                                    maintenance and support services with
                                    respect to the App; (3) in the event of any
                                    failure of the App to conform to any
                                    applicable warranty, you may notify the
                                    applicable App Distributor, and the App
                                    Distributor, in accordance with its terms
                                    and policies, may refund the purchase price,
                                    if any, paid for the App, and to the maximum
                                    extent permitted by applicable law, the App
                                    Distributor will have no other warranty
                                    obligation whatsoever with respect to the
                                    App; (4) you represent and warrant that (i)
                                    you are not located in a country that is
                                    subject to a US government embargo, or that
                                    has been designated by the US government as
                                    a <bdt className="block-component" />
                                    "terrorist supporting"
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    country and (ii) you are not listed on any
                                    US government list of prohibited or
                                    restricted parties; (5) you must comply with
                                    applicable third-party terms of agreement
                                    when using the App, e.g.
                                    <bdt className="block-component" />,
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    if you have a VoIP application, then you
                                    must not be in violation of their wireless
                                    data service agreement when using the App;
                                    and (6) you acknowledge and agree that the
                                    App Distributors are third-party
                                    beneficiaries of the terms and conditions in
                                    this mobile application{" "}
                                    <bdt className="block-component" />
                                    license
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    contained in these Legal Terms, and that
                                    each App Distributor will have the right
                                    (and will be deemed to have accepted the
                                    right) to enforce the terms and conditions
                                    in this mobile application{" "}
                                    <bdt className="block-component" />
                                    license
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    contained in these Legal Terms against you
                                    as a third-party beneficiary thereof.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            lineHeight: "16.8667px",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "11pt",
                                                lineHeight: "16.8667px",
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <bdt
                                                className="block-container if"
                                                data-type="if"
                                                style={{ textAlign: "left" }}
                                            >
                                                <bdt
                                                    className="statement-end-if-in-editor"
                                                    data-type="close"
                                                />
                                            </bdt>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="socialnetwork_link_option"
                                            data-type="statement"
                                        />
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="socialmedia"
                                style={{ lineHeight: "1.5" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "115%",
                                                    fontFamily: "Arial",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        10.
                                                    </span>
                                                </strong>
                                            </span>
                                        </strong>
                                        &nbsp;
                                    </span>
                                    SOCIAL MEDIA
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt data-type="body">
                                            <div
                                                className="MsoNormal"
                                                data-custom-class="body_text"
                                                style={{ lineHeight: "1.5" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        lineHeight: "16.8667px",
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                >
                                                    As part of the functionality
                                                    of the Services, you may
                                                    link your account with
                                                    online accounts you have
                                                    with third-party service
                                                    providers (each such
                                                    account, a{" "}
                                                    <bdt className="block-component" />
                                                    "Third-Party Account"
                                                    <bdt className="statement-end-if-in-editor" />
                                                    ) by either: (1) providing
                                                    your Third-Party Account
                                                    login information through
                                                    the Services; or (2)
                                                    allowing us to access your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account, as is permitted
                                                    under the applicable terms
                                                    and conditions that govern
                                                    your use of each{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account. You represent and
                                                    warrant that you are
                                                    entitled to disclose your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account login information to
                                                    us and/or grant us access to
                                                    your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account, without breach by
                                                    you of any of the terms and
                                                    conditions that govern your
                                                    use of the applicable{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account, and without
                                                    obligating us to pay any
                                                    fees or making us subject to
                                                    any usage limitations
                                                    imposed by the third-party
                                                    service provider of the{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account. By granting us
                                                    access to any{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Accounts, you understand
                                                    that (1) we may access, make
                                                    available, and store (if
                                                    applicable) any content that
                                                    you have provided to and
                                                    stored in your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account (the{" "}
                                                    <bdt className="block-component" />
                                                    "Social Network Content"
                                                    <bdt className="statement-end-if-in-editor" />
                                                    ) so that it is available on
                                                    and through the Services via
                                                    your account, including
                                                    without limitation any
                                                    friend lists and (2) we may
                                                    submit to and receive from
                                                    your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account additional
                                                    information to the extent
                                                    you are notified when you
                                                    link your account with the{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account. Depending on the{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Accounts you choose and
                                                    subject to the privacy
                                                    settings that you have set
                                                    in such{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Accounts, personally
                                                    identifiable information
                                                    that you post to your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Accounts may be available on
                                                    and through your account on
                                                    the Services. Please note
                                                    that if a{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account or associated
                                                    service becomes unavailable
                                                    or our access to such{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account is terminated by the
                                                    third-party service
                                                    provider, then Social
                                                    Network Content may no
                                                    longer be available on and
                                                    through the Services. You
                                                    will have the ability to
                                                    disable the connection
                                                    between your account on the
                                                    Services and your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Accounts at any time. PLEASE
                                                    NOTE THAT YOUR RELATIONSHIP
                                                    WITH THE THIRD-PARTY SERVICE
                                                    PROVIDERS ASSOCIATED WITH
                                                    YOUR THIRD-PARTY ACCOUNTS IS
                                                    GOVERNED SOLELY BY YOUR
                                                    AGREEMENT(S) WITH SUCH
                                                    THIRD-PARTY SERVICE
                                                    PROVIDERS. We make no effort
                                                    to review any Social Network
                                                    Content for any purpose,
                                                    including but not limited
                                                    to, for accuracy, legality,
                                                    or non-infringement, and we
                                                    are not responsible for any
                                                    Social Network Content. You
                                                    acknowledge and agree that
                                                    we may access your email
                                                    address book associated with
                                                    a{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account and your contacts
                                                    list stored on your mobile
                                                    device or tablet computer
                                                    solely for purposes of
                                                    identifying and informing
                                                    you of those contacts who
                                                    have also registered to use
                                                    the Services. You can
                                                    deactivate the connection
                                                    between the Services and
                                                    your{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account by contacting us
                                                    using the contact
                                                    information below or through
                                                    your account settings (if
                                                    applicable). We will attempt
                                                    to delete any information
                                                    stored on our servers that
                                                    was obtained through such{" "}
                                                    <span
                                                        style={{
                                                            fontSize:
                                                                "14.6667px",
                                                        }}
                                                    >
                                                        Third-Party
                                                    </span>{" "}
                                                    Account, except the username
                                                    and profile picture that
                                                    become associated with your
                                                    account.
                                                </span>
                                            </div>
                                        </bdt>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.1" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt data-type="body">
                                            <div
                                                className="MsoNormal"
                                                style={{ lineHeight: "1.5" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "11pt",
                                                        lineHeight: "16.8667px",
                                                        color: "rgb(89, 89, 89)",
                                                    }}
                                                />
                                            </div>
                                        </bdt>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="3rd_party_option"
                                            data-type="statement"
                                        />
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="thirdparty"
                                style={{ lineHeight: "1.5" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "115%",
                                                    fontFamily: "Arial",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        11.
                                                    </span>
                                                </strong>
                                            </span>
                                        </strong>
                                        &nbsp;
                                    </span>
                                    THIRD-PARTY WEBSITES AND CONTENT
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    The Services may contain (or you may be sent
                                    via the <bdt className="block-component" />
                                    Site or App
                                    <bdt className="block-component" />) links
                                    to other websites (
                                    <bdt className="block-component" />
                                    "Third-Party Websites"
                                    <bdt className="statement-end-if-in-editor" />
                                    ) as well as articles, photographs, text,
                                    graphics, pictures, designs, music, sound,
                                    video, information, applications, software,
                                    and other content or items belonging to or
                                    originating from third parties (
                                    <bdt className="block-component" />
                                    "Third-Party Content"
                                    <bdt className="statement-end-if-in-editor" />
                                    ). Such{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Websites and{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Content are not investigated, monitored, or
                                    checked for accuracy, appropriateness, or
                                    completeness by us, and we are not
                                    responsible for any Third-Party Websites
                                    accessed through the Services or any{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Content posted on, available through, or
                                    installed from the Services, including the
                                    content, accuracy, offensiveness, opinions,
                                    reliability, privacy practices, or other
                                    policies of or contained in the{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Websites or the{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Content. Inclusion of, linking to, or
                                    permitting the use or installation of any{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Websites or any{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party&nbsp;
                                    </span>
                                    Content does not imply approval or
                                    endorsement thereof by us. If you decide to
                                    leave the Services and access the{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Websites or to use or install any{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Content, you do so at your own risk, and you
                                    should be aware these Legal Terms no longer
                                    govern. You should review the applicable
                                    terms and policies, including privacy and
                                    data gathering practices, of any website to
                                    which you navigate from the Services or
                                    relating to any applications you use or
                                    install from the Services. Any purchases you
                                    make through{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Websites will be through other websites and
                                    from other companies, and we take no
                                    responsibility whatsoever in relation to
                                    such purchases which are exclusively between
                                    you and the applicable third party. You
                                    agree and acknowledge that we do not endorse
                                    the products or services offered on{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Websites and you shall hold us blameless
                                    from any harm caused by your purchase of
                                    such products or services. Additionally, you
                                    shall hold us blameless from any losses
                                    sustained by you or harm caused to you
                                    relating to or resulting in any way from any{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Content or any contact with{" "}
                                    <span style={{ fontSize: "14.6667px" }}>
                                        Third-Party
                                    </span>{" "}
                                    Websites.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt
                                        className="statement-end-if-in-editor"
                                        data-type="close"
                                    />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="advertiser_option"
                                            data-type="statement"
                                        />
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="advertisers"
                                style={{ lineHeight: "1.5" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "115%",
                                                    fontFamily: "Arial",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        12.
                                                    </span>
                                                </strong>
                                            </span>
                                        </strong>
                                        &nbsp;
                                    </span>
                                    ADVERTISERS
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    We allow advertisers to display their
                                    advertisements and other information in
                                    certain areas of the Services, such as
                                    sidebar advertisements or banner
                                    advertisements. We simply provide the space
                                    to place such advertisements, and we have no
                                    other relationship with advertisers.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt
                                        className="statement-end-if-in-editor"
                                        data-type="close"
                                    />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="sitemanage"
                                style={{ lineHeight: "1.5" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                13.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        SERVICES MANAGEMENT
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5" }}
                            >
                                We reserve the right, but not the obligation,
                                to: (1) monitor the Services for violations of
                                these Legal Terms; (2) take appropriate legal
                                action against anyone who, in our sole
                                discretion, violates the law or these Legal
                                Terms, including without limitation, reporting
                                such user to law enforcement authorities; (3) in
                                our sole discretion and without limitation,
                                refuse, restrict access to, limit the
                                availability of, or disable (to the extent
                                technologically feasible) any of your
                                Contributions or any portion thereof; (4) in our
                                sole discretion and without limitation, notice,
                                or liability, to remove from the Services or
                                otherwise disable all files and content that are
                                excessive in size or are in any way burdensome
                                to our systems; and (5) otherwise manage the
                                Services in a manner designed to protect our
                                rights and property and to facilitate the proper
                                functioning of the Services.
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="privacy_policy_option"
                                            data-type="statement"
                                        />
                                    </bdt>
                                    <bdt
                                        className="block-container if"
                                        data-type="if"
                                    >
                                        <bdt data-type="conditional-block">
                                            <bdt
                                                className="block-component"
                                                data-record-question-key="privacy_policy_followup"
                                                data-type="statement"
                                                style={{
                                                    fontSize: "14.6667px",
                                                }}
                                            />
                                        </bdt>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5" }}
                            >
                                <bdt
                                    className="block-container if"
                                    data-type="if"
                                    style={{ textAlign: "left" }}
                                >
                                    <bdt data-type="conditional-block">
                                        <bdt
                                            className="block-component"
                                            data-record-question-key="copyright_agent_option"
                                            data-type="statement"
                                        >
                                            <bdt className="block-component" />
                                        </bdt>
                                    </bdt>
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component" />
                                <bdt className="block-component" />
                                <bdt className="statement-end-if-in-editor" />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="terms"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                14.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        TERM AND TERMINATION
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    These Legal Terms shall remain in full force
                                    and effect while you use the Services.
                                    WITHOUT LIMITING ANY OTHER PROVISION OF
                                    THESE LEGAL TERMS, WE RESERVE THE RIGHT TO,
                                    IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
                                    LIABILITY, DENY ACCESS TO AND USE OF THE
                                    SERVICES (INCLUDING BLOCKING CERTAIN IP
                                    ADDRESSES), TO ANY PERSON FOR ANY REASON OR
                                    FOR NO REASON, INCLUDING WITHOUT LIMITATION
                                    FOR BREACH OF ANY REPRESENTATION, WARRANTY,
                                    OR COVENANT CONTAINED IN THESE LEGAL TERMS
                                    OR OF ANY APPLICABLE LAW OR REGULATION. WE
                                    MAY TERMINATE YOUR USE OR PARTICIPATION IN
                                    THE SERVICES OR DELETE{" "}
                                    <bdt
                                        className="block-container if"
                                        data-type="if"
                                        id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                                    >
                                        <bdt data-type="conditional-block">
                                            <bdt
                                                className="block-component"
                                                data-record-question-key="user_account_option"
                                                data-type="statement"
                                            />
                                            <bdt data-type="body">
                                                YOUR ACCOUNT AND&nbsp;
                                            </bdt>
                                        </bdt>
                                        <bdt
                                            className="statement-end-if-in-editor"
                                            data-type="close"
                                        />
                                    </bdt>
                                    ANY CONTENT OR INFORMATION THAT YOU POSTED
                                    AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                                    DISCRETION.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    If we terminate or suspend your account for
                                    any reason, you are prohibited from
                                    registering and creating a new account under
                                    your name, a fake or borrowed name, or the
                                    name of any third party, even if you may be
                                    acting on behalf of the third party. In
                                    addition to terminating or suspending your
                                    account, we reserve the right to take
                                    appropriate legal action, including without
                                    limitation pursuing civil, criminal, and
                                    injunctive redress.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="modifications"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                15.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        MODIFICATIONS AND INTERRUPTIONS
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    We reserve the right to change, modify, or
                                    remove the contents of the Services at any
                                    time or for any reason at our sole
                                    discretion without notice. However, we have
                                    no obligation to update any information on
                                    our Services.
                                    <bdt className="block-component" /> We will
                                    not be liable to you or any third party for
                                    any modification, price change, suspension,
                                    or discontinuance of the Services.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    We cannot guarantee the Services will be
                                    available at all times. We may experience
                                    hardware, software, or other problems or
                                    need to perform maintenance related to the
                                    Services, resulting in interruptions,
                                    delays, or errors. We reserve the right to
                                    change, revise, update, suspend,
                                    discontinue, or otherwise modify the
                                    Services at any time or for any reason
                                    without notice to you. You agree that we
                                    have no liability whatsoever for any loss,
                                    damage, or inconvenience caused by your
                                    inability to access or use the Services
                                    during any downtime or discontinuance of the
                                    Services. Nothing in these Legal Terms will
                                    be construed to obligate us to maintain and
                                    support the Services or to supply any
                                    corrections, updates, or releases in
                                    connection therewith.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="law"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                16.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        GOVERNING LAW
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <bdt className="block-component" />
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    These Legal Terms shall be governed by and
                                    defined following the laws of{" "}
                                    <bdt className="block-component" />
                                    the{" "}
                                    <bdt className="question">Philippines</bdt>
                                    <bdt className="block-component" />
                                </span>
                                . <bdt className="question">musictaste.me</bdt>{" "}
                                and yourself irrevocably consent that the courts
                                of{" "}
                                <span
                                    style={{
                                        fontSize: "11pt",
                                        lineHeight: "16.8667px",
                                        color: "rgb(89, 89, 89)",
                                    }}
                                >
                                    <bdt className="block-component" />
                                    the{" "}
                                    <bdt className="question">Philippines</bdt>
                                    <bdt className="block-component" />
                                </span>{" "}
                                shall have exclusive jurisdiction to resolve any
                                dispute which may arise in connection with these
                                Legal Terms.
                                <bdt className="statement-end-if-in-editor" />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="disputes"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "24.5333px",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                17.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        DISPUTE RESOLUTION
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component" />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component" />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_2"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>Binding Arbitration</strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }} />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                Any dispute arising out of or in connection with
                                these Legal Terms, including any question
                                regarding its existence, validity, or
                                termination, shall be referred to and finally
                                resolved by the International Commercial
                                Arbitration Court under the European Arbitration
                                Chamber (Belgium, Brussels, Avenue Louise, 146)
                                according to the Rules of this ICAC, which, as a
                                result of referring to it, is considered as the
                                part of this clause. The number of arbitrators
                                shall be{" "}
                                <bdt className="question">three (3)</bdt>. The
                                seat, or legal place, or arbitration shall be{" "}
                                <bdt className="block-component" />
                                <bdt className="question">Pasig City</bdt>,{" "}
                                <bdt className="block-component" />
                                <bdt className="question">Philippines</bdt>
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="else-block" />. The language of
                                the proceedings shall be{" "}
                                <bdt className="question">English</bdt>. The
                                governing law of these Legal Terms shall be
                                substantive law of{" "}
                                <bdt className="block-component" />
                                the <bdt className="question">Philippines</bdt>
                                <bdt className="else-block" />.
                                <bdt className="statement-end-if-in-editor">
                                    <bdt className="statement-end-if-in-editor" />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_2"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>Restrictions</strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                The Parties agree that any arbitration shall be
                                limited to the Dispute between the Parties
                                individually. To the full extent permitted by
                                law, (a) no arbitration shall be joined with any
                                other proceeding; (b) there is no right or
                                authority for any Dispute to be arbitrated on a
                                class-action basis or to{" "}
                                <bdt className="block-component" />
                                utilize
                                <bdt className="statement-end-if-in-editor" />{" "}
                                class action procedures; and (c) there is no
                                right or authority for any Dispute to be brought
                                in a purported representative capacity on behalf
                                of the general public or any other persons.
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_2"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component" />
                                <strong>Exceptions to Arbitration</strong>
                                <bdt className="else-block" />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component" />
                                The Parties agree that the following Disputes
                                are not subject to the above provisions
                                concerning binding arbitration: (a) any Disputes
                                seeking to enforce or protect, or concerning the
                                validity of, any of the intellectual property
                                rights of a Party; (b) any Dispute related to,
                                or arising from, allegations of theft, piracy,
                                invasion of privacy, or{" "}
                                <bdt className="block-component" />
                                unauthorized
                                <bdt className="statement-end-if-in-editor" />{" "}
                                use; and (c) any claim for injunctive relief. If
                                this provision is found to be illegal or
                                unenforceable, then neither Party will elect to
                                arbitrate any Dispute falling within that
                                portion of this provision found to be illegal or
                                unenforceable and such Dispute shall be decided
                                by a court of competent jurisdiction within the
                                courts listed for jurisdiction above, and the
                                Parties agree to submit to the personal
                                jurisdiction of that court.
                                <bdt className="else-block" />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="statement-end-if-in-editor">
                                    <bdt className="statement-end-if-in-editor" />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="corrections"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span style={{ fontSize: 19 }}>
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                18.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        CORRECTIONS
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                There may be information on the Services that
                                contains typographical errors, inaccuracies, or
                                omissions, including descriptions, pricing,
                                availability, and various other information. We
                                reserve the right to correct any errors,
                                inaccuracies, or omissions and to change or
                                update the information on the Services at any
                                time, without prior notice.
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="disclaimer"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: 19,
                                        color: "rgb(0, 0, 0)",
                                    }}
                                >
                                    <strong>
                                        <span
                                            style={{
                                                lineHeight: "24.5333px",
                                                fontSize: 19,
                                            }}
                                        >
                                            <strong>
                                                <span
                                                    style={{
                                                        lineHeight: "115%",
                                                        fontFamily: "Arial",
                                                        fontSize: 19,
                                                    }}
                                                >
                                                    <strong>
                                                        <span
                                                            style={{
                                                                lineHeight:
                                                                    "115%",
                                                                fontFamily:
                                                                    "Arial",
                                                                fontSize: 19,
                                                            }}
                                                        >
                                                            19.
                                                        </span>
                                                    </strong>
                                                </span>
                                            </strong>
                                        </span>{" "}
                                        DISCLAIMER
                                    </strong>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    THE SERVICES ARE PROVIDED ON AN AS-IS AND
                                    AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE
                                    OF THE SERVICES WILL BE AT YOUR SOLE RISK.
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                                    DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
                                    IN CONNECTION WITH THE SERVICES AND YOUR USE
                                    THEREOF, INCLUDING, WITHOUT LIMITATION, THE
                                    IMPLIED WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE, AND
                                    NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
                                    REPRESENTATIONS ABOUT THE ACCURACY OR
                                    COMPLETENESS OF THE SERVICES' CONTENT OR THE
                                    CONTENT OF ANY WEBSITES OR MOBILE
                                    APPLICATIONS LINKED TO THE SERVICES AND WE
                                    WILL ASSUME NO LIABILITY OR RESPONSIBILITY
                                    FOR ANY (1) ERRORS, MISTAKES, OR
                                    INACCURACIES OF CONTENT AND MATERIALS, (2)
                                    PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
                                    NATURE WHATSOEVER, RESULTING FROM YOUR
                                    ACCESS TO AND USE OF THE SERVICES, (3) ANY{" "}
                                    <bdt className="block-component" />
                                    UNAUTHORIZED
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    ACCESS TO OR USE OF OUR SECURE SERVERS
                                    AND/OR ANY AND ALL PERSONAL INFORMATION
                                    AND/OR FINANCIAL INFORMATION STORED THEREIN,
                                    (4) ANY INTERRUPTION OR CESSATION OF
                                    TRANSMISSION TO OR FROM THE SERVICES, (5)
                                    ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
                                    LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH
                                    THE SERVICES BY ANY THIRD PARTY, AND/OR (6)
                                    ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
                                    MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY
                                    KIND INCURRED AS A RESULT OF THE USE OF ANY
                                    CONTENT POSTED, TRANSMITTED, OR OTHERWISE
                                    MADE AVAILABLE VIA THE SERVICES. WE DO NOT
                                    WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                                    RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
                                    ADVERTISED OR OFFERED BY A THIRD PARTY
                                    THROUGH THE SERVICES, ANY HYPERLINKED
                                    WEBSITE, OR ANY WEBSITE OR MOBILE
                                    APPLICATION FEATURED IN ANY BANNER OR OTHER
                                    ADVERTISING, AND WE WILL NOT BE A PARTY TO
                                    OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
                                    ANY TRANSACTION BETWEEN YOU AND ANY
                                    THIRD-PARTY PROVIDERS OF PRODUCTS OR
                                    SERVICES. AS WITH THE PURCHASE OF A PRODUCT
                                    OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                                    ENVIRONMENT, YOU SHOULD USE YOUR BEST{" "}
                                    <bdt className="block-component" />
                                    JUDGMENT
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    AND EXERCISE CAUTION WHERE APPROPRIATE.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="liability"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                20.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        LIMITATIONS OF LIABILITY
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    <span data-custom-class="body_text">
                                        IN NO EVENT WILL WE OR OUR DIRECTORS,
                                        EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR
                                        ANY THIRD PARTY FOR ANY DIRECT,
                                        INDIRECT, CONSEQUENTIAL, EXEMPLARY,
                                        INCIDENTAL, SPECIAL, OR PUNITIVE
                                        DAMAGES, INCLUDING LOST PROFIT, LOST
                                        REVENUE, LOSS OF DATA, OR OTHER DAMAGES
                                        ARISING FROM YOUR USE OF THE SERVICES,
                                        EVEN IF WE HAVE BEEN ADVISED OF THE
                                        POSSIBILITY OF SUCH DAMAGES.
                                    </span>{" "}
                                    <bdt
                                        className="block-container if"
                                        data-type="if"
                                        id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                                    >
                                        <span data-custom-class="body_text">
                                            <bdt data-type="conditional-block">
                                                <bdt
                                                    className="block-component"
                                                    data-record-question-key="limitations_liability_option"
                                                    data-type="statement"
                                                />
                                            </bdt>
                                        </span>
                                    </bdt>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="indemnification"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                21.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        INDEMNIFICATION
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    You agree to defend, indemnify, and hold us
                                    harmless, including our subsidiaries,
                                    affiliates, and all of our respective
                                    officers, agents, partners, and employees,
                                    from and against any loss, damage,
                                    liability, claim, or demand, including
                                    reasonable attorneys’ fees and expenses,
                                    made by any third party due to or arising
                                    out of:{" "}
                                    <bdt
                                        className="block-container if"
                                        data-type="if"
                                        id="475fffa5-05ca-def8-ac88-f426b238903c"
                                    >
                                        <bdt data-type="conditional-block">
                                            <bdt
                                                className="block-component"
                                                data-record-question-key="user_post_content_option"
                                                data-type="statement"
                                            />
                                        </bdt>
                                        (
                                        <span style={{ fontSize: "14.6667px" }}>
                                            1
                                        </span>
                                        ) use of the Services; (
                                        <span style={{ fontSize: "14.6667px" }}>
                                            2
                                        </span>
                                        ) breach of these Legal Terms; (
                                        <span style={{ fontSize: "14.6667px" }}>
                                            3
                                        </span>
                                        ) any breach of your representations and
                                        warranties set forth in these Legal
                                        Terms; (
                                        <span style={{ fontSize: "14.6667px" }}>
                                            4
                                        </span>
                                        ) your violation of the rights of a
                                        third party, including but not limited
                                        to intellectual property rights; or (
                                        <span style={{ fontSize: "14.6667px" }}>
                                            5
                                        </span>
                                        ) any overt harmful act toward any other
                                        user of the Services with whom you
                                        connected via the Services.
                                        Notwithstanding the foregoing, we
                                        reserve the right, at your expense, to
                                        assume the exclusive{" "}
                                        <bdt className="block-component" />
                                        defense
                                        <bdt className="statement-end-if-in-editor" />{" "}
                                        and control of any matter for which you
                                        are required to indemnify us, and you
                                        agree to cooperate, at your expense,
                                        with our{" "}
                                        <bdt className="block-component" />
                                        defense
                                        <bdt className="statement-end-if-in-editor" />{" "}
                                        of such claims. We will use reasonable
                                        efforts to notify you of any such claim,
                                        action, or proceeding which is subject
                                        to this indemnification upon becoming
                                        aware of it.
                                    </bdt>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="userdata"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                22.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        USER DATA
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    We will maintain certain data that you
                                    transmit to the Services for the purpose of
                                    managing the performance of the Services, as
                                    well as data relating to your use of the
                                    Services. Although we perform regular
                                    routine backups of data, you are solely
                                    responsible for all data that you transmit
                                    or that relates to any activity you have
                                    undertaken using the Services. You agree
                                    that we shall have no liability to you for
                                    any loss or corruption of any such data, and
                                    you hereby waive any right of action against
                                    us arising from any such loss or corruption
                                    of such data.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="electronic"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                23.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        ELECTRONIC COMMUNICATIONS, TRANSACTIONS,
                                        AND SIGNATURES
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    Visiting the Services, sending us emails,
                                    and completing online forms constitute
                                    electronic communications. You consent to
                                    receive electronic communications, and you
                                    agree that all agreements, notices,
                                    disclosures, and other communications we
                                    provide to you electronically, via email and
                                    on the Services, satisfy any legal
                                    requirement that such communication be in
                                    writing. YOU HEREBY AGREE TO THE USE OF
                                    ELECTRONIC SIGNATURES, CONTRACTS, ORDERS,
                                    AND OTHER RECORDS, AND TO ELECTRONIC
                                    DELIVERY OF NOTICES, POLICIES, AND RECORDS
                                    OF TRANSACTIONS INITIATED OR COMPLETED BY US
                                    OR VIA THE SERVICES. You hereby waive any
                                    rights or requirements under any statutes,
                                    regulations, rules, ordinances, or other
                                    laws in any jurisdiction which require an
                                    original signature or delivery or retention
                                    of non-electronic records, or to payments or
                                    the granting of credits by any means other
                                    than electronic means.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }} />
                                </bdt>
                                <bdt className="block-component" />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="misc"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            fontSize: 19,
                                        }}
                                    >
                                        <strong>
                                            <span
                                                style={{
                                                    lineHeight: "24.5333px",
                                                    fontSize: 19,
                                                }}
                                            >
                                                <strong>
                                                    <span
                                                        style={{
                                                            lineHeight: "115%",
                                                            fontFamily: "Arial",
                                                            fontSize: 19,
                                                        }}
                                                    >
                                                        <strong>
                                                            <span
                                                                style={{
                                                                    lineHeight:
                                                                        "115%",
                                                                    fontFamily:
                                                                        "Arial",
                                                                    fontSize: 19,
                                                                }}
                                                            >
                                                                24.
                                                            </span>
                                                        </strong>
                                                    </span>
                                                </strong>
                                            </span>
                                            &nbsp;
                                        </strong>
                                        MISCELLANEOUS
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    These Legal Terms and any policies or
                                    operating rules posted by us on the Services
                                    or in respect to the Services constitute the
                                    entire agreement and understanding between
                                    you and us. Our failure to exercise or
                                    enforce any right or provision of these
                                    Legal Terms shall not operate as a waiver of
                                    such right or provision. These Legal Terms
                                    operate to the fullest extent permissible by
                                    law. We may assign any or all of our rights
                                    and obligations to others at any time. We
                                    shall not be responsible or liable for any
                                    loss, damage, delay, or failure to act
                                    caused by any cause beyond our reasonable
                                    control. If any provision or part of a
                                    provision of these Legal Terms is determined
                                    to be unlawful, void, or unenforceable, that
                                    provision or part of the provision is deemed
                                    severable from these Legal Terms and does
                                    not affect the validity and enforceability
                                    of any remaining provisions. There is no
                                    joint venture, partnership, employment or
                                    agency relationship created between you and
                                    us as a result of these Legal Terms or use
                                    of the Services. You agree that these Legal
                                    Terms will not be construed against us by
                                    virtue of having drafted them. You hereby
                                    waive any and all{" "}
                                    <bdt className="block-component" />
                                    defenses
                                    <bdt className="statement-end-if-in-editor" />{" "}
                                    you may have based on the electronic form of
                                    these Legal Terms and the lack of signing by
                                    the parties hereto to execute these Legal
                                    Terms.
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component">
                                    <span style={{ fontSize: 15 }} />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="contact"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                        }}
                                    >
                                        <span style={{ fontSize: 19 }}>
                                            <strong>
                                                <span
                                                    style={{
                                                        lineHeight: "24.5333px",
                                                        fontSize: 19,
                                                    }}
                                                >
                                                    <strong>
                                                        <span
                                                            style={{
                                                                lineHeight:
                                                                    "115%",
                                                                fontFamily:
                                                                    "Arial",
                                                                fontSize: 19,
                                                            }}
                                                        >
                                                            <strong>
                                                                <span
                                                                    style={{
                                                                        lineHeight:
                                                                            "115%",
                                                                        fontFamily:
                                                                            "Arial",
                                                                        fontSize: 19,
                                                                    }}
                                                                >
                                                                    25.
                                                                </span>
                                                            </strong>
                                                        </span>
                                                    </strong>
                                                </span>
                                                &nbsp;
                                            </strong>
                                            CONTACT US
                                        </span>
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span
                                    style={{
                                        fontSize: "11.0pt",
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "#595959",
                                        msoThemecolor: "text1",
                                        msoThemetint: 166,
                                    }}
                                >
                                    In order to resolve a complaint regarding
                                    the Services or to receive further
                                    information regarding use of the Services,
                                    please contact us at:
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <br />
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ color: "rgb(89, 89, 89)" }}>
                                        <bdt className="question">
                                            <strong>musictaste.me</strong>
                                        </bdt>
                                        <strong>
                                            <bdt className="block-component" />
                                        </strong>
                                    </span>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    <span
                                        style={{
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            color: "rgb(89, 89, 89)",
                                        }}
                                    >
                                        <bdt className="question">
                                            <strong>
                                                <bdt className="question">
                                                    Boni Ave.
                                                </bdt>
                                            </strong>
                                        </bdt>
                                        <span
                                            style={{
                                                lineHeight: "115%",
                                                fontFamily: "Arial",
                                                color: "rgb(89, 89, 89)",
                                            }}
                                        >
                                            <bdt className="statement-end-if-in-editor" />
                                        </span>
                                        <bdt className="block-component" />
                                    </span>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <span style={{ fontSize: 15 }}>
                                    <strong>
                                        <span
                                            style={{ color: "rgb(89, 89, 89)" }}
                                        >
                                            <bdt className="question">
                                                Mandaluyong City
                                            </bdt>
                                            <bdt className="block-component" />,{" "}
                                            <bdt className="question">
                                                Metro Manila
                                            </bdt>
                                            <bdt className="statement-end-if-in-editor" />
                                            <bdt className="block-component" />{" "}
                                            <bdt className="question">1550</bdt>
                                            <bdt className="statement-end-if-in-editor" />
                                        </span>
                                    </strong>
                                    <strong>
                                        <span
                                            style={{ color: "rgb(89, 89, 89)" }}
                                        >
                                            <bdt className="block-component" />
                                        </span>
                                        <bdt className="block-component" />
                                    </strong>
                                </span>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <bdt className="block-component">
                                    <strong />
                                </bdt>
                                <strong>
                                    <bdt className="question">Philippines</bdt>
                                </strong>
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="statement-end-if-in-editor" />
                                <bdt className="statement-end-if-in-editor">
                                    <strong />
                                </bdt>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11.0pt",
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            color: "#595959",
                                            msoThemecolor: "text1",
                                            msoThemetint: 166,
                                        }}
                                    >
                                        <strong>
                                            <bdt className="block-component" />
                                            Phone:{" "}
                                            <bdt className="question">
                                                09491926132
                                            </bdt>
                                            <bdt className="statement-end-if-in-editor" />
                                        </strong>
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11.0pt",
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            color: "#595959",
                                            msoThemecolor: "text1",
                                            msoThemetint: 166,
                                        }}
                                    >
                                        <strong>
                                            <bdt className="block-component" />
                                        </strong>
                                    </span>
                                </strong>
                            </div>
                            <div
                                className="MsoNormal"
                                data-custom-class="body_text"
                                style={{ lineHeight: "1.5", textAlign: "left" }}
                            >
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11.0pt",
                                            lineHeight: "115%",
                                            fontFamily: "Arial",
                                            color: "#595959",
                                            msoThemecolor: "text1",
                                            msoThemetint: 166,
                                        }}
                                    >
                                        <strong>
                                            <bdt className="question">
                                                cdbpineda@rtu.edu.ph
                                            </bdt>
                                        </strong>
                                    </span>
                                </strong>
                            </div>
                        </div>
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n        ul {\n          list-style-type: square;\n        }\n        ul > li > ul {\n          list-style-type: circle;\n        }\n        ul > li > ul > li > ul {\n          list-style-type: square;\n        }\n        ol li {\n          font-family: Arial ;\n        }\n      ",
                        }}
                    />
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
