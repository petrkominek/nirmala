import Kurzy01 from "layouts/kurzy/kurz";

const contentData = require(`layouts/kurzy/Data2/lesson12.json`);

export default function KurzyPage() {
  return <Kurzy01 contentData={contentData} />;
}
