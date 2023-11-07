import React from "react";

export default class Resume extends React.Component {
  render() {
    return (
      <>
        <div>
          <h5>Education</h5>
          <p className="school-name">
            Bachelor's of Science in Mathematics
            <span>&bull;</span> <em className="date">May 2008</em>
          </p>
          <p className="school-name">
            Master's of Arts in Mathematics
            <span>&bull;</span> <em className="date">May 2013</em>
          </p>
        </div>

        <div>
          <h5>Professional Development</h5>
          <p className="school-name">
            Microsoft Certified Power BI Data Analyst
            <span>&bull;</span> <em className="date">July 2023</em>
          </p>
          <p className="school-name">
            Attaining Data-Driven Insights with Snowflake and Microsoft Power BI
            <span>&bull;</span> <em className="date">2022</em>
          </p>
          <p className="school-name">
            Zero To Snowflake
            <span>&bull;</span> <em className="date">2022</em>
          </p>
          <p className="school-name">
            Snowflake Data Warehousing Workshop
            <span>&bull;</span> <em className="date">2022</em>
          </p>
          <p className="school-name">
            Full Stack Web Developer Certificate
            <span>&bull;</span> <em className="date">September 2020</em>
          </p>
        </div>

        <div className="skills">
          <h5>Skills</h5>
          <ul className="row">
            <li>Python</li>
            <li>PowerApps</li>
            <li>Power Automate</li>
          </ul>
          <ul className="row">
            <li>Power BI</li>
            <li>SQL Server</li>
            <li>Oracle</li>
          </ul>
          <ul className="row">
            <li>REACT - HTML, CSS, JavaScript</li>
            <li>Microsoft Excel - VBA, Pivot</li>
            <li>DAX</li>
          </ul>
        </div>
        <h5>Relevant Experience</h5>
        <div className="experience">
          <div className="row">
            <div className="column">
              <h4>
                <b>Power BI Developer</b>
              </h4>
            </div>
            <div className="column">
              <h4>
                <b>January 2022 - Current</b>
              </h4>
            </div>
          </div>
          <div className="row">
            <p>
              <b>Anheuser-Busch InBev</b>
            </p>
            <p>
              <b>Remote - Contract</b>
            </p>
          </div>
          <div className="job_bullets">
            <ul>
              <li>
                Comprehend business requirements in a BI context and developed
                10+ data models to convert raw data into actionable insights
              </li>
              <li>
                Developed custom visual reports, dashboards and KPI scorecards
                using complex SQL queries and DAX to support Power BI
              </li>
              <li>
                Developed complex DAX formulas to create custom measures and
                calculated columns in Power BI for in-depth materials usage
                analysis.
              </li>
              <li>
                Collaborated with cross-functional teams to build interactive
                dashboards, leveraging DAX to enable dynamic filtering and KPI
                tracking.
              </li>
              <li>
                Designed and maintained data models, incorporating DAX
                calculations, resulting in improvement in data accuracy and
                reporting efficiency
              </li>
              <li>
                Connected to data sources (Oracle, Excel, SharePoint), imported
                and transformed data for BI
              </li>
              <li>
                Developed Power Apps and created automations to transform and
                display the data back into a Power BI report
              </li>
              <li>
                Provided continued maintenance and development of bug fixes for
                existing and new Power BI reports
              </li>
              <li>
                Used advanced DAX formulas to created calculations on data of
                unrelated tables and columns.{" "}
              </li>
              <li>
                Utilized Power View's capabilities to create drill-through
                reports, allowing stakeholders to analyze sales data at
                different levels of granularity.
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="column">
              <h4>
                <b>Power BI Developer</b>
              </h4>
            </div>
            <div className="column">
              <h4>
                <b>October 2022 - November 2022</b>
              </h4>
            </div>
          </div>
          <div className="row">
            <p>
              <b>Johnson-Controls Inc</b>
            </p>
            <p>
              <b>Remote - Part Time - Contract</b>
            </p>
          </div>
          <div className="job_bullets">
            <ul>
              <li>
                Built a Power BI report displaying Microsoft Project resource
                supply versus demand over time and included metadata of
                projects, resources, roles and timeframes
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="column">
              <h4>
                <b>Power BI Developer</b>
              </h4>
            </div>
            <div className="column">
              <h4>
                <b>July 2021 - December 2021</b>
              </h4>
            </div>
          </div>
          <div className="row">
            <p>
              <b>Pop Health Care</b>
            </p>
            <p>
              <b>Remote - Contract</b>
            </p>
          </div>
          <div className="job_bullets">
            <ul>
              <li>
                Maintained and supported SSAS by building tables, views,
                sequences, synonyms, stored procedures and extracting specific
                data
              </li>
              <li>
                Utilized Visual Studio to connect to SQL Server and build the
                data models and relationships for Power BI dashboards
              </li>
              <li>
                Created a python script to automate the gathering of data from
                SQL Server and format data into an excel sheet for monthly
                reporting of company KPI’s
              </li>
              <li>
                Utilized Power Map to create visualizations of client data,
                helping the company identify potential areas for market
                expansion.
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="column">
              <h4>
                <b>Senior Data Analyst</b>
              </h4>
            </div>
            <div className="column">
              <h4>
                <b>January 2020 - May 2021</b>
              </h4>
            </div>
          </div>
          <div className="row">
            <p>
              <b>Innospec Oilfield Services</b>
            </p>
            <p>
              <b>Midland, TX</b>
            </p>
          </div>
          <div className="job_bullets">
            <ul>
              <li>
                Support the development team by designing graphical
                presentations of complex business processes, concepts, and data
                points. Gather, analyze, and translate customer requirements.{" "}
              </li>
              <li>
                Converted lab data information given as a CSV into a SQL Server
                database to query into a Power BI dashboard for clients to view
                certain laboratory information from wells.
              </li>
              <li>
                Created a Power App for users to enter their monthly forecasted
                chemical inventory.
              </li>
              <li>
                Utilized Power Automate to enter the data into an Excel sheet
                and then also had multiple trends being viewed in a dashboard on
                Power BI.
              </li>
              <li>
                Created a Power App for users to view chemical labels and print
                as a PDF.
              </li>
              <li>
                Managed excel reports for customers and created a spreadsheet
                template for managers to input data.
              </li>
              <li>
                Used advanced Microsoft Excel to create pivot tables, pivot
                reporting, as well as use of VLOOKUP, and VBA code
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="column">
              <h4>
                <b>Data Analyst</b>
              </h4>
            </div>
            <div className="column">
              <h4>
                <b>January 2018 - December 2019</b>
              </h4>
            </div>
          </div>
          <div className="row">
            <p>
              <b>Chevron</b>
            </p>
            <p>
              <b>Midland, TX</b>
            </p>
          </div>
          <div className="job_bullets">
            <ul>
              <li>
                Maintained and supported SSAS by building tables, views,
                sequences, synonyms, stored procedures and extracting specific
                data.
              </li>
              <li>
                Utilized SQL Server to build tables and query data of facilities
                for EAM and connected this data to Power BI dashboards.
              </li>
              <li>
                Supported the development of a data visualization dashboard on
                Power BI that was created using Chevron’s Scaled Agile
                Framework. The dashboard consisted of work order and
                preventative maintenance measures of equipment at facilities.
              </li>
              <li>
                Communicated with facility engineers to gather data for
                facilities that were new or being removed.
              </li>
              <li>
                Oversaw data validation performed by the team at specific
                facility locations and update of EAM.
              </li>
              <li>
                Upload monthly add-ons to facilities and transfer PM's and WO's.
              </li>
              <li>
                Built PowerApps and PowerBI dashboards for employees to enter
                their weekly activities and accomplishments to share data with
                managers in a OneNote Notebook.
              </li>
              <li>Created a Power App for Heat Stress Prevention.</li>
              <li>
                Utilized Spotfire for entering, pulling, and trending data.
              </li>
              <li>
                Utilized a SQL package inside of TIBCO Spotfire to search for
                specific wells in Spotfire and developed a Python code that
                would complete and format the data into an Excel sheet.
              </li>
              <li>
                Used advanced Microsoft Excel to create pivot tables, pivot
                reporting, as well as use of VLOOKUP, and VBA code
              </li>
              <li>
                Used advanced DAX formulas that included functions, operators
                and values to perform calculations and queries on data
              </li>
              <li>Graduate of in-house Data Science program</li>
            </ul>
          </div>

          <div className="row">
            <div className="column">
              <h4>
                <b>Data Management Analyst</b>
              </h4>
            </div>
            <div className="column">
              <h4>
                <b>May 2014 - August 2015</b>
              </h4>
            </div>
          </div>
          <div className="row">
            <p>
              <b>Desert NDT - Shawcor</b>
            </p>
            <p>
              <b>Odessa, TX</b>
            </p>
          </div>
          <div className="job_bullets">
            <ul>
              <li>PSAIM (Project Safety Asset Integrity Manager) Certified</li>
              <li>
                Review inspection reports of pipes and update or modify reports
              </li>
              <li>
                Analyzed employee medical insurance by categorizing fees based
                off certain criteria.
              </li>
              <li>
                Comdata – compiled and created journal entries in NetSuite for
                daily per diem loads
              </li>
              <li>
                Analyzed Flex Spending Accounts (FSA) and inventory to prepare
                for a journal entry in NetSuite
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="column">
              <h4>
                <b>Reservoir Engineering Data Analyst</b>
              </h4>
            </div>
            <div className="column">
              <h4>
                <b>August 2013 - February 2014</b>
              </h4>
            </div>
          </div>
          <div className="row">
            <p>
              <b>EOG Resources</b>
            </p>
            <p>
              <b>Midland, TX</b>
            </p>
          </div>
          <div className="job_bullets">
            <ul>
              <li>
                Liaison for engineers to interpret and present data from oil
                wells.
              </li>
              <li>
                Assign new wells a property number and maintain and updated
                production data for wells in the system{" "}
              </li>
              <li>
                Utilized Spotfire, Aries, and Primo for well data storage and
                visualizations
              </li>
              <li>
                Load and maintain corporate databases of production data, P&ID’s
              </li>
              <li>
                Gather information from Spotfire to build production forecasting
                and economic analyses
              </li>
            </ul>
          </div>

          <div className="row">
            <i>
              Additional Experience:
              <br></br> Mathematics Professor at University of Texas of the
              Permian Basin and at Odessa College, 8/2015 – 12/2019; <br></br>
              Math Teacher/ Educator at Permian High School, 7/2008 – 8/2013 and
              8/2015 -12/ 2017.
            </i>
          </div>
        </div>
      </>
    );
  }
}
