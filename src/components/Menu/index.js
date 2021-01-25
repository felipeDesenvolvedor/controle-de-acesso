import styled from 'styled-components';

const Menu = () => {
    const Wrapper = styled.div`
        width:210px;
        background-color:var(--blue-ligth);
    `;    
    const MenuStyled = styled.ul`
        color:var(--color-white);
        font-weight:600;
        font-size:12px;
    `;
    const Itens = styled.li`
       list-style:none;
       padding:20px;

       &:hover {
           background-color:var(--color-hover-menu);
       }
    `;

    return(
        <Wrapper>
            <MenuStyled>
                <Itens>Home</Itens>
                <Itens>Agendamentos</Itens>
                <Itens>Cadastros</Itens>
                <Itens>Report</Itens>
                <Itens>Sair</Itens>
            </MenuStyled> 
        </Wrapper>
    );
}

export default Menu;


