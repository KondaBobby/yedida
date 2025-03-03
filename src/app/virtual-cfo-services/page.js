'use client'
import React, { useRef } from 'react';
import { scroller } from 'react-scroll';

const VirtualCfoServices = () => {
    // References for each section
    const strategicPlanningRef = useRef(null);
    const budgetPlanningRef = useRef(null);
    const riskAssessmentRef = useRef(null);
    const treasuryManagementRef = useRef(null);
    const corporateRestructuringRef = useRef(null);
    const financialPlanningRef = useRef(null);
    const internalValuationRef = useRef(null);
    const misReportingRef = useRef(null);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div className="w-full lg:w-[550px] max-w-4xl mx-auto p-6 bg-white rounded">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">VIRTUAL CFO SERVICES</h1>
            </div>

            {/* Navigation Bullets */}
            <ul className="mb-8 space-y-2">
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('strategicPlanning')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Strategic Planning</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('budgetPlanning')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Budget-Planning, monitoring and analysis</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('riskAssessment')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Risk Assessment and mitigation</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('treasuryManagement')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Treasury Management</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('corporateRestructuring')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Corporate Restructuring</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('financialPlanning')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Financial Planning & Analysis</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('internalValuation')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>Internal Valuation</span>
                </li>
                <li className="flex items-start cursor-pointer hover:text-blue-600"
                    onClick={() => scrollToSection('misReporting')}>
                    <span className="mr-2 text-lg">•</span>
                    <span>MIS reporting</span>
                </li>
            </ul>

            {/* Sections Content */}
            <div className="space-y-12">
                {/* Strategic Planning Section */}
                <div id="strategicPlanning" name="strategicPlanning" ref={strategicPlanningRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Strategic Planning</h2>
                    <p className="text-justify mb-4">
                        Business Growth Strategy & Financial Forecasting
                    </p>
                    <p className="text-justify mb-4">
                        1. <strong>Goal Setting & Vision Planning</strong> – Defining clear,
                        measurable, and achievable business objectives.
                        <br />• <strong>Financial Modeling & Forecasting</strong> – Preparing detailed
                        financial projections, cash flow analysis, and budgeting to
                        support growth decisions.
                        <br />• <strong>Business Expansion Planning</strong> – Assisting in mergers,
                        acquisitions, and diversification strategies to scale
                        operations.
                        <br />• <strong>Market & Competitive Analysis</strong> – Evaluating industry
                        trends and competitive positioning for informed decision-
                        making.
                    </p>
                    <p className="text-justify mb-4">
                        2. <strong>Tax & Financial Structuring</strong>
                        <br />• <strong>Tax-Efficient Structuring</strong> – Developing tax-saving
                        strategies to minimize liabilities and maximize profits.
                        <br />• <strong>Investment & Capital Allocation</strong> – Advising on optimal
                        investment strategies, asset allocation, and financial
                        restructuring.
                        <br />• <strong>Risk Management & Compliance</strong> – Identifying potential
                        risks and ensuring regulatory compliance to avoid
                        penalties.
                    </p>
                    <p className="text-justify mb-4">
                        3. <strong>Business Process Optimization & Cost Reduction</strong>
                        <br />• <strong>Operational Efficiency Assessment</strong> – Analyzing current
                        workflows and identifying areas for process improvements.
                        <br />• <strong>Cost Management Strategies</strong> – Implementing cost-
                        reduction measures without compromising quality or
                        productivity.
                        <br />• <strong>Technology & Automation Advisory</strong> – Recommending
                        digital tools and automation solutions for enhanced
                        efficiency.
                    </p>
                    <p className="text-justify">
                        4. <strong>Succession & Exit Planning</strong>
                        <br />• <strong>Succession Planning for Family Businesses</strong> – Ensuring a
                        smooth transition with structured leadership and
                        ownership transfer plans.
                        <br />• <strong>Exit Strategies & Business Valuation</strong> – Assisting in
                        business valuation, mergers, and acquisitions for seamless
                        ownership transitions.
                        <br />• <strong>Debt & Equity Planning</strong> – Structuring financial strategies
                        to optimize funding and growth potential.
                    </p>
                </div>

                {/* Budget-Planning, monitoring and analysis Section */}
                <div id="budgetPlanning" name="budgetPlanning" ref={budgetPlanningRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Budget-Planning, monitoring and analysis</h2>
                    <p className="text-justify">
                        Effective budget planning, monitoring, and analysis help
                        businesses manage their finances effectively, optimize
                        resource allocation, and achieve long-term financial stability.
                        With our data-driven approach, businesses gain better
                        financial control, make informed decisions, and drive
                        sustainable growth.
                    </p>
                </div>

                {/* Risk Assessment and mitigation Section */}
                <div id="riskAssessment" name="riskAssessment" ref={riskAssessmentRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Risk Assessment and mitigation</h2>
                    <p className="text-justify">
                        Risk assessment and mitigation are crucial for identifying
                        financial, operational, and compliance-related risks that could
                        impact business stability. We conduct comprehensive risk
                        evaluations, analyzing tax, financial, and regulatory exposures
                        to develop proactive mitigation strategies. We help
                        organizations implement robust internal control
                        frameworks, and fraud detection measures to safeguard
                        assets and ensure regulatory adherence.
                    </p>
                </div>

                {/* Treasury Management Section */}
                <div id="treasuryManagement" name="treasuryManagement" ref={treasuryManagementRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Treasury Management</h2>
                    <p className="text-justify">
                        Treasury Management optimize organization financial
                        resources, manage liquidity, and mitigate risks effectively.
                        These services include cash flow forecasting, working capital
                        management, and ensuring optimal utilization of funds to
                        meet operational and strategic goals. We assist in managing
                        banking relationships, negotiating favorable terms, and
                        streamlining financial transactions across the organization.
                        Additionally, risk management strategies are designed to
                        protect against currency fluctuations, interest rate
                        volatility, and other financial uncertainties. By leveraging
                        smart treasury solutions, organizations can enhance financial
                        stability, improve profitability, and achieve long-term business
                        success.
                    </p>
                </div>

                {/* Corporate Restructuring Section */}
                <div id="corporateRestructuring" name="corporateRestructuring" ref={corporateRestructuringRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Corporate Restructuring</h2>
                    <p className="text-justify">
                        Corporate restructuring is essential for businesses looking to
                        enhance efficiency, improve financial stability, and adapt to
                        changing market conditions. Our team excels in managing
                        acquisitions, divestitures, debt restructuring, and business
                        reorganizations, ensuring seamless transition while
                        maximizing value. We provide strategic guidance on tax-
                        efficient structuring, regulatory compliance, and financial due
                        diligence to minimize risks and optimize outcomes. Through
                        comprehensive analysis and planning, we help businesses
                        transform their operations, enhance value, and boost
                        profitability. With our tailored restructuring solutions,
                        businesses can achieve long-term growth, enhance
                        stakeholder confidence, and stay competitive in the evolving
                        business.
                    </p>
                </div>

                {/* Financial Planning & Analysis Section */}
                <div id="financialPlanning" name="financialPlanning" ref={financialPlanningRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Financial Planning & Analysis</h2>
                    <p className="text-justify">
                        Financial Planning & Analysis (FP&A) is essential for making
                        informed decisions, optimizing cash flow, and driving business
                        growth. By budgeting, forecasting, financial modeling,
                        variance analysis, and key performance indicator (KPI)
                        tracking, organizations gain valuable financial insights. Through
                        FP&A, we help businesses with strategic financial planning, better
                        resource allocation, and robust financial health for long-term
                        success.
                    </p>
                </div>

                {/* Internal Valuation Section */}
                <div id="internalValuation" name="internalValuation" ref={internalValuationRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">Internal Valuation</h2>
                    <p className="text-justify">
                        Internal valuation is essential for businesses to assess their
                        true financial worth, make informed strategic decisions, and
                        ensure compliance with regulatory requirements. By
                        leveraging advanced valuation techniques such as Discounted
                        Cash Flow (DCF), Comparable Company Analysis (CCA), and
                        Asset-Based Valuations, we provide comprehensive and
                        reliable financial assessments. Our team of experts ensures that
                        your valuations are met without any hassle.
                    </p>
                </div>

                {/* MIS reporting Section */}
                <div id="misReporting" name="misReporting" ref={misReportingRef} className="scroll-mt-6">
                    <h2 className="text-xl font-bold mb-3 text-center">MIS reporting</h2>
                    <p className="text-justify">
                        Management Information System (MIS) Reporting is a crucial tool for businesses to make informed decisions. It involves the collection, processing, and presentation of data in a structured format, enabling management to monitor performance, identify trends, and make strategic decisions. For clients in the chartered accounting domain, MIS reporting provides a clear and concise overview of financial and operational metrics, helping them stay compliant, optimize processes, and achieve their business goals. our team of experts ensures that your MIS reports are done without any hassle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VirtualCfoServices;