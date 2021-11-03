import styled from "styled-components";
import { TextDefault } from "../../components";

interface IProgressBarProps {
  title: string;
  width: number;
  min?: number;
  max?: number;
  className?: string;
}

const StyledProgressBar = styled.div`
  display: flex;
  height: 0.45rem;
  overflow: hidden;
  font-size: 0.5rem;
  background-color: transparent;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;

  .progress-bar {
    background-color: #ff4a57;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
  }
`;

const ProgressBar = ({
  title,
  width,
  min,
  max,
  className,
}: IProgressBarProps) => {
  return (
    <div className={className}>
      <div className="d-flex justify-content-between align-items-center">
        <TextDefault as="h6" className="fw-bold">
          {title}
        </TextDefault>
        <TextDefault as="h6">{width}</TextDefault>
      </div>
      <StyledProgressBar>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${width}%` }}
          aria-valuenow={10}
          aria-valuemin={min}
          aria-valuemax={max}
        />
      </StyledProgressBar>
    </div>
  );
};

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
};

export default ProgressBar;
