import Kurzy01 from "layouts/kurzy/kurz";

const contentData = require(`layouts/kurzy/Data2/lesson08.json`);

export default function KurzyPage() {
  return <Kurzy01 contentData={contentData} />;
}
