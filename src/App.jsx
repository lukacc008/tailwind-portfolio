import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/contact";
// import { getEmailServiceId, getEmailTemplateId, getEmailUserId } from "../utils/env";

// export async function getServerSideProps() {
//   const emailServiceId = getEmailServiceId();
//   const emailTemplateId = getEmailTemplateId();
//   const emailUserId = getEmailUserId();

//   return {
//     props: {
//       emailServiceId,
//       emailTemplateId,
//       emailUserId
//     }
//   };
// }

function App() {
  return (
    <div>
      <Header />
    <div id="home"><Home /></div>
    <div id="section"><Skills /></div>
    <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;