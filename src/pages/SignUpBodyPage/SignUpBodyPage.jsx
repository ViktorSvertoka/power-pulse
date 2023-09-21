import { WrapperSignInPage } from '../../pages/SignInPage/SignInPage.styled';

import { Container, Wrapper } from './SignUpBodyPage.styled';
import DashboardItem from '../../components/DashboardItem/DashboardItem';
import ParamsForm from '../../components/ParamsForms/ParamsForms';

const SignUpBodyPage = () => {
  return (
    <WrapperSignInPage>
      <Container>
        <Wrapper>
          {' '}
          <ParamsForm />
          {/* <DashboardItem color="var(--orange-color)" iconId="icon-fork-knife" />
        <DashboardItem color="var(--orange-color)" iconId="icon-dumbbell" /> */}
        </Wrapper>
      </Container>
    </WrapperSignInPage>
  );
};

export default SignUpBodyPage;
//<div>SignUpBodyPage Page</div>;
