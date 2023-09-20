import styled from 'styled-components';
import bgImgDesk1x from 'src/images/hero-1x.jpg';
import bgImgDesk2x from 'src/images/hero-2x.jpg';
import bgImgTab1x from 'src/images/hero-tablet-1x.jpg';
import bgImgTab2x from 'src/images/hero-tablet-2x.jpg';
import bgImgMob1x from 'src/images/hero-mobile-1x.jpg';
import bgImgMob2x from 'src/images/hero-mobile-2x.jpg';
import { NavLink } from "react-router-dom";

export const WrapperSignInPage = styled.section`
	
	max-width: 374px;
	height: 100vh;
	margin-left: auto;
	margin-right: auto;
	background-color: var(--black-color);
	background-image: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0.00) 52.97%), linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), 
	url(${bgImgMob1x});
	background-repeat: no-repeat;
	background-position: right;
	background-size: contain;

	@media screen and (min-width: 375px) {
		max-width: 767px;
		height: 100vh;
		margin-left: auto;
		margin-right: auto;
		background-color: var(--black-color);
		background-image: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0.00) 52.97%), linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), 
			url(${bgImgMob1x}); 
		@media creen and (min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0.00) 52.97%), linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), 
			url(${bgImgMob2x});
		};
		background-repeat: no-repeat;
		background-position: right;
		background-size: contain;
	};
	@media screen and (min-width: 768px) {
		max-width: 1439px;
		height: 100vh;
		margin-left: auto;
		margin-right: auto;
		background-color: var(--black-color);
		background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0.00) 19.15%), linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), 
			url(${bgImgTab1x}); 
		@media creen and (min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0.00) 19.15%), linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), 
			url(${bgImgTab2x});
		};
		background-repeat: no-repeat;
		background-position: right;
		background-size: contain;
	};
	@media screen and (min-width: 1440px) {
		max-width: 1900px;
		height: 100vh;
		margin-left: auto;
		margin-right: auto;
		background-color: var(--black-color);
		background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0.00) 68.17%), 
			url(${bgImgDesk1x}); 
		@media creen and (min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0.00) 68.17%), 
			url(${bgImgDesk2x});
		};
		background-repeat: no-repeat;
		background-position: right;
		background-size: contain;
	 };
`;

export const ContainerSignInPage = styled.div`
	position: relative;
	margin-left: auto;
   margin-right: auto;
	width: 320px;
	padding-left: 5px;
	padding-top: 117px;

	@media screen and (min-width: 375px) {
		width: 375px;
		padding-left: 20px;
		padding-top: 127px;
	};
	@media screen and (min-width: 768px) {
		width: 768px;
		padding-left: 32px;
		padding-top: 189px;
	};
	@media screen and (min-width: 1440px) {
		width: 1440px;
		padding-left: 96px;
		padding-top: 200px;
	};
`;

export const FormSignInPage = styled.form`
	width: 300px;
	
	@media screen and (min-width: 375px) {
		width: 335px;
	};
	@media screen and (min-width: 768px) {
		width: 496px;
	};

	@media screen and (min-width: 1440px) {
		width: 496px;
	};
`;

export const TitleSignInPage = styled.h2`
	color: var(--white-color);
	font-family: 'RobotoBold';
	font-size: 24px;
	line-height: 1.17;
	margin-bottom: 14px;

	@media screen and (min-width: 768px) {
		font-size: 32px;
		line-height: 1.37;
		margin-bottom: 16px;
	};
`;

export const TextSignInPage = styled.p`
	color: var(--normal-color);
	font-family: 'RobotoRegular';
	font-size: 14px;
	line-height: 1.28;
	margin-bottom: 28px;

	@media screen and (min-width: 768px) {
		font-size: 16px;
		line-height: 1.5;
		margin-bottom: 32px;
	};
`;

export const EmailInputSignInPage = styled.input`
	width: 290px;
	height: 46px;
	color: var(--white-color);
	font-family: 'RobotoRegular';
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 14px;
	padding-left: 14px;
	padding-top: 14px;
	padding-bottom: 14px;
	background-color: transparent;
	border-radius: 12px;
	border: 1px solid rgba(239, 237, 232, 0.30);

	&::placeholder {
		color: var(--normal-color);
		font-family: 'RobotoRegular';
		font-size: 14px;
		line-height: 1.28;

		@media screen and (min-width: 768px) {
			font-size: 16px;
			line-height: 1.5;
		};
	};		

	&:hover,
	&:focus {
		border-color: var(--hover-color);	
		outline: 0;	
	}

	@media screen and (min-width: 375px) {
		width: 335px;
		margin-bottom: 20px;
	};
	@media screen and (min-width: 768px) {
		width: 364px;
		height: 52px;
		margin-bottom: 20px;
	};
`;

export const PassInputSignInPage = styled.input`
	width: 290px;
	height: 46px;
	color: var(--white-color);
	font-family: 'RobotoRegular';
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 28px;
	padding-left: 14px;
	padding-top: 14px;
	padding-bottom: 14px;
	background-color: transparent;
	border-radius: 12px;
	border: 1px solid rgba(239, 237, 232, 0.30);

	&::placeholder {
		color: var(--normal-color);
		font-family: 'RobotoRegular';
		font-size: 14px;
		line-height: 1.28;
		
		@media screen and (min-width: 768px) {
			font-size: 16px;
			line-height: 1.5;
		};
	};		

	&:hover,
	&:focus {
		border-color: var(--hover-color);	
		outline: 0;	
	}

	@media screen and (min-width: 375px) {
		width: 335px;
		margin-bottom: 20px;
	};
	@media screen and (min-width: 768px) {
		width: 364px;
		height: 52px;
		margin-bottom: 64px;
	};
`;

export const SecondTextSingInPage = styled.p`
	color: var(--normal-color);
	font-family: 'RobotoRegular';
	font-size: 12px;
	line-height: 1.5;
	margin-top: 12px;
	
`;

export const LinkSingInPage = styled(NavLink)`
	color: var(--white-color);
	font-family: 'RobotoRegular';
	font-size: 12px;
	line-height: 1.5;
	margin-left: 4px;
	text-decoration-line: underline;

	&:hover,
	&:focus {
		color: var(--hover-color);
	}
`;


export const FirstInfoBlockSingInPage = styled.div`
	width: 146px;
	height: 66px;
	border-radius: 12px;
	background: #303030;
	color: white;
	text-align: center;
	position: absolute;
	top: 450px;
	right: 165px;
	
	@media screen and (min-width: 375px) {
		top: 560px;
		right: 108px;
	};
	@media screen and (min-width: 768px) {
		width: 206px;
		height: 96px;
		right: 231px;
		bottom: 214px;
	};
	@media screen and (min-width: 1440px) {
		top: 384px;
		right: 464px;
	};
`;

export const SecondInfoBlockSingInPage = styled.div`
	width: 119px;
	height: 76px;
	border-radius: 12px;
	background: #303030;
	color: white;
	text-align: center;
	position: absolute;
	top: 550px;
	right: 35px;

	@media screen and (min-width: 375px) {
		width: 119px;
		height: 76px;
		top: 696px;
		right: 20px;
	};
	@media screen and (min-width: 768px) {
		width: 180px;
		height: 110px;
		bottom: 48px;
		right: 32px;
	};
	@media screen and (min-width: 1440px) {
		top: 519px;
		right: 32px;
	};
	
`;