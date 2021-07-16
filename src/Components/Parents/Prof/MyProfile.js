import React from 'react'
import styled from 'styled-components'

const StyledMain=styled.div`
       background:transparent;
        width:75%;
        height:95%;
        margin-top:20px;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        flex-direction: column;
        margin-left: 20%;
        .icons{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-auto-rows: minmax(50px,auto);
            grid-gap: 20px;
            

        }
        .charts{
            display: grid;
            grid-template-columns: 1fr;
        }
        .loader{
            width: '100%';
            min-height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

`;

export default function MyProfile() {
    return (
        <StyledMain>
            <h1>Profile</h1>
        </StyledMain>
    )
}
