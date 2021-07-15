import React,{useState} from 'react'
import { Drawer, Button, Radio, Space } from 'antd';
import styled from 'styled-components'

const StyledDraw=styled.div`
display: flex;

`;

export default function Classes() {
  const [visible,setVisible]=useState(true)
  function close() {
    setVisible(false)
}
    return (
        <div>
         <Drawer
          title="Manage Classes"
          placement='top'
          closable={false}
          onClose={close}
          visible={visible}
        >
         <StyledDraw></StyledDraw>
        </Drawer>
        </div>
    )
}
