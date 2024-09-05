import { Box, Container, Button, Paper } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function Terms_and_Condition() {
  return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          p: 2,
          backgroundColor: "background.default",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            border: "2px solid blue",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              p={5}
              flex={1}
              sx={{
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <Typography color="blue" variant="h5" align="center" sx={{ mb: 3 }}>
                <strong>PATHFINDER TERMS AND CONDITIONS</strong>
              </Typography>
              <Typography variant="h6" gutterBottom>
                <strong>INTRODUCTION</strong>
              </Typography>
              <Typography paragraph>
      These terms and conditions (“Terms and Conditions” or “Agreement”)
            are binding on and apply to visitors of our website,<a
                href="https://www.robosafety.ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none",marginLeft:'5px'}}
              >
                https://www.robosafety.ca
              </a>{"."}
              (the “Site”), and any users (“you”, “your”, “User”) accessing,
              using, or otherwise interacting with PathFinder, provided by
              RoboSafety Inc. (“RoboSafety”, “us”, “we”), from the time that we
              provide you with access to PathFinder. <br/>
              By purchasing a subscription, or otherwise by accessing and using PathFinder, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and Conditions, along with any and all policies
              included by reference, such as our Privacy Policy at
             <a
             href="https://robosafety.ca/robosafety-privacy-policy/"
             target="_black"
             rel="noopener noreferrer"
             style={{color:"#007bff",textDecoration:"none",marginLeft:'5px'}}
            >
              https://robosafety.ca/robosafety-privacy-policy/
              </a>{"."} <br />
             If you are accessing or using PathFinder on behalf of an entity or
              organization, you represent and warrant that you:
              <ol style={{ paddingLeft: '20px',listStyleType: 'lower-roman' }}>
              <li>
                <Typography variant="subtitle1" align="justify">
                have the
                authority to legally bind such entity or organization; and
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" align="justify">
              that you are duly authorized to enter into this agreement on
              behalf of the entity or organization. In that event, all
              references to “you” in this agreement shall be a reference to both
              (1) you as an individual User (defined below); and (2) the entity
              or organization on whose behalf you are accessing and using
              PathFinder.RoboSafety reserves the right to update and change the
              Terms and Conditions by posting updates and changes to the Site.
              We strongly encourage you to check the Terms and Conditions from
              time to time for any updates that may impact you.
                </Typography>
              </li>
            </ol>
          
              

      </Typography>

      <Typography variant="h6" gutterBottom>
      <strong>DEFINITIONS</strong>
      </Typography>
      <Typography paragraph>
      “Account” means the account created through contacting RoboSafety
              and used by User as part of and to access PathFinder and related
              Services provided by RoboSafety.
              </Typography>
              <Typography paragraph>
               “Affiliate” means any entity
              which directly or indirectly controls, i.e., having direct or
              indirect ownership or control of more than 50% of the voting
              interests of the subject entity, is controlled by, or is under
              common control with the subject entity. “Agreement” means the
              Proposal, these Terms and Conditions, the Privacy Policy, and all
              referenced documents within an applicable Proposal that combine to
              form the entire agreement between the Parties, subject to Section
              14.3. 
              <Typography paragraph>
              “Applicable Law” means all laws, statutes, common law,
              regulations, ordinances, codes, rules, guidelines, orders,
              permits, tariffs, and approvals, including those relating to the
              environment or health and safety, of any governmental or
              regulatory authority that apply to the parties. “Services” means
              all tools, features, functionality, and other Services as
              described in one or more Proposals that may be provided by
              RoboSafety to its Users under these Terms and Conditions.
              </Typography>
              <Typography paragraph>
              “RoboSafety” means RoboSafety Inc., its employees, contractors,
              agents, Affiliates, and any other individual authorized by
              RoboSafety dealing in the matters under these Terms and
              Conditions. “RoboSafety Technology” means the technology and
              intellectual property used in providing the products and Services
              offered by RoboSafety, including PathFinder and any Services,
              including but not limited to the Services, provided through
              PathFinder, computer software, programs, connectors, websites,
              networks, and equipment. 
              </Typography>
              <Typography paragraph>
              RoboSafety technology does not include
              third-party applications or other software programs and technology
              provided or made available to Users by third parties. “Malicious
              Code” means viruses, worms, time bombs, Trojan horses, and other
              harmful or malicious code, files, scripts, agents, or programs.
              “Party” or “Parties” means either RoboSafety or the user, or a
              combination of both. “Personal Data” means any information
              relating to an identified or identifiable natural person; an
              identifiable natural person is one who can be identified, directly
              or indirectly, in particular by reference to an identifier such as
              a name, an identification number, location data, an online
              identifier, or to one or more factors specific to the physical,
              physiological, genetic, mental, economic, cultural, or social
              identity of that natural person. For greater certainty, Personal
              Data does not include information that is anonymized or
              aggregated. “Proposal” means the ordering document generated by
              RoboSafety for User’s purchases of Services that are executed
              thereunder by the Parties from time to time, specifying, among
              other things, a description of Services offered to, and purchased
              by, the user as well as the pricing terms for such Services that
              are purchased by User. Proposals may also be casually referred to
              as, order forms, quotes, statements of work, or work orders.
              “Register” or “Registration” means the point at which the User
              creates an Account by contacting RoboSafety either directly or via
              the Site. 
              </Typography>
              <Typography paragraph>
              “Pathfinder” means the software developed by RoboSafety
              and provided to its Users for the purpose of enhancing the safety
              of autonomous robots through modernized safety engineering
              solutions, including fault tree creation, and safety analysis
              tools, which is owned and provided by RoboSafety to its Users.
              “Subscription Plan” means one of the payment plans under which
              RoboSafety provides Users with access to and use of PathFinder.
              “Subscription Term” means the period set out under a particular
              Subscription Plan. “Support Services” means the support,
              maintenance, and training services provided or to be provided by
              RoboSafety to the User. Support services may be included as part
              of a User’s Subscription Plan for the Services or purchased for an
              additional fee, all of which are more fully described in the
              applicable Proposal. “Term” means the period from the effective
              date of a Subscription to the date of expiration of such
              Subscription. 
              </Typography>
              
              “User(s)” means any individual(s) who has created an
              Account. “User Data” means all electronic data or information 
              <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
              <li>
                <Typography variant="subtitle1" align="justify">
                uploaded by the Users in the process of using PathFinder,
                including profile information; or,
                               </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" align="justify">
                created as a result of
              additional inputs by the User in the process of using PathFinder.
              For greater clarity, User Data includes Personal Data and may
              comprise sensitive information including geolocation, and/or other
              personal information uploaded by User through PathFinder.
              “Website” or “Site” means the RoboSafety website owned and
              operated by RoboSafety at 
              <a
             href="https://robosafety.ca"
             target="_black"
             rel="noopener noreferrer"
             style={{color:"#007bff",textDecoration:"none",marginLeft:'5px'}}
            >
              https://robosafety.ca
              </a>{"."}
                </Typography>
              </li>
            </ol>
              <strong>2. THE SERVICES</strong><br/>
              <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
              <li>
                <Typography variant="subtitle1" align="justify">
                <strong>2.1  Services:</strong> <br/>RoboSafety hereby grants to you a limited, revocable, non-exclusive, non-transferable, non-sublicensable right to access and use the Services provided through PathFinder in accordance with the applicable Proposals during the Subscription Term. 
                               </Typography>
              </li>
              <li>
                <Typography variant="subtitle1" align="justify">
                <strong>2.2 Description of PathFinder:</strong>  <br/>PathFinder,
              which is powered by the RoboSafety Technology and other RoboSafety
              proprietary technology, provides safety analysis and fault tree
              creation tools to engineers for the purposes of enhancing safety
              in the large-scale deployment of autonomous systems. Any new
              features or tools which are added to the current Pathfinder
              Software shall also be subject to these Terms and Conditions.
                </Typography>
                </li>
                <li>
                <Typography variant="subtitle1" align="justify">
                <strong>2.3 Provision of PathFinder:</strong>
               <br/>RoboSafety shall make the Services
              available to User during the Term, as applicable. User may also
              subscribe for additional Services, which may be subject to
              additional fees, as such additional Services become available.
              User agrees that its Registration for the Services is neither
              contingent upon the delivery of any current or future
              functionality or features nor dependent upon any oral or written
              public comments made by RoboSafety with respect to current or
              future functionality or features.
                </Typography>
              </li>
            </ol>
      </Typography>
      <strong>3. USER ACCOUNT</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>3.1 User Account:</strong><br/>
          To access and use PathFinder, Users must contact RoboSafety, either by phone, email, or through the Site, to obtain a quote for access to the Services and to Register for an account (“Account”) by providing your name and a valid e-mail address, and any other information required by RoboSafety. RoboSafety may, in its sole and absolute discretion, reject an application for an Account for any reason, and RoboSafety reserves the right to refuse Services to anyone for any reason at any time. Upon Registration, User will be granted a username, password, and authentication material to access PathFinder (“User Login”).
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>3.2 Account and Password Security:</strong><br/>
          You acknowledge and agree that you are responsible for keeping secure your User Login that you receive in connection with your RoboSafety Account. RoboSafety will not be liable for any loss, damage, or claims, whether instigated by you or otherwise, directly or indirectly resulting from your failure to maintain the security of your User Login or User Account.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>3.3 User Account Requirements:</strong><br/>
          You must be at least 18 years of age to create a User Account for the Services. By creating a User Account, you represent and warrant that: You can form a binding contract with RoboSafety; You are not a person who is barred from using PathFinder under the laws of Canada or any other applicable jurisdiction; You will comply with these Terms and Conditions and all applicable local, provincial, national, and international laws, rules, and regulations. Persons under the age of majority in their jurisdiction (“Minor”) may not create or use an Account unless they have obtained the written consent of their parent or legal guardian. If you are a Minor, you may only use PathFinder with the consent of your parent or legal guardian. Please be sure your parent or legal guardian has reviewed and discussed these Terms and Conditions with you.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>3.4 Communication:</strong><br/>
          You acknowledge that RoboSafety may use the Personal Data you provide to RoboSafety at the time of Registration or as updated by you from time to time to communicate with you on matters related to PathFinder pursuant to the Privacy Policy available at <a href="https://robosafety.ca/robosafety-privacy-policy" target="_black" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none", marginLeft: '5px' }}>https://robosafety.ca/robosafety-privacy-policy</a>.
        </Typography>
      </li>
    </ol>

    <strong>4. USE OF THE SERVICES</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>4.1 RoboSafety Responsibilities:</strong><br/>
          RoboSafety shall:
          <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
            <li>Maintain the integrity of the Services;</li>
            <li>Provide certain Support Services to Users, at no additional charge as more fully described in the applicable Proposal; and</li>
            <li>Operate and maintain the Services in accordance with these Terms and Conditions and shall use its commercially reasonable efforts to perform such maintenance at such times to minimize the impact of any downtime of the Services to User.</li>
          </ol>
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>4.2 User Responsibilities:</strong><br/>
          User is responsible for all activities that occur in User Account and for Users’ compliance with these Terms and Conditions. User shall:
          <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
            <li>Have sole responsibility for the accuracy, quality, integrity, legality, reliability, and appropriateness of all User Data;</li>
            <li>Use PathFinder in compliance with the Use Guidelines described in Section 4.3;</li>
            <li>Use reasonable efforts to prevent unauthorized access to, or use of, PathFinder, and notify RoboSafety promptly of any such unauthorized access or use, including any such improper or unauthorized use by Users; and</li>
            <li>Comply with all Applicable Laws in using PathFinder.</li>
          </ol>
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>4.3 Use Guidelines:</strong><br/>
          User shall use PathFinder solely for its internal business purposes. User shall not:
          <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
            <li>License, sublicense, sell, resell, rent, lease, transfer, assign, distribute, time-share or otherwise commercially exploit the Services or make PathFinder available to any third party;</li>
            <li>Send spam or otherwise duplicative or unsolicited messages in violation of Applicable Laws;</li>
            <li>Send or store infringing, obscene, pornographic, threatening, libelous, or otherwise unlawful or tortious material, including material that is harmful to children or violates third-party intellectual property or privacy rights;</li>
            <li>Send or store Malicious Code (whether intentional or inadvertent);</li>
            <li>Interfere with or disrupt the integrity or performance of PathFinder or the data contained therein; or</li>
            <li>Attempt to gain unauthorized access to PathFinder or its related systems or networks.</li>
          </ol>
          You are responsible for all activity and content uploaded by you through PathFinder, and for ensuring the accuracy and completeness of any information we require to process your transactions.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>4.4 Third-Party Links:</strong><br/>
          Our Pathfinder Software may include links to other internet websites owned by third parties. These third-party sites are not owned, operated, or controlled by RoboSafety. RoboSafety is not responsible for, and has no liability for any third-party sites, their businesses, products, or content, except for the content that we have published specifically on those websites. If you choose to click on any link to a third party and visit their sites, these Terms and Conditions will no longer apply, and you will be subject to the Terms and Conditions and any other legal documents posted on that third-party site. Your use of those sites is at your own risk, and you agree that you will not bring a claim against RoboSafety arising from your use of any of these other websites.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>4.5 Investigation and Other Content:</strong><br/>
          RoboSafety may investigate and take any available legal action in response to illegal and/or unauthorized uses of PathFinder including such activities set out under Section 4.3. Such legal action or responses include, but are not limited to, terminating your RoboSafety Account.
        </Typography>
      </li>
    </ol>
    <strong>5. USER FEES</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>5.1 User Fees:</strong> <br/>
          User shall pay all Fees specified in the Proposal(s) hereunder. Fees for the Service must be paid for in advance and billed monthly or annually, in accordance with your subscription plan. RoboSafety will issue an invoice to User, which may be paid by direct deposit or cheque. You are responsible for maintaining complete and accurate billing and contact information through our automated payment system.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>5.2 Invoicing & Payment:</strong> <br/>
          Fees for the Services will be invoiced in advance and otherwise in accordance with the applicable Proposal. Unless otherwise stated in the applicable Proposal, charges are due net thirty (30) days from the invoice date. User is responsible for maintaining complete and accurate contact and billing information on the Services.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>5.3 Suspension or Termination for Non-Payment:</strong> <br/>
          If timely payment is not provided by User, RoboSafety reserves the right to suspend or revoke access to the Service, without liability to RoboSafety, until any outstanding amounts are paid in full.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>5.4 Effects of Suspension:</strong> <br/>
          If RoboSafety suspends User’s ability to access the Service:
          <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
            <li>User remains responsible for all Fees, including applicable interest rates as set out in Section 5.5 of these Terms and Conditions, accrued during the suspension period;</li>
            <li>User will not be entitled to any compensation or credits for any period of suspension, unless suspension was due to RoboSafety’s error or omission.</li>
          </ol>
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>5.5 Interest on Late Payments:</strong> <br/>
          Where User fails to pay any amount in accordance with the payment terms set out in Section 5 of these Terms and Conditions, RoboSafety shall have the right, in addition to any other rights or remedies available to it, to charge, and User shall pay, interest on such overdue amounts at the rate of 1.5% per month calculated daily, compounded monthly (18% per annum) both before and after any court judgment in respect of the same from the date such payment was due.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>5.6 Modification of Fees:</strong> <br/>
          RoboSafety may at any time, upon notice of 30 days, or a longer period if required by Applicable Law, change the price of the Service or any part thereof, or institute new charges or fees. If you have prepaid your month-to-month subscription service, price changes and the institution of new charges implemented after your prepayment will go into effect for your next monthly subscription term after the 30 days' notice and the updated fees will be subtracted from your prepayment. If you do not agree to any such price changes, then you must cancel your Service and stop using the Service prior to the commencement of the renewal subscription period for which the price change applies.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>5.7 Payment Disputes:</strong> <br/>
          User must assert any payment dispute in writing to
          <a
            href="mailto:info@robosafety.ca"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none", marginLeft: '5px' }}
          >
            info@robosafety.ca
          </a>{" "}
          within 30 days after the due date of the invoice giving rise to the dispute. RoboSafety shall not exercise its suspension or termination rights or apply interest on late payments if User disputes applicable charges reasonably and in good faith and provides reasonable cooperation to resolve the dispute.
        </Typography>
      </li>
    </ol>

    <strong>6. PROPRIETARY RIGHTS</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>6.1 Reservation of Rights:</strong> <br/>
          Subject to the limited rights expressly granted hereunder, and except for those intellectual property rights held by third parties in connection with PathFinder, RoboSafety reserves all right, title, and interest, including all intellectual property rights, in and to PathFinder and all technologies related thereto, including any and all processes and/or content developed by RoboSafety and all derivatives, modifications, or improvements of or to any of the foregoing made by or for RoboSafety, whether or not created or developed in connection with PathFinder. No rights are granted to User hereunder other than as expressly set forth herein.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>6.2 Restrictions:</strong> <br/>
          User shall not:
          <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
            <li>modify, copy or create derivative works based on PathFinder;</li>
            <li>frame or mirror any content forming part of PathFinder, other than for User’s own purposes;</li>
            <li>reverse engineer, disassemble, decompile, decode, adapt or otherwise attempt to derive or gain access to the source code of PathFinder, in whole or in part;</li>
            <li>access PathFinder in order to (A) build a competitive product or Services, or (B) copy any ideas, features, functions, or graphics of PathFinder.</li>
          </ol>
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>6.3 User Data:</strong> <br/>
          As between RoboSafety and User, User exclusively owns all rights, title, and interest in and to all User Data. User Data is deemed Confidential Information under these Terms and Conditions. You acknowledge that you upload sensitive information at your own risk and that RoboSafety shall not be liable for any loss, vulnerability, or damages resulting from the upload of such sensitive information by you for any reason.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>6.4 Sensitive Company Data:</strong> <br/>
          User acknowledges that PathFinder’s functionality is dependent on the User uploading and/or otherwise providing information, data, or test results related to safety risks that the User or the entity on whose behalf User has purchased access to PathFinder considers confidential, sensitive, and/or proprietary (“Sensitive Company Data”). As between RoboSafety and User, User shall exclusively own all Sensitive Company Data, and all Sensitive Company Data will be deemed “Confidential Information” under this Agreement. RoboSafety shall ensure that all Sensitive Company Data is stored, processed, and accessed securely in accordance with the principle of least privilege. RoboSafety will implement and maintain industry-standard practices to address the secure handling, storage, and transfer of any Sensitive Company Data within PathFinder.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>6.5 Usage Data:</strong> <br/>
          RoboSafety may collect certain data and information regarding User’s use of the Services, including, but not limited to, data involving functions within PathFinder most used by User or other items (“Usage Data”). RoboSafety may use and exploit Usage Data for any purpose in connection with operating, improving, and supporting PathFinder and any machine learning technology that underlies PathFinder (“Usage Data Purpose”). Notwithstanding any term in these Terms and Conditions to the contrary, User hereby consents to the use of such Usage Data for the Usage Data Purpose, and User irrevocably assigns all rights, title, and ownership of the Usage Data to RoboSafety, and User hereby waives any applicable non-assignable rights to such Usage Data to the extent User is legally permitted to do so. RoboSafety represents and warrants that it shall not use the Usage Data for any other purpose other than the Usage Data Purpose.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>6.6 Suggestions:</strong> <br/>
          Users are encouraged to submit any suggestions and feedback ("Feedback") related to their use and operation of PathFinder and can do so by sending an e-mail to us at 
          <a
            href="mailto:info@robosafety.ca"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none", marginLeft: '5px' }}
          >
            info@robosafety.ca
          </a>. If you provide us with any Feedback, you acknowledge that we may, in connection with the Services provided hereunder, freely use, copy, disclose, modify, improve upon, enhance, distribute, license, and otherwise exploit any such Feedback in any manner without any obligation, royalty, or other restriction based on intellectual property rights or otherwise. Nothing in these Terms and Conditions shall serve to limit our right to independently use, develop, evaluate, promote, market, or sell any products or services, whether they incorporate any Feedback or otherwise. RoboSafety acknowledges that any Feedback that you may provide is provided on an “as-is” basis, without representation of any kind as to the efficacy or usefulness of such feedback.
        </Typography>
      </li>
    </ol>

    <strong>7. PRIVACY RIGHTS</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>7.1 Privacy Obligations:</strong> <br/>
          Notwithstanding any provisions, representations, and warranties to the contrary, RoboSafety and User acknowledge that there is a possibility that the User Data and Usage Data may contain Personal Data, the use of which data is subject to various privacy laws, including all provincial, state, federal, and international laws and regulations and provincial, state, federal, and national government agency orders and decrees to which User may be subject (“Privacy Laws”), as well as certain restrictions imposed on the Personal Data by the data subjects or other third-party data providers. RoboSafety and User agree to strictly abide by all such restrictions pertaining to the Personal Data, as they are promulgated and applied, currently and in the future. Furthermore, RoboSafety shall in good faith execute any and all agreements that User is required to have RoboSafety execute in order that User may comply with any Privacy Laws. If RoboSafety or User’s use (whether directly or indirectly) of the Personal Data is contrary to any Privacy Law, or contrary to any of the restrictions set forth in these Terms and Conditions, the non-violating party shall have the right to:
          <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
            <li>terminate this Agreement for cause if such breach has not been cured within five (5) days of receipt by the violating party of written notice, and</li>
            <li>pursue any other legal and equitable remedies.</li>
          </ol>
          For greater certainty, RoboSafety’s Privacy Policy
          <a
            href="https://robosafety.ca/robosafety-privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none", marginLeft: '5px' }}
          >
            https://robosafety.ca/robosafety-privacy-policy
          </a>{" "}
          governs RoboSafety’s collection, use, disclosure, retention, and disposal of Personal Data and forms part of these Terms and Conditions.
        </Typography>
      </li>
    </ol>
    <strong>8. CONFIDENTIALITY</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>8.1 Definition of Confidential Information:</strong> <br/>
          As used herein, “Confidential Information” means all confidential and proprietary information of a Party (“Disclosing Party”) disclosed to the other Party (“Receiving Party”), whether orally or in writing, or whether disclosed purposefully or inadvertently, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure, including PathFinder, Services, and any User Data. Confidential Information shall not include any information that:
          <ol style={{ paddingLeft: '20px', listStyleType: 'lower-roman' }}>
            <li>is or becomes generally known to the public without breach of any obligation owed to Disclosing Party;</li>
            <li>was known to Receiving Party prior to disclosure by Disclosing Party without breach of any obligation owed to Receiving Party;</li>
            <li>is received from a third party without breach of any obligation owed to Disclosing Party; or</li>
            <li>was independently developed by Receiving Party without any use of or reference to Disclosing Party’s Confidential Information.</li>
          </ol>
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>8.2 Confidentiality:</strong> <br/>
          Receiving Party shall implement and maintain commercially reasonable and appropriate technical, administrative, and physical safeguards and security methods designed to prevent any unauthorized release, access to or publication of Confidential Information, or Personal Information. Receiving Party shall implement processes and maintain procedures designed to comply with Applicable Laws. For the purposes of RoboSafety’s processing of User Data, these Terms and Conditions are User’s instructions for storing User Data, and RoboSafety shall not process User Data for any other purpose. Receiving Party may use subcontractors to facilitate its obligations under these Terms and Conditions. Receiving Party shall use commercially reasonable measures to ensure that such subcontractors implement and comply with reasonable security measures in handling any Confidential Information. Receiving Party shall not disclose or use any Confidential Information for any purpose outside the scope of these Terms and Conditions, except with Disclosing Party’s prior written permission, subject to Section 8.3.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>8.3 Compelled Disclosure:</strong> <br/>
          If Receiving Party is compelled by law to disclose Confidential Information of Disclosing Party, including User Data, it shall provide Disclosing Party, as applicable, with prior notice of such compelled disclosure (to the extent legally permitted) and reasonable assistance, at Disclosing Party’s cost, if Disclosing Party wishes to contest the disclosure.
        </Typography>
      </li>
    </ol>

    <strong>9. WARRANTIES & DISCLAIMERS</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>9.1 Warranties:</strong> <br/>
          Each party represents and warrants that it has the legal power to be bound by these Terms and Conditions and any Proposals. User represents and warrants that for any Personal Data controlled by it, or any other Personal Data provided or transmitted by User to RoboSafety, whether advertent or otherwise, User, as applicable, has obtained the necessary consent or legal right to provide or transmit such data.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>9.2 No Guarantee:</strong> <br/>
          User acknowledges that PathFinder is designed to assist companies and Users in identifying, analyzing, and mitigating safety risks based on the information, data, and safety test results uploaded to PathFinder by Users, and that ultimate accountability, responsibility, and liability for any decisions or actions that may be taken by Users. RoboSafety accepts no responsibility, and hereby disclaims all liability arising out of or relating to any losses or damage that may be incurred by User or the company User represents for any decisions that are implemented due to the results generated by PathFinder. PathFinder is intended to complement, and not replace, User’s existing safety risk mitigation practices.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>9.3 Disclaimer:</strong> <br/>
          User acknowledges that no application is capable of providing complete protection against all known and unknown vulnerabilities/zero-day threats. To the maximum extent permitted by applicable law, PathFinder and any services provided hereunder are provided “as is,” with all faults, defects, bugs, and/or errors that may be present in the services, and RoboSafety makes no (and hereby disclaims all) other warranties, representations, or conditions, whether written, oral, express, implied, or statutory, including, without limitation, any implied warranties of satisfactory quality, course of dealing, trade usage or practice, merchantability, title, noninfringement, or fitness for a particular purpose, with respect to the use, misuse, or inability to use PathFinder and/or services (in whole or in part) or any other products or services provided to User by RoboSafety. RoboSafety does not warrant that all errors can be corrected, or that the operation of PathFinder shall be uninterrupted or error-free.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>9.4 User Representation and Warranty:</strong> <br/>
          You represent and warrant that all information and content you submit upon creating your Account, including information linked to any social media accounts, are accurate and truthful, and you have the right to post such content or information through PathFinder. You also acknowledge and agree that RoboSafety, its affiliates, or third-party partners, may place advertising through PathFinder.
        </Typography>
      </li>
    </ol>
    <strong>10. INDEMNIFICATION</strong><br/>
    <Typography variant="subtitle1" align="justify">
      Subject to these Terms and Conditions, User shall defend, indemnify, and hold RoboSafety harmless against any loss, damage, or costs (including reasonable attorneys’ fees) incurred in connection with any claims, demands, suits, or proceedings (“Claims”) made or brought against RoboSafety by a third party alleging that the User Data, or User’s use of PathFinder:
    </Typography>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          (i) infringes the intellectual property rights of such third party, or
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          (ii) has harmed such third party because Malicious Code was uploaded or inputted by Users,
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          (iii) electronic data or information was uploaded or inputted by Users without such third party’s authorization or permission, or
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          (iv) violates any Applicable Law, or has otherwise harmed a third party;
        </Typography>
      </li>
    </ol>
    <Typography variant="subtitle1" align="justify">
      provided, that RoboSafety:
    </Typography>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          (a) promptly gives written notice of the Claim to User;
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          (b) gives User sole control of the defense and settlement of the Claim (provided that User may not settle or defend any Claim unless it unconditionally releases RoboSafety of all liability); and
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          (c) provides to User, at User’s cost, all reasonable assistance.
        </Typography>
      </li>
    </ol>
    <strong>11. LIMITATION OF LIABILITY</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>11.1 Limitation of Liability:</strong> <br/>
          In no event shall RoboSafety’s aggregate liability arising out of or related to these Terms and Conditions, or the relationship between RoboSafety and User, whether in contract, tort, or under any other theory of liability, exceed the subscription fees or under the relevant proposal, if any, paid by and due from the User hereunder.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>11.2 Exclusion of Consequential and Related Damages:</strong> <br/>
          In no event shall RoboSafety have any liability to User(s) for any lost profits or for any indirect, special, incidental, punitive, or consequential or exemplary damages however caused and, whether in contract, tort, or under any other theory of liability, whether or not the User has been advised of the possibility of such damages.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>11.3 Limitation of Claims:</strong> <br/>
          Except with respect to claims relating to the misuse of confidential information or personal information, the User shall not bring any claim relating to the agreement more than two years after the events giving rise to the claim occurred.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>11.4 General:</strong> 
          These exclusions and limitations apply even if the remedies are insufficient to cover all of the losses or damages of the User. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some or all of the above exclusions or limitations may not apply and the parties may have additional rights.
        </Typography>
      </li>
    </ol>
    <strong>12. TERMINATION</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>12.1 Termination for Cause:</strong> <br/>
          RoboSafety may terminate this Agreement immediately without written notice to User for a breach or violation, or suspected breach or suspected violation, of any provision under these Terms and Conditions, as determined in the sole discretion of RoboSafety. Verbal or written abuse of any kind (including threats of abuse or retribution) of any RoboSafety User, employee, member, or officer will result in immediate Account termination. If RoboSafety, in its sole and absolute discretion, suspects for any reason that User has uploaded illicit or prohibited materials under these Terms and Conditions to their Account, RoboSafety reserves the right to terminate the Account in connection with such suspicion.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>12.2 Cancellation:</strong> <br/>
          User may cancel the Account and terminate this Agreement at any time by contacting 
          <a
            href="info@robosafety.ca."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none", marginLeft: '5px' }}
          >
            info@robosafety.ca
          </a>{" "} or deleting the User Account through account settings.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>12.3 Outstanding Fees:</strong> <br/>
          Termination or cancellation shall not relieve the User of the obligation to pay any fees accrued or payable to RoboSafety prior to the effective date of termination.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>12.4 Surviving Provisions:</strong> <br/>
          The following provisions of these Terms and Conditions shall survive any termination or expiration of these Terms and Conditions: Sections 6 through 14.
        </Typography>
      </li>
    </ol>
    <strong>13. GENERAL PROVISIONS</strong><br/>
    <ol style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.1 Relationship of the Parties:</strong> <br/>
          These Terms and Conditions do not create a partnership, franchise, joint venture, agency, fiduciary, or employment relationship between the parties.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.2 No Third-Party Beneficiaries:</strong> <br/>
          Except as otherwise expressed herein, there are no third-party beneficiaries under these Terms and Conditions.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.3 Entire Agreement:</strong> <br/>
          This Agreement consists of the entire agreement between the Parties hereto with respect to the subject matter hereof and supersedes any previous understandings or agreements, whether written or oral, in respect of such subject matter.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.4 Waiver and Cumulative Remedies:</strong> <br/>
          No failure or delay by either party in exercising any right under these Terms and Conditions shall constitute a waiver of that right. Other than as expressly stated herein, the remedies provided herein are in addition to, and not exclusive of, any other remedies of a party at law or in equity.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.5 Severability:</strong> <br/>
          If any provision of these Terms and Conditions is held by a court of competent jurisdiction to be contrary to law, the provision shall be modified by the court and interpreted so as best to accomplish the objectives of the original provision to the fullest extent permitted by law, and the remaining provisions of these Terms and Conditions shall remain in effect.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.6 Assignment:</strong> <br/>
          User may not assign any of its rights or obligations hereunder, whether by operation of law or otherwise, without the prior written consent of RoboSafety (not to be unreasonably withheld). Notwithstanding the foregoing, RoboSafety may assign this Agreement in its entirety, without consent of the User, in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets. Any attempt by User to assign its rights or obligations under these Terms and Conditions in breach of this Section 13.6 shall be void and of no effect. Subject to the foregoing, these Terms and Conditions shall bind and enure to the benefit of the parties, their respective successors, and permitted assigns.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.7 Governing Law and Exclusive Jurisdiction:</strong> <br/>
          These Terms and Conditions will be governed by and construed in accordance with the laws of the Province of Ontario and the laws of Canada applicable therein, without regard to principles of conflicts of laws. In the event that any dispute should arise in connection with these Terms and Conditions, or the construction or application thereof, or as to any act, deed, or omission of RoboSafety, any User, or any User, the parties irrevocably submit to the exclusive jurisdiction of the courts of the Province of Ontario for the resolution of any such dispute.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.8 Equitable Relief:</strong> <br/>
          User acknowledges that damages may be an inadequate remedy if User violates the obligations under these Terms and Conditions, and RoboSafety shall have the right, in addition to any other rights it may have, to seek injunctive relief without any obligation to post any bond or similar security.
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.9 Notices:</strong> <br/>
          RoboSafety shall communicate announcements of general interest by email or by posting on its Website. RoboSafety shall provide User with legal notices by email provided by User. User shall immediately notify RoboSafety if User’s email address for notice changes. Except as otherwise specified in these Terms and Conditions, all notices must be in writing to 
          <a
            href="info@robosafety.ca."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none", marginLeft: '5px' }}
          >
            info@robosafety.ca
          </a>{" "}
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" align="justify">
          <strong>13.10 Dispute Resolution:</strong> <br/>
          All disputes arising in connection with this Agreement and its negotiation, performance, breach, existence, or validity shall be referred to and determined by arbitration with ADR Chambers in accordance with the ADR Chambers Arbitration Rules and the Arbitration Act, 1991 (Ontario). Notwithstanding the foregoing, neither Party shall be precluded from applying to a court of competent jurisdiction for any relief in the nature of injunction, specific performance, or other equitable remedy.
        </Typography>
      </li>
    </ol>

    <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "background.paper", 
            }}
          >
            </Box>
            </Box>
            <Box display="flex" justifyContent="center" gap={3} p={2}>
              <Button color="primary" variant="contained">
                Print
              </Button>
              {/* <Button color="primary" variant="contained">
                Accept
              </Button> */}
              {/* <Button color="primary" variant="contained">
                Decline
              </Button> */}
            </Box>
          </Paper>
        </Container>
      </Box>
  );
}