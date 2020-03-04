import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    background: var(--mainYellow);
    border: 0.05rem solid var(--mainYellow);
    border-radius: 0.20rem;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    margin: 0.3rem 0.7rem;
    transition: all 0.5s ease-in-out;
&:hover{
    background: var(--mainWhite);
    border: 0.05rem solid var(--mainWhite);
    }
&focus{
    outline:none;
}
`;