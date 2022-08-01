import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  flex-basis: 60%;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
// 
// export const RightSection = styled.div`
//   width: 50%;
//   position: relative;
//   display: flex;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 80%;
//     display: flex;
//     flex-direction: column;
//
//     margin: 0 auto;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//
//     margin: 0 auto;
//   }
// `;

//
// export const LeftSection = styled.div`
//   width: 100%;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 80%;
//     display: flex;
//     flex-direction: column;
//
//     margin: 0 auto;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//
//     margin: 0 auto;
//   }
//
//
