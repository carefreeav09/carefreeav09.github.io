import React from "react";
import styled from "styled-components";

const Highlight = styled.div`
  margin-bottom: 1rem;
  background-color: #f8f9fa;
  padding: 1rem 1.5rem;

  pre {
    padding: 0;
    margin-top: 0.65rem;
    margin-bottom: 0.65rem;
    white-space: pre;
    background-color: transparent;
    border: 0;
    overflow: auto;
    font-size: 0.875em;
    direction: ltr;
    unicode-bidi: bidi-override;

    code {
      font-size: inherit;
      color: #212529;
      word-wrap: normal;
      word-break: normal;
    }
  }
`;

const Code = ({ children }) => {
  return (
    <Highlight>
      <code>
        <pre>
          {children}
        </pre>
      </code>
    </Highlight>
  );
};

export default Code;
