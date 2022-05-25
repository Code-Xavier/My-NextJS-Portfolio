import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 107%;
  margin-left: -40px;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 -40px;
       }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 -15px;
  }
`;





// import styled from 'styled-components';

// export const LeftSection = styled.div`
//   width: 150%;
//   margin-left: -45px;
//   @media ${(props) => props.theme.breakpoints.lg} {
//     width: 95%;
//     display: flex;
//     flex-direction: column;
//     margin: 0 auto 0 -47px;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     margin: 0 auto 0 -47px;

//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
    
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     margin: 0 auto 0 -15px;
//   }
// `;

