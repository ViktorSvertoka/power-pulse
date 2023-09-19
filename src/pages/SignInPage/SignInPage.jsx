import Button from '../../components/Button/Button';
import {
	TitleSignInPage,
	FormSignInPage,
	WrapperSignInPage,
	TextSignInPage,
	EmailInputSignInPage,
	PassInputSignInPage,
	SecondTextSingInPage,
	LinkSingInPage,
	FirstInfoBlockSingInPage,
	SecondInfoBlockSingInPage,
	ContainerSignInPage,
} from './SignInPage.styled';

const SignInPage = () => {
  return (
		<WrapperSignInPage>
			<ContainerSignInPage>
			<FormSignInPage>
					<TitleSignInPage>Sign In</TitleSignInPage>
					<TextSignInPage>Welcome! Please enter your credentials to login to the platform:</TextSignInPage>
					<EmailInputSignInPage type="email" name="email" placeholder='Email'/>
					<PassInputSignInPage type="password" name="password" placeholder='Password'/>
					<Button 
						type ='submit'
						text = 'Sign In'
						background = 'var(--orange-color)'
						color = 'var(--white-color)'
						hoverBackground = 'var(--orange-light-color)'
					/>
					<SecondTextSingInPage>
						Don’t have an account? 
						<LinkSingInPage to='/signup'>Sign Up</LinkSingInPage>
					</SecondTextSingInPage>
				</FormSignInPage>
				<FirstInfoBlockSingInPage>1</FirstInfoBlockSingInPage>
				<SecondInfoBlockSingInPage>2</SecondInfoBlockSingInPage>
			</ContainerSignInPage>						
		</WrapperSignInPage>
  );
};

export default SignInPage;
