import React from "react";
import { TitleDefault, TextDefault, Code } from "../../components";

const Container = () => {
  return (
    <div>
      <TitleDefault>
        <strong> Container</strong>{" "}
      </TitleDefault>

      <TextDefault as="p">
        Container is designed to be used as a wrapper for the entire app. It is
        used to provide a consistent look and feel and provides default theme's
        configuration automatically to loose text. This prevents over-reliant on{" "}
        <strong>TextDefault</strong> component.
      </TextDefault>

      <div>
        <TextDefault
          as="p"
          className="fw-bold"
          data-bs-toggle="collapse"
          data-bs-target="#container-additionalProperties"
          aria-expanded="false"
          aria-controls="container-additionalProperties"
        >
          Example <i className="fas fa-chevron-down"></i>
        </TextDefault>
        {/* Collapsed content */}
        <div className="collapse mt-3" id="container-additionalProperties">
          <Code>
            {`import { Container } from "component"; `}
            <pre>
              {` ${""}<Container>
              <App />
              </Container>`}
            </pre>
          </Code>

          <strong>*</strong>
          <em className="ms-1 small">
            Even if the <strong>Container</strong> is designed to be a wrapper,
            you can use it anywhere.
          </em>
        </div>
      </div>
    </div>
  );
};

export default Container;
