import React from "react";
import styled from "styled-components";

const TabsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 20px;

  li.nav-item {
    button {
      cursor: pointer;
      font-weight: 500;
      padding: ".625rem 1.5rem .5rem";
      border-radius: 10rem;
      color: white;
      margin-bottom: 20px;
    }

    button.active {
      background-color: ${(props) => props.theme.colors.secondaryColor};
      border-color: var(--bs-secondary);
    }
  }
`;

interface ITabProps {
  tabType?: "tabs" | "pills";
  active?: string;
  children: React.ReactNode;
}

const Tabs = ({ tabType, active, children }: ITabProps) => {
  const [tabItems, setTabItems] = React.useState([]);

  React.useEffect(() => {
    if (children !== undefined) {
      // @ts-ignore
      let tempTabItems = children.map((item: any) => {
        return {
          key: item.props.tabKey,
          name: item.props.name,
          tabChildren: item.props.children,
        };
      });

      setTabItems(tempTabItems);
    }
  }, [children]);

  return (
    <>
      <TabsStyled className={`nav nav-${tabType}`} role="tablist">
        {tabItems.map((item: any, index: number) => (
          <li key={index} className="nav-item" role="presentation">
            <button
              className={`nav-link ${active === item.key ? "active" : ""}`}
              id={`${item.key}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${item.key}`}
              type="button"
              role="tab"
              aria-controls={`${item.key}`}
              aria-selected="true"
            >
              {item.name}
            </button>
          </li>
        ))}
      </TabsStyled>
      <div className="tab-content">
        {tabItems.map((tab: any, index: number) => (
          <div
            key={index}
            className={`tab-pane fade ${
              active === tab.key ? "show active" : ""
            }`}
            id={tab.key}
            role="tabpanel"
            aria-labelledby={`${tab.key}-tab`}
          >
            {tab.tabChildren}
          </div>
        ))}
      </div>
    </>
  );
};

Tabs.defaultProps = {
  tabType: "pills",
};

export default Tabs;
