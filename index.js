const chatData = [
    {
      id: 1,
      title: 'Alice',
      imageURL: 'https://example.com/alice.png',
      orderId: 'OD123',
      messageList: [
        {
          messageId: 'msg1',
          message: 'Hi',
          messageType: 'text',
          sender: 'user',
        },
        {
          messageId: 'msg2',
          message: 'need assistance',
          messageType: 'text',
          sender: 'user',
        },
        {
          messageId: 'msg3',
          message: 'Sure, what do you need help with?',
          messageType: 'text',
          sender: 'contact',
        },
      ],
    },
    {
      id: 2,
      title: 'Bob',
      imageURL: 'https://example.com/bob.png',
      orderId: 'OD1234',
      messageList: [],
    },
  ];
console.log(chatData)
  const sidebarContainer=document.getElementById('sidebar-container')
  const sidecontent=document.getElementsByClassName('side-content')[0];

  console.log(sidecontent,"side-content")

  function x(id)
  {
    console.log(id)
  }
  

  chatData.map((item,index)=>{
    console.log(item,'....')
    const parent=document.createElement('div');
    parent.setAttribute('class','parent')
    const img=document.createElement('img');
    img.src=item.imageURL;
    img.setAttribute("alt","image")
    const child=document.createElement('div');
    const childText=document.createTextNode(item.title);
    child.appendChild(childText);
    child.setAttribute('class',"child")
    parent.appendChild(img);
    parent.appendChild(child);
   parent.onclick=function()
   {
    console.log(item.id)
    
    const arr=chatData.filter((items)=>{
        if(items.id==item.id)
        {
            return item;
        }
    })
    console.log(arr)
   }
    const hr=document.createElement('hr');
    

    sidebarContainer.appendChild(parent);
    sidebarContainer.appendChild(hr)

  })

  const sidediv=document.createElement('div');
  const text=document.createTextNode(chatData[0].messageList[0].message)
  sidediv.appendChild(text);
  if(chatData[0].messageList[0].sender=="user")
  {
    sidediv.setAttribute("class","placement")
  }
  sidecontent.appendChild(sidediv)
