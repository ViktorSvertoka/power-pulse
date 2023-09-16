import { Container, Title, Avatar } from "./UserPage.styled";

const UserPage = () => {
    return (
      <Container>
       
        <Title>Profile Settings</Title>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '40px',
    }}>
          <Avatar><svg fill="var(--normal-color)" width="62" height="62"> <use href="../../../src/images/sprite.svg#icon-user"></use> </svg></Avatar>
          <svg style={{ position: 'relative', top: '-13' }} width="24" height="24"> <use href="../../../src/images/sprite.svg#icon-add-avatar"></use> </svg>
          <p style={{color: '#EFEDE8'}}>Anna Rybachok</p>
        <p style={{color: 'var(--normal-color)'}}>User</p>
        </div>
        
          </Container>
  )
}

export default UserPage;