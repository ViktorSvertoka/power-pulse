import {
  BtnAdd,
  BtnCancel,
  BtnWrapper,
  CaloriesSpan,
  CaloriesTitle,
  Form,
  InputQuontity,
  InputTitle,
  InputWrapper,
  ModalWrapper,
} from './AddProductModalWindow.styles';

const AddProductForm = () => {
  return (
    <ModalWrapper>
      <Form>
        <InputWrapper>
          <label>
            <InputTitle type="text" disabled />
          </label>
          <label>
            <InputQuontity placeholder="grams" type="number" />
          </label>
        </InputWrapper>
        <br />
        <p>
          <CaloriesSpan>
            <CaloriesTitle>Calories:</CaloriesTitle>
            {120}
          </CaloriesSpan>
        </p>
        <br />
        <BtnWrapper>
          <BtnAdd type="button">Add to diary</BtnAdd>
          <BtnCancel>Cancel</BtnCancel>
        </BtnWrapper>
      </Form>
    </ModalWrapper>
  );
};

export default AddProductForm;
