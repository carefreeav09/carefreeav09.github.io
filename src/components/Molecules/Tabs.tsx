import React from "react";
import styled, { ThemeContext } from "styled-components";
import { TextDefault } from "../../components";

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
      margin-bottom: 20px;

      span {
        font-weight: 700;
      }
    }

    button.active {
      background-color: var(--bs-secondary) !important;
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
  const themeContext = React.useContext(ThemeContext);
  const [activeItem, setActiveItem] = React.useState(active);

  console.log(themeContext, "theme context");

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

  const handleTabChange = (activeTab: string) => {
    setActiveItem(activeTab);
  };

  return (
    <>
      <TabsStyled className={`nav nav-${tabType}`} role="tablist">
        {tabItems.map((item: any, index: number) => (
          <li key={index} className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeItem === item.key ? "active" : ""}`}
              id={`${item.key}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${item.key}`}
              type="button"
              role="tab"
              aria-controls={`${item.key}`}
              aria-selected="true"
              onClick={() => handleTabChange(item.key)}
            >
              <TextDefault
                as="span"
                color={
                  activeItem === item.key
                    ? themeContext.colors.background
                    : themeContext.colors.textColor
                }
              >
                {item.name}
              </TextDefault>
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
