import { Container } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

function ContentPage({ UserAuth }) {
  return (
    <div>
      <Container fluid className="containerWrap">
        <section>
          <ReactMarkdown># 여기에 마크다운 텍스트 </ReactMarkdown>
        </section>
      </Container>
    </div>
  );
}

export default ContentPage;
