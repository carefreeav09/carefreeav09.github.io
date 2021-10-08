import React from "react";
import { EmptySpace, TextDefault, TitleDefault } from "../../components";

const Typography = () => {
  return (
    <div className="mb-4">
      <TitleDefault>
        <strong> TextDefault</strong>{" "}
      </TitleDefault>

      <TextDefault as="p">
        TextDefault is the primary text component. It is used for almost every
        text based item in the app. TextDefault uses all the{" "}
        <a href="https://getbootstrap.com/docs/5.0/utilities/text/">
          text utilities
        </a>{" "}
        provided by <a href="https://getbootstrap.com">Bootstrap 5</a>. So you
        can use them however you like.
      </TextDefault>

      <div>
        <TextDefault
          as="p"
          className="fw-bold"
          data-mdb-toggle="collapse"
          data-mdb-target="#textDefault-additionalProperties"
          aria-expanded="false"
          aria-controls="textDefault-additionalProperties"
        >
          Additional Properties <i className="fas fa-chevron-down"></i>
        </TextDefault>
        {/* Collapsed content */}
        <div className="collapse mt-3" id="textDefault-additionalProperties">
          <table className="table table-bordered">
            <tr>
              <TextDefault as="th">Properties</TextDefault>
              <TextDefault as="th">Description</TextDefault>
              <TextDefault as="th">Type</TextDefault>
              <TextDefault as="th">Default</TextDefault>
            </tr>
            <tr>
              <td>
                <code>color</code>
              </td>

              <TextDefault as="td">
                Overrides the theme <code>color</code> for the text
              </TextDefault>

              <TextDefault as="td">string</TextDefault>

              <TextDefault as="td">theme default</TextDefault>
            </tr>
            <tr>
              <td>
                <code>background</code>
              </td>
              <TextDefault as="td">
                Overrides the theme<code>background-color</code>for the text
              </TextDefault>
              <TextDefault as="td">string</TextDefault>

              <TextDefault as="td">theme default</TextDefault>
            </tr>
            <tr>
              <td>
                <code>fontSize</code>
              </td>
              <TextDefault as="td">
                Sets custom font-size for the text
              </TextDefault>
              <TextDefault as="td">string</TextDefault>

              <TextDefault as="td">app default</TextDefault>
            </tr>

            <tr>
              <td>
                <code>underlined</code>
              </td>
              <TextDefault as="td">Adds an underline to the text</TextDefault>
              <TextDefault as="td">boolean</TextDefault>
              <TextDefault as="td">false</TextDefault>
            </tr>
          </table>
        </div>
      </div>

      <div>
        <TextDefault
          as="p"
          className="fw-bold"
          data-mdb-toggle="collapse"
          data-mdb-target="#textDefault-examples"
          aria-expanded="false"
          aria-controls="textDefault-examples"
        >
          Examples <i className="fas fa-chevron-down"></i>
        </TextDefault>

        <div className="collapse mt-3" id="textDefault-examples">
        <TitleDefault>
            <strong> HEADER </strong>{" "}
          </TitleDefault>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <TextDefault as="h1">
                    Header 1 <small className="text-muted">(h1)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>&#60;TextDefault as="h1"&#62;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h2">
                    Header 2 <small className="text-muted">(h2)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>&#60;TextDefault as="h2"&#62;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h3">
                    Header 3 <small className="text-muted">(h3)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>&#60;TextDefault as="h3"&#62;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h4">
                    Header 4 <small className="text-muted">(h4)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>&#60;TextDefault as="h4"&#62;</code>
                </td>
              </tr>{" "}
              <tr>
                <td>
                  <TextDefault as="h5">
                    Header 5 <small className="text-muted">(h5)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>&#60;TextDefault as="h5"&#62;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h6">
                    Header 6 <small className="text-muted">(h6)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>&#60;TextDefault as="h6"&#62;</code>
                </td>
              </tr>
            </tbody>
          </table>

          <EmptySpace height={20} />

          <TitleDefault>
            <strong> DISPLAY </strong>{" "}
          </TitleDefault>

          <TextDefault as="p">
            Displays can be set using the TextDefault component followed by the
            respective class. They follow the <code>display-1</code> to{" "}
            <code>display-6</code> sizing patterns from Bootstrap 5.
          </TextDefault>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <TextDefault as="h1" className="display-1">
                    Display 1 <small className="text-muted">(h1)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>
                    &#60;TextDefault as="h1" className="display-1"&#62;
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h2" className="display-2">
                    Display 2 <small className="text-muted">(h2)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>
                    &#60;TextDefault as="h2" className="display-2"&#62;
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h3" className="display-3">
                    Display 3 <small className="text-muted">(h3)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>
                    &#60;TextDefault as="h3" className="display-3"&#62;
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h4" className="display-4">
                    Display 4 <small className="text-muted">(h4)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>
                    &#60;TextDefault as="h4" className="display-4"&#62;
                  </code>
                </td>
              </tr>{" "}
              <tr>
                <td>
                  <TextDefault as="h5" className="display-5">
                    Display 5 <small className="text-muted">(h5)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>
                    &#60;TextDefault as="h5" className="display-5"&#62;
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <TextDefault as="h6" className="display-6">
                    Display 6 <small className="text-muted">(h6)</small>
                  </TextDefault>
                </td>
                <td>
                  <code>
                    &#60;TextDefault as="h6" className="display-6"&#62;
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Typography;
