import React from "react";
import { Code, EmptySpace, TextDefault } from "../../components";

const Typography = () => {
  return (
    <div className="mb-4">
      <Code>
        &#60;TextDefault as="h1"&#62; <br />
        &#60;TextDefault as="h2"&#62; <br />
        &#60;TextDefault as="h3"&#62; <br />
        &#60;TextDefault as="h4"&#62; <br />
        &#60;TextDefault as="h5"&#62; <br />
        &#60;TextDefault as="h6"&#62; <br />
      </Code>
      <TextDefault as="h1">
        Header 1 <small className="text-muted">(h1)</small>
      </TextDefault>
      <TextDefault as="h2">
        Header 2 <small className="text-muted">(h2)</small>
      </TextDefault>
      <TextDefault as="h3">
        Header 3 <small className="text-muted">(h3)</small>
      </TextDefault>
      <TextDefault as="h4">
        Header 4 <small className="text-muted">(h4)</small>
      </TextDefault>
      <TextDefault as="h5">
        Header 5 <small className="text-muted">(h5)</small>
      </TextDefault>
      <TextDefault as="h6">
        Header 6 <small className="text-muted">(h6)</small>
      </TextDefault>

      <EmptySpace height={20} />

      <Code>
        &#60;TextDefault className="display-1" &#62; <br />
        &#60;TextDefault className="display-2"&#62; <br />
        &#60;TextDefault className="display-3" &#62; <br />
        &#60;TextDefault className="display-4" &#62; <br />
        &#60;TextDefault className="display-5" &#62; <br />
        &#60;TextDefault className="display-6" &#62; <br />
      </Code>
      <TextDefault className="display-1" as="h1">
        Display 1 <small className="text-muted">(.display-1)</small>
      </TextDefault>
      <TextDefault className="display-2" as="h1">
        Display 2 <small className="text-muted">(.display-2)</small>
      </TextDefault>
      <TextDefault className="display-3" as="h1">
        Display 3 <small className="text-muted">(.display-3)</small>
      </TextDefault>
      <TextDefault className="display-4" as="h1">
        Display 4 <small className="text-muted">(.display-4)</small>
      </TextDefault>
      <TextDefault className="display-5" as="h1">
        Display 5 <small className="text-muted">(.display-5)</small>
      </TextDefault>
      <TextDefault className="display-6" >
        Display 6 <small className="text-muted">(.display-6)</small>
      </TextDefault>
    </div>
  );
};

export default Typography;
