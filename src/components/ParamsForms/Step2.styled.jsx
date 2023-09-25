import styled from 'styled-components';

export const WrapperRadio = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;

  .radio-wrapper1 {
    display: flex;
    flex-direction: column;
  }

  .radio-wrapper2 {
    display: flex;
    flex-direction: column;
    margin-left: 64px;
  }

  .radio-wrapper3 {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }

  .radio-text {
    color: #efede8;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  .radio {
    position: relative;
    margin-bottom: 4px;
  }

  .radio-input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .radio-label {
    padding-left: 25px;
    cursor: pointer;
    font-family: 'RobotoRegular';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.71em;
    letter-spacing: -0.28px;
    color: #efede8;
    margin-right: 9px;
  }

  .radio-label::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #636366;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 0;
    z-index: 1;
  }

  .radio-label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid var(--orange-light-color);
    background-color: var(--orange-light-color);
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 4px;
    z-index: 2;
  }

  .radio-input:checked + .radio-label::before {
    border-color: var(--orange-light-color);
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`;
