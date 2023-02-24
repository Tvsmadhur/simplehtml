import {Avatar,ListBlock,Button,Icon,Text,Badge,Footer,Header,} from '@jds/core';
import { IcAdd, IcChevronRight, IcMinus,IcJioDot, IcBack } from '@jds/core-icons'
import React,{useState} from 'react'
function Sidebar()
{

  const [toggle,setToggle]=useState(false)
  console.log(toggle)
  const changing=()=>
  {
    console.log("1")
    if(toggle==false)
    {
      setToggle(true);
    }
    else
    {
      setToggle(false);
    }
  }
    return(
        <>
       <div className="relative">
       <Header   logo={<Icon ic={<IcBack />}  />}   />
       <div className='absolute top-5 left-16'>
       <Text color="white" appearance='body-m'>Settings</Text>
       </div>

       </div>

  <div className="mt-10">
  <div className="mx-5 py-5 border-b border-gray-40 relative">
  <ListBlock
    prefix={<Avatar size="large" />}
    suffix={<Button icon={<IcChevronRight />} kind="tertiary"/>}
    title="JioSaavn"
    verticalAlignment="top"

  >
    <Text
      appearance="body-xs"
      color="primary-50"
      className="absolute top-14 left-16"
    >
     +91-9963548831
    </Text>
    </ListBlock>
  </div>
  <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={<>
      <Badge label='New' size="small" />
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
    </>}
    title="JioSaavn"
    

  />
  </div>
  <div className="mx-5  border-b border-gray-40 ">
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={<Button icon={(toggle===false)?<IcAdd onClick={changing}/>:<IcMinus onClick={changing}/>} kind="tertiary"/>}
    title="JioTV"
  />
  {(toggle==true)?
  <>
  <div className="mx-5  " >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={<Button icon={<IcChevronRight  />} kind="tertiary"/>}
    title="JioSaavn"
     />
  </div>
  <div className="mx-5 " >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={<Button icon={<IcChevronRight  />} kind="tertiary"/>}
    title="JioSaavn"
    

  />
  </div>
  <div className="mx-5 " >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={<>
     

    <Button icon={<IcChevronRight  />} kind="tertiary"/>
    </>}
    title="JioSaavn"
    

  />
  </div>
  
  </>
 : <></>}
    
    </div>
    <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
  }
    title="JioSaavn"
    />
  </div>
  <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
  }
    title="JioSaavn"
   />
  </div>
  <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
  }
    title="JioSaavn"
    />
  </div>
  <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
  }
    title="JioSaavn"
    />
  </div>
  <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
  }
    title="JioSaavn"
    />
  </div>
  <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
  }
    title="JioSaavn"
    />
  </div>
  <div className="mx-5  border-b border-gray-40" >
  <ListBlock
    prefix={<Avatar size="small" />}
    suffix={
    <Button icon={<IcChevronRight  />} kind="tertiary"/>
  }
    title="JioSaavn"
    />
  </div>
    </div>
   
    <Footer
   
    bottomLinks={[
      {
        href: '#',
        newTab: true,
        title: 'Regulatory'
      },
      {
        href: '#',
        newTab: true,
        title: 'Policies'
      },
      {
        href: '#',
        newTab: true,
        title: 'Terms & Conditions'
      }
    ]}
    logo={<Icon
      color="primary"
      ic="IcJioDot"
      size="l"
    />}
    copyright="Copyright © 2021 Reliance Jio Infocomm Ltd. All rights reserved."
    expandedLinks={[
      0,
      2
    ]}
    />
   
  </>
 
  
  )
}
export default Sidebar